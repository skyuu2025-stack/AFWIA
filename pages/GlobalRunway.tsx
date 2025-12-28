
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalRunway: React.FC = () => {
  const capabilities = [
    { title: "Technical Production", desc: "Lighting, sound, stage management and tech integration." },
    { title: "Casting & Styling Coordination", desc: "Access to global model agencies and top-tier stylists." },
    { title: "Front-of-House Strategy", desc: "Guest management, media lists, and seating protocols." },
    { title: "Press & Media Relations", desc: "Coordination with international fashion editors and PR hubs." },
    { title: "Content Asset Creation", desc: "High-quality video and photo production for post-show marketing." },
    { title: "Venue Sourcing", desc: "Unique, strategic locations in NYC, London, and Paris." }
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
               <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-none">Global Runway</h1>
               <p className="text-2xl text-slate-500 font-light leading-relaxed">
                  International Fashion Week Production Systems (NYC / LDN / PAR).
               </p>
            </div>
            <div className="pb-4">
               <div className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 border-b border-slate-200 pb-2">Production Excellence</div>
            </div>
          </div>
        </header>

        {/* Capabilities Section */}
        <section className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                 <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-12">Production Capabilities / 制作能力</h2>
                 <div className="grid grid-cols-1 gap-10">
                    {capabilities.map((cap, idx) => (
                      <div key={idx} className="group border-b border-slate-100 pb-8 last:border-0">
                         <h4 className="text-lg font-bold mb-3 flex items-center">
                            <span className="text-slate-300 mr-4 text-sm">0{idx + 1}</span>
                            {cap.title}
                         </h4>
                         <p className="text-sm text-slate-500 leading-relaxed ml-10">
                            {cap.desc}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="order-1 lg:order-2 aspect-[3/4] bg-slate-100 grayscale relative">
                 <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
                    alt="Runway Production Details" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 right-0 bg-white p-8 -translate-x-8 translate-y-8 shadow-xl max-w-xs">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Target Clients</p>
                    <p className="text-sm font-medium text-slate-900 italic">Premium designers, high-end independent brands, and established fashion houses.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Cities & Network */}
        <section className="mb-40 py-32 bg-slate-900 text-white -mx-6 px-6">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-16 text-center">Global Network / 城市网络</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {['New York', 'London', 'Paris'].map((city) => (
                   <div key={city} className="border border-white/10 p-12 hover:bg-white/5 transition-all">
                      <h3 className="text-3xl font-serif mb-6">{city}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Providing comprehensive support including venue permits, local crew coordination, and strategic media alignment for official show schedules.
                      </p>
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/50">
                        Official Partner Network <ArrowRight className="ml-2 w-3 h-3" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-50 p-12 md:p-24 text-center max-w-5xl mx-auto border border-slate-100">
           <h2 className="text-3xl font-serif mb-6">Partner With Us</h2>
           <p className="text-slate-500 mb-12 max-w-xl mx-auto">We are accepting inquiries for the upcoming show cycle. Our production slots are limited to ensure agency-grade quality.</p>
           <Link to="/contact" className="px-12 py-6 bg-slate-900 text-white font-black tracking-widest uppercase text-xs hover:bg-slate-800 transition-all inline-block">
              Apply to Produce
           </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobalRunway;
