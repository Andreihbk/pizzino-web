export default function Locations() {
    const schedule = [
      { day: "MON", loc: "CENTRAL PARK / 10:00 - 18:00" },
      { day: "TUE", loc: "TECH HUB DISTRICT / 11:00 - 20:00" },
      { day: "WED", loc: "OLD TOWN SQUARE / 12:00 - 22:00" },
      { day: "THU", loc: "UNIVERSITY CAMPUS / 10:00 - 19:00" },
      { day: "FRI", loc: "NIGHT MARKET / 18:00 - 02:00" },
      { day: "SAT", loc: "SKATE PARK / 12:00 - 23:00" },
      { day: "SUN", loc: "CLOSED / DOUGH RESTING" },
    ];
  
    return (
      <section id="locations" className="bg-brand-red text-brand-cream py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* TEXT STÎNGA - Poster Style */}
            <div className="flex-1">
              <h2 className="font-heading text-7xl md:text-9xl uppercase leading-[0.8] mb-8 -rotate-2">
                Find the<br />Truck
              </h2>
              <div className="inline-block bg-brand-black text-brand-cream font-mono text-xl px-4 py-2 uppercase font-black rotate-3">
                Follow the chaos
              </div>
            </div>
  
            {/* PROGRAM DREAPTA - Punk Schedule */}
            <div className="flex-1 w-full space-y-4">
              {schedule.map((item, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-center border-b-2 border-brand-cream/30 py-4 hover:bg-brand-cream hover:text-brand-red px-4 transition-all duration-300 group"
                >
                  <span className="font-heading text-3xl md:text-5xl uppercase tracking-tighter">
                    {item.day}
                  </span>
                  <span className="font-mono text-xs md:text-sm font-bold uppercase text-right max-w-[200px]">
                    {item.loc}
                  </span>
                </div>
              ))}
            </div>
          </div>
  
          {/* MAP PLACEHOLDER - O hartă stilizată "murdar" */}
          <div className="mt-20 h-[400px] w-full border-4 border-brand-black bg-brand-cream/10 relative overflow-hidden flex items-center justify-center grayscale contrast-125">
            <div className="absolute inset-0 opacity-20 bg-[url('/images/map-texture.png')] bg-cover bg-center" />
            <p className="font-heading text-4xl md:text-6xl uppercase opacity-40 text-brand-black">
              Map coming soon
            </p>
            {/* Un monstruleț mic care "păzește" locația */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
              📍
            </div>
          </div>
        </div>
      </section>
    );
  }