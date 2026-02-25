"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Setări pentru un scroll "elastic" și fin
  const springConfig = { damping: 25, stiffness: 250 };
  const edgeX = useSpring(cursorX, springConfig);
  const edgeY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveMouse);
    
    // Detectăm când mouse-ul este peste link-uri sau butoane
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-brand-red rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: edgeX,
        y: edgeY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovering ? 2.5 : 1, // Cursorul crește la hover
      }}
    >
      {/* Un mic punct în mijloc la hover */}
      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center text-[4px] text-brand-cream font-bold">
          PIZZA
        </div>
      )}
    </motion.div>
  );
}