"use client";
import { motion } from "framer-motion";

const marqueeText = "FRESH AS F*** • ARTISAN DOUGH • REAL PIZZA • HAND CRAFTED • PIZZINO • ";

export default function Marquee() {
  return (
    <div className="relative w-full bg-brand-black py-6 overflow-hidden border-y-2 border-brand-red">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }} // Se mișcă spre stânga
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Viteza de defilare
        }}
      >
        {/* Repetăm textul de câteva ori ca să nu avem goluri */}
        <span className="text-4xl md:text-6xl font-heading text-brand-cream uppercase pr-4">
          {marqueeText.repeat(10)}
        </span>
      </motion.div>
    </div>
  );
}