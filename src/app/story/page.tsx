import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-black pt-24">
      <Navbar />

      {/* SECTION 1: THE MANIFESTO (OUR STORY) */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h1 className="font-heading text-8xl md:text-[12rem] text-brand-red leading-none uppercase tracking-tighter mb-12">
          Crust.<br />Cheese.<br />Chaos.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <p className="font-mono text-xl md:text-2xl leading-relaxed uppercase font-bold">
          Pizzino wasn't born in a quiet kitchen. It emerged from the need to rebel against industrial dough and boring taste.
          </p>
          <div className="space-y-6 font-mono text-sm uppercase opacity-80">
            <p>Every pizza starts with a 72-hour fermentation process. We don't cheat. We don't rush the chaos.</p>
            <p>We only use ingredients that would make your Italian grandmother cry with joy (or envy).</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE STICKER DIVIDER (PARALLAX VIBE) */}
      <div className="w-full h-[40vh] relative overflow-hidden border-y-4 border-brand-black">
        <Image 
          src="/images/sticker-pattern.png" 
          alt="Chaos Pattern" 
          fill 
          className="object-cover opacity-80"
        />
      </div>

      {/* SECTION 3: PIZZINO WEAR (MERCH) */}
      <section id="merch" className="px-6 py-32 bg-brand-black text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-heading text-6xl md:text-8xl uppercase leading-none">
              Pizzino<br /><span className="text-brand-red">Wear</span>
            </h2>
            <p className="font-mono text-sm hidden md:block">Drop 01 / Essentials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Imaginea cu tricoul Pizzino */}
            <div className="relative aspect-[3/4] bg-brand-cream/10 rounded-2xl overflow-hidden group">
              <Image 
                src="/images/tshirt-mockup.png" // Pune aici calea către poza cu tricoul Pizzino
                alt="Pizzino Signature Tee"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="space-y-8">
              <h3 className="font-heading text-4xl uppercase">The Signature Tee</h3>
              <p className="font-mono text-lg opacity-70 lowercase">
              Heavyweight cotton, boxy fit, and the logo that says it all.
              </p>
              <button className="bg-brand-red text-brand-cream px-10 py-5 font-mono font-bold uppercase hover:bg-white hover:text-brand-red transition-colors">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
