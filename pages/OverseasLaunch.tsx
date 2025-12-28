
import React from 'react';
import { Target, Search, Network, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OverseasLaunch: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
               <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-none">Overseas Launch</h1>
               <p className="text-2xl text-slate-500 font-light leading-relaxed">
                  Strategic Entry & Systematic Expansion for Asian Markets.
               </p>
            </div>
            <div className="pb-4">
               <div className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 border-b border-slate-200 pb-2">Strategic Entry</div>
            </div>
          </div>
        </header>

        {/* The Launch System */}
        <section className="mb-40">
           <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-16 text-center underline decoration-slate-200 underline-offset-8">The Launch System / 品牌出海体系</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Search, title: "Market Research", desc: "Local trend analysis and demographic mapping for SEA." },
                { icon: Target, title: "Channel Strategy", desc: "Retail, wholesale, and e-commerce infrastructure setup." },
                { icon: Network, title: "Strategic PR", desc: "Connecting with key opinion leaders and local media." },
                { icon: Zap, title: "Showcase Events", desc: "High-impact launch events with international production." }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-10 border border-slate-100 flex flex-col items-center text-center group hover:bg-white transition-all duration-500 hover:shadow-2xl">
                   <div className="mb-8 p-4 bg-white rounded-full group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-slate-900" />
                   </div>
                   <h4 className="font-bold mb-4 uppercase tracking-wider">{step.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Key Markets Section */}
        <section className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6">Key Markets / 重点市场</h2>
                    <h3 className="text-4xl font-serif mb-8">Thailand & Southeast Asia</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                       As the creative hub of Southeast Asia, Thailand serves as our primary launchpad. We provide brands with direct access to regional shopping districts, luxury hubs, and creative communities.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border-l-2 border-slate-900 bg-slate-50">
                       <h5 className="font-bold mb-2">Localized IP Integration</h5>
                       <p className="text-xs text-slate-500 leading-relaxed italic">Integrating brands with local cultural movements and sub-cultures.</p>
                    </div>
                    <div className="p-6 border-l-2 border-slate-900 bg-slate-50">
                       <h5 className="font-bold mb-2">Institutional Support</h5>
                       <p className="text-xs text-slate-500 leading-relaxed italic">Leveraging governmental links and policy-driven parks for entry.</p>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-96 bg-slate-200 grayscale overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504214208698-ea1919a2f9e5?auto=format&fit=crop&q=80&w=500" alt="Bangkok Architecture" className="w-full h-full object-cover" />
                 </div>
                 <div className="h-96 bg-slate-200 grayscale overflow-hidden translate-y-12">
                    <img src="https://images.unsplash.com/photo-1552423120-7c093a890403?auto=format&fit=crop&q=80&w=500" alt="SEA Market Vibe" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </section>

        {/* Why AFWIA */}
        <section className="py-24 bg-slate-900 text-white -mx-6 px-6">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-12">Why AFWIA? / 我们的优势</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
                 <div>
                    <h4 className="text-xl font-bold mb-4 italic">System over Activity</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">We don't just host a one-time event; we build a market entry system that sustains long-term brand equity.</p>
                 </div>
                 <div>
                    <h4 className="text-xl font-bold mb-4 italic">Strategic Hub Access</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Direct connections with the key decision-makers in the region’s largest retail and commercial bodies.</p>
                 </div>
              </div>
              <div className="mt-20">
                <Link to="/contact" className="px-12 py-6 bg-white text-slate-900 font-black tracking-widest uppercase text-xs hover:bg-slate-200 transition-all inline-block">
                  Request Market Analysis
                </Link>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default OverseasLaunch;
