"use client";

import Image from "next/image";



const pizzas = [

  { name: "The Classic Anarchy", desc: "San Marzano, Mozzarella di Bufala, Fresh Basil", price: "32" },

  { name: "Spicy Rebel", desc: "Salami Ventricina, Nduja, Hot Honey, Chili Flakes", price: "42" },

  { name: "White Chaos", desc: "Gorgonzola, Taleggio, Pecorino, Smoked Mozzarella", price: "45" },

  { name: "Truffle Street", desc: "Wild Mushrooms, Truffle Oil, Fresh Parsley", price: "48" },

  { name: "The Pizzino Signature", desc: "Mortadella, Pesto di Pistacchio, Stracciatella", price: "52" },

];



export default function Menu() {

  return (

    <section id="menu" className="bg-brand-cream py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        

        {/* COLOANA STÂNGA: MENIUL (STIL HÂRTIE) */}

        <div className="relative bg-[#ebe4d1] rounded-3xl p-10 md:p-16 shadow-xl border border-black/5 rotate-[-1deg]">

          {/* Bulinele verzi de tip Starburst din referință */}

          <div className="absolute -left-4 -top-4 bg-[#008148] text-white px-4 py-2 rotate-[-15deg] font-mono text-[10px] font-bold uppercase z-10">

            72H Dough

          </div>

          

          <h2 className="text-brand-red font-heading text-7xl md:text-9xl mb-12 uppercase italic tracking-tighter">

            Menu

          </h2>



          <div className="space-y-8">

            {pizzas.map((pizza, i) => (

              <div key={i} className="group">

                <div className="flex justify-between items-baseline gap-2">

                  <h3 className="font-heading text-xl md:text-2xl uppercase">{pizza.name}</h3>

                  <div className="flex-1 border-b-2 border-dotted border-black/20 mb-1" />

                  <span className="font-heading text-xl md:text-2xl text-brand-red">${pizza.price}</span>

                </div>

                <p className="font-mono text-xs text-black/50 italic mt-1">{pizza.desc}</p>

              </div>

            ))}

          </div>

          

          <div className="mt-12 pt-6 border-t border-black/10 font-mono text-[10px] uppercase opacity-50">

            * All our pizzas are made with artisanal flour and love.

          </div>

        </div>



        {/* COLOANA DREAPTA: GRAFICĂ / LIFESTYLE */}

        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl rotate-[1deg]">

          {/* Sugestie: Folosește aici poza cu tipul cu tricoul Pizzino sau o poză de lifestyle */}

          <Image 

            src="/images/pizza-lifestyle.png" 

            alt="Pizzino Vibe"

            fill

            className="object-cover"

          />

          {/* Overlay text brutalist */}

          <div className="absolute inset-0 bg-brand-red/10 flex items-end p-8">

            <p className="text-white font-heading text-5xl uppercase leading-none drop-shadow-lg">

              Crust.<br />Cheese.<br />Chaos.

            </p>

          </div>

        </div>



      </div>

    </section>

  );

}