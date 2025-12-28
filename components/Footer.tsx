
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-black">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-4xl font-black tracking-tighter mb-8">AFWIA</h2>
            <p className="max-w-sm text-sm opacity-50 leading-relaxed mb-8">
              International Agency for global runway production and brand expansion. Engineering the bridge between creativity and commercial scale.
            </p>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
               <span className="opacity-40">HK</span>
               <span className="opacity-40">NYC</span>
               <span className="opacity-40">LDN</span>
               <span className="opacity-40">PAR</span>
               <span className="opacity-40">BKK</span>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-40">Expertise</h4>
            <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest">
               <Link to="/runway" className="hover:opacity-50">Runway Production</Link>
               <Link to="/launch" className="hover:opacity-50">Overseas Launch</Link>
               <Link to="/platforms" className="hover:opacity-50">IP Incubation</Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-40">Institutional</h4>
            <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest">
               <Link to="/about" className="hover:opacity-50">Philosophy</Link>
               <Link to="/contact" className="hover:opacity-50">Contact</Link>
               <a href="https://ai.google.dev/gemini-api/docs/billing" className="opacity-20">Terms</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <span className="text-[10px] uppercase tracking-widest opacity-30">© 2024 AFWIA. All Rights Reserved.</span>
           <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-30 font-bold">
              <span className="hover:opacity-100 cursor-pointer">TikTok</span>
              <span className="hover:opacity-100 cursor-pointer">Instagram</span>
              <span className="hover:opacity-100 cursor-pointer">WeChat</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
