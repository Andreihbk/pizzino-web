"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-cream/80 backdrop-blur-md border-b border-brand-black/10">
      {/* Logo-ul cu fontul Brutalist */}
      <Link href="/" className="font-heading text-2xl tracking-tighter text-brand-red">
        PIZZINO
      </Link>

      {/* Navigație Centrală - Stil Chitanță */}
      <div className="hidden md:flex gap-8 font-mono text-sm font-bold uppercase">
        <Link href="#menu" className="hover:text-brand-red transition-colors">Menu</Link>
        <Link href="#about" className="hover:text-brand-red transition-colors">Our Story</Link>
        <Link href="#locations" className="hover:text-brand-red transition-colors">Locations</Link>
      </div>

      {/* Butoane Acțiune */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-brand-black/5 rounded-full transition-colors">
          <ShoppingBag size={20} />
          <span className="absolute top-0 right-0 bg-brand-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
            0
          </span>
        </button>
        <button className="bg-brand-black text-brand-cream px-5 py-2 font-mono text-sm font-bold uppercase hover:bg-brand-red transition-colors">
          Order Now
        </button>
      </div>
    </nav>
  );
}