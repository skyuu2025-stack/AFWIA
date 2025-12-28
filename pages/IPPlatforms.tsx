
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IPPlatforms: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
               <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-none">IP Platforms</h1>
               <p className="text-2xl text-slate-500 font-light leading-relaxed">
                  Incubating Proprietary IP as Strategic Platform Amplifiers.
               </p>
            </div>
            <div className="pb-4">
               <div className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 border-b border-slate-200 pb-2">IP Incubator</div>
            </div>
          </div>
        </header>

        {/* Strategy Section */}
        <section className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-8">
                 <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Proprietary IP Strategy / IP 战略</h2>
                 <p className="text-xl text-slate-700 leading-relaxed font-serif italic">
                   Identifying cultural intersections with high commercial potential.
                 </p>
                 <p className="text-slate-600 leading-relaxed">
                   AFWIA's IP strategy focuses on building professional frameworks that host multiple brands within a single cultural narrative. These IPs act as accelerators, providing brands with immediate access to specific demographics, media networks, and cultural credibility.
                 </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 <div className="p-8 border border-slate-100 bg-slate-50">
                    <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Target Demographic</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Gen-Z, Creative Professionals, Sub-culture communities with high spending power.</p>
                 </div>
                 <div className="p-8 border border-slate-100 bg-slate-50">
                    <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Media Synergy</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Combining niche cultural media with high-fashion mainstream press.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Featured IP: AFW */}
        <section className="mb-40">
           <div className="relative overflow-hidden bg-slate-900 text-white min-h-[600px] flex items-center">
              <div className="absolute inset-0 grayscale opacity-40">
                 <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1500" alt="ACG Culture Background" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 p-12 md:p-24 max-w-4xl">
                 <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-8 block">Primary IP / 核心项目</span>
                 <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight italic">Anime Fashion Week <br />(AFW)</h2>
                 <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                   AFW is our flagship project focusing on the intersection of high fashion and ACG (Anime, Comic, Games) culture. It provides a unique global stage for cross-industry collaborations between fashion brands and digital entertainment IPs.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-8">
                   <div className="flex-1 border-t border-white/20 pt-6">
                      <h5 className="font-bold mb-2 uppercase tracking-widest text-xs">The Mission</h5>
                      <p className="text-sm text-slate-400">Elevating niche aesthetics to the global runway standards of NYC and Paris.</p>
                   </div>
                   <div className="flex-1 border-t border-white/20 pt-6">
                      <h5 className="font-bold mb-2 uppercase tracking-widest text-xs">The Network</h5>
                      <p className="text-sm text-slate-400">Collaborating with global IP holders, creative studios, and luxury labels.</p>
                   </div>
                 </div>
                 <div className="mt-16">
                    <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-black tracking-widest uppercase text-xs hover:bg-slate-200 transition-all inline-block">
                       Partner with AFW
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Future Expansion */}
        <section className="py-24 border-y border-slate-100 mb-40">
           <div className="max-w-4xl text-center mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-12">Future Expansion / 未来展望</h2>
              <p className="text-2xl font-serif text-slate-800 italic leading-relaxed">
                "Our ecosystem is designed for scalability. New regional projects and themed IPs are in continuous development as we monitor global shifts in creative consumption."
              </p>
           </div>
        </section>
      </div>
    </div>
  );
};

export default IPPlatforms;
