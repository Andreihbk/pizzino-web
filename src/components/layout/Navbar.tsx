import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO - Ne duce mereu pe pagina principală */}
        <Link href="/" className="font-heading text-2xl tracking-tighter hover:text-brand-red transition-colors">
          PIZZINO
        </Link>

        {/* NAV LINKS - Centrate */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm font-bold uppercase">
          {/* Folosim /#menu pentru a funcționa corect și de pe pagina /story */}
          <Link href="/#menu" className="hover:text-brand-red transition-colors">
            Menu
          </Link>
          
          {/* Legătura către pagina nouă din src/app/story/page.tsx */}
          <Link href="/story" className="hover:text-brand-red transition-colors">
            Our Story
          </Link>

          <Link href="/#locations" className="hover:text-brand-red transition-colors">
            Locations
          </Link>

          {/* Contact rămâne evidențiat cu roșu conform stilului tău */}
          <Link href="/#contact" className="text-brand-red font-black border-b-2 border-brand-red">
            Contact
          </Link>
        </nav>

        {/* PARTEA DREAPTĂ - Shopping & Order */}
        <div className="flex items-center gap-6">
          <button className="relative hover:text-brand-red transition-colors">
            <ShoppingBag size={20} strokeWidth={2.5} />
            {/* Bulina roșie de notificare văzută în referințe */}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-red rounded-full"></span>
          </button>
          
          <button className="font-mono text-xs md:text-sm font-bold uppercase border-2 border-brand-black px-4 py-1.5 hover:bg-brand-black hover:text-brand-cream transition-all">
            Order Now
          </button>
        </div>

      </div>
    </header>
  );
}