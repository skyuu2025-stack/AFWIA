
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <header className="py-24 border-b border-black">
          <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Agency <br /> Identity
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <p className="text-3xl font-light leading-snug">
              AFWIA is a Hong Kong–based strategic bridge, navigating the intersection of creative excellence and commercial scale.
            </p>
            <div className="space-y-6 text-gray-500">
               <p>We operate as a high-end navigator for brands entering international markets. Our identity is rooted in the "New International Style"—restrained, rational, and exceptionally executed.</p>
               <p>Based in the strategic hub of Hong Kong, we leverage regional policy-driven infrastructure and global creative networks to deliver results for a curated list of clients.</p>
            </div>
          </div>
        </header>

        <section className="py-24 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-black">
          {[
            { label: "Founded", val: "2024" },
            { label: "HQ", val: "Hong Kong" },
            { label: "Key Hub", val: "Bangkok" },
            { label: "Focus", val: "Global Growth" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{stat.label}</span>
              <span className="text-2xl font-black uppercase tracking-tight">{stat.val}</span>
            </div>
          ))}
        </section>

        <section className="py-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] mb-16">The Methodology</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-black p-12">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Standardization</h3>
              <p className="text-gray-600 leading-relaxed">Our Global Runway Production follows a rigorous standardized system, ensuring consistent quality in NYC, London, or Paris.</p>
            </div>
            <div className="border border-black p-12 bg-black text-white">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Strategic Entry</h3>
              <p className="text-gray-300 leading-relaxed">Brand expansion is treated as a logic system: Research, Channel, Strategy, and Launch are integrated for maximum ROI.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
