
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero: Typographic Brutalism */}
      <section className="min-h-screen flex flex-col justify-end bg-black text-white px-6 md:px-12 pb-24 relative overflow-hidden">
        <div className="absolute top-12 right-12 hidden lg:block">
          <div className="border border-white/20 p-8 w-64 h-64 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Established 2024</span>
            <p className="text-xs leading-relaxed text-white/60">Bridging global creative platforms with the specialized high-growth Asian market corridor.</p>
          </div>
        </div>
        
        <div className="max-w-[1400px]">
          <h1 className="text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-12">
            Global <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Infrastructure</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <p className="text-xl md:text-2xl font-light max-w-xl text-white/80">
              AFWIA engineers international brand presence through world-class production and strategic launch systems.
            </p>
            <Link to="/contact" className="group flex items-center gap-4 px-12 py-8 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all">
              Initiate Collaboration <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid: Business Architecture */}
      <section className="py-0 border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black">
          {[
            { 
              num: "01", 
              title: "Global Runway", 
              desc: "Official production partner for designers in NYC, LDN, and Paris.",
              link: "/runway"
            },
            { 
              num: "02", 
              title: "Overseas Launch", 
              desc: "Strategic entry and retail infrastructure for the Thailand/SEA hub.",
              link: "/launch"
            },
            { 
              num: "03", 
              title: "IP Platforms", 
              desc: "Incubating culture-driven accelerators like Anime Fashion Week.",
              link: "/platforms"
            }
          ].map((service, i) => (
            <Link 
              to={service.link} 
              key={i} 
              className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between aspect-square hover:bg-black hover:text-white transition-all group"
            >
              <span className="text-xs font-bold tracking-[0.5em] opacity-40 group-hover:opacity-100">{service.num}</span>
              <div>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-100">{service.desc}</p>
              </div>
              <div className="flex justify-end">
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Statement */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Connecting <br /> Creative <br /> <span className="italic">Frontiers.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-gray-500 leading-relaxed">
                Headquartered in Hong Kong, we operate with a philosophy of professional restraint and execution excellence. Our network spans the primary creative corridors of the world.
              </p>
              <div className="flex gap-8">
                <div className="flex-1 border-t border-black pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">Strategy</span>
                  <p className="text-xs text-gray-400">High-level market entry and positioning.</p>
                </div>
                <div className="flex-1 border-t border-black pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">Production</span>
                  <p className="text-xs text-gray-400">Standardized global show delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brutalist IP Section */}
      <section className="bg-gray-100 py-32 px-6 md:px-12 border-y border-black">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] mb-8 block">Proprietary IP</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">Anime Fashion Week</h2>
            <p className="text-lg text-gray-600 mb-8">Elevating ACG culture through the lens of international high-fashion standards.</p>
            <Link to="/platforms" className="inline-block border-b-2 border-black pb-2 text-xs font-black uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">
              Explore IP Platform
            </Link>
          </div>
          <div className="w-full lg:w-1/3 aspect-square bg-black grayscale flex items-center justify-center">
             <span className="text-white text-8xl font-black">AFW</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
