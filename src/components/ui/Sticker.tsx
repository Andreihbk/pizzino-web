"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface StickerProps {
  src: string;
  initialX: number;
  initialY: number;
  rotate: number;
  label?: string;
}

export default function Sticker({ src, initialX, initialY, rotate }: StickerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  

  // Change '500' to control the fall
  const scrollOffset = useTransform(scrollY, [0, 1000], [0, 300 * (Math.random() + 0.5)]);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <motion.div
      drag
      
      dragConstraints={{ left: -50, right: window.innerWidth - 150, top: -50, bottom: 1000 }}
      dragElastic={0.1}
      style={{ 
        x: initialX, 
        y: scrollOffset, 
        top: initialY,
        rotate: rotate 
      }}
      whileHover={{ scale: 1.1, cursor: "grab" }}
      whileTap={{ scale: 0.9, cursor: "grabbing" }}
      className="absolute z-20 w-32 h-32 md:w-40 md:h-40 select-none"
    >
      <Image 
        src={src} 
        alt="Sticker" 
        width={200} 
        height={200} 
        className="pointer-events-none drop-shadow-lg"
      />
    </motion.div>
  );
}