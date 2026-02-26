"use client";

import Navbar from "@/components/layout/Navbar";

import Image from "next/image";
import Marquee from "@/components/sections/Marquee";
import Footer from "@/components/sections/Footer"; 
import Menu from "@/components/sections/Menu";
import Locations from "@/components/sections/Locations";
import Link from "next/link";
export default function Home() {
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-cream text-brand-black">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[90vh] gap-10">
        
        {/* TEXT LEFT */}
        <div className="z-10 text-left flex-1 relative">
          <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-heading leading-[0.8] tracking-tighter uppercase italic">
            Bad Day,<br />
            <span className="text-brand-red not-italic">Good Pizza.</span>
          </h1>
          <p className="mt-8 font-mono text-lg md:text-xl max-w-md font-bold uppercase leading-tight border-l-4 border-brand-red pl-4 ml-2">
            Artisanal dough, fresh ingredients, and a dash of rebellion.
          </p>
          <Link 
            href="#menu" 
            onClick={(e) => {
              e.preventDefault(); // Prevenim "Sticky Hash" (URL-ul blocat)
              const element = document.getElementById('menu');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Scroll fluid și sigur
              }
            }}
            className="mt-10 ml-2 inline-block bg-brand-black text-brand-cream px-8 py-4 font-mono text-lg font-bold uppercase hover:bg-brand-red transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#E23D28]"
          >
            See the menu
          </Link>
        </div>

        {/* PIZZA */}
        <div className="relative flex-1 flex justify-center items-center w-full max-w-[600px] aspect-square">
          <Image 
            src="/images/pizza-hero1.png" 
            alt="Pizzino Signature Pizza" 
            fill
            priority
            className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]" 
          />
        </div>
      </section>
      <Marquee />
      {/* SECTION DIVIDER - STICKER PATTERN */}
      <section className="relative h-[40vh] w-full overflow-hidden border-y-4 border-brand-black">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/images/sticker-pattern.png')" }} 
        />
        <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" /> {/* Overlay discret */}
      </section>
      <Menu />
      <Locations />
     
      <Footer />
    </main>
  );
}