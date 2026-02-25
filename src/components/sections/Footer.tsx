import Image from "next/image";

export default function Footer() {
  return (
    <section id="contact" className="relative w-full bg-brand-red pt-20 pb-10 px-6">
      {/* IMAGINEA*/}
      <div className="w-full max-w-[1400px] mx-auto overflow-hidden">
        <Image 
          src="/images/footer-wrap.png" 
          alt="That's a wrap" 
          width={1920} 
          height={1080} 
          className="w-full h-auto object-cover scale-110 md:scale-100" // O mărim puțin pentru impact
        />
      </div>

      {/* FOOTER INFO - Structură Brutalist Grid */}
      <div className="mt-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-t-2 border-brand-cream pt-10 font-mono text-brand-cream uppercase text-sm font-bold">
        
        {/* COL 1: Branding & Rights */}
        <div className="space-y-2">
          <p className="text-xl font-heading">PIZZINO</p>
          <p>© 2024 • ALL RIGHTS RESERVED</p>
          <p className="opacity-60 italic">"Crust. Cheese. Chaos."</p>
        </div>

        {/* COL 2: Adresă (Din referințele tale) */}
        <div className="space-y-2">
          <p className="text-brand-black bg-brand-cream inline-block px-2 mb-2">Find Us</p>
          <p>123 Pizza Street</p>
          <p>Manhattan, NY 10001</p>
          <p>Open Late: 11:00 - 04:00</p>
        </div>

        {/* COL 3: Contact */}
        <div className="space-y-2 md:text-right">
          <p className="text-brand-black bg-brand-cream inline-block px-2 mb-2">Get in touch</p>
          <p>hello@pizzino.pizza</p>
          <p>+1 (555) 749-9466</p>
          <div className="flex gap-4 md:justify-end mt-4">
             <a href="#" className="hover:line-through">Instagram</a>
             <a href="#" className="hover:line-through">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
}