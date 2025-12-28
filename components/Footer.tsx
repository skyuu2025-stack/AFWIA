
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-black relative">
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
              <a 
                href="https://www.tiktok.com/@afwia.com?_r=1&_t=ZS-92b2sykUImv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-100 transition-opacity"
              >
                TikTok
              </a>
              <a 
                href="https://www.instagram.com/afwia_agency?igsh=dTJwNjlkYm01Mmhu&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
              <button 
                onClick={() => setShowWeChat(true)}
                className="hover:opacity-100 cursor-pointer uppercase tracking-widest transition-opacity"
              >
                WeChat
              </button>
           </div>
        </div>
      </div>

      {/* WeChat QR Modal */}
      {showWeChat && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md" 
            onClick={() => setShowWeChat(false)}
          />
          <div className="relative bg-white p-10 md:p-14 max-w-[440px] w-full animate-in fade-in zoom-in duration-300 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <button 
              onClick={() => setShowWeChat(false)}
              className="absolute top-5 right-5 text-black hover:opacity-40 transition-opacity p-2 z-10"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col">
              {/* Profile Section */}
              <div className="flex items-center gap-5 mb-12">
                <div className="w-[80px] h-[80px] bg-black flex flex-col items-center justify-center p-2 rounded-lg shrink-0 shadow-lg">
                  <span className="text-white text-[12px] font-black tracking-tighter leading-none mb-0.5">AFWIA</span>
                  <span className="text-white/40 text-[5px] font-bold uppercase tracking-[0.15em]">Agency</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-black font-black text-2xl tracking-tight leading-none mb-1.5 uppercase">AFWIA</h3>
                  <p className="text-[11px] text-[#A1A1A1] font-bold uppercase tracking-[0.2em] opacity-80">OFFICIAL CONTACT</p>
                </div>
              </div>
              
              {/* QR Code Container - Clean and Borderless for Maximum Scan Reliability */}
              <div className="w-full aspect-square relative mb-12 flex items-center justify-center bg-white shadow-[inset_0_0_1px_rgba(0,0,0,0.1)]">
                {/* 
                  - ECC=M: Simpler pattern is better for mobile focus.
                  - Margin=10: Essential quiet zone for scanners.
                  - crisp-edges: Keeps modules sharp.
                */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://www.afwia.com/contact&ecc=M&margin=10&format=png" 
                  alt="WeChat QR Code" 
                  className="w-full h-full block"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              
              {/* WeChat Styled Footer */}
              <div className="text-center w-full">
                <p className="text-[16px] text-[#9b9b9b] font-medium tracking-tight mb-2">
                  扫一扫上面的二维码图案，加我为朋友。
                </p>
                <p className="text-[10px] text-[#D1D1D1] font-black uppercase tracking-[0.3em] leading-relaxed">
                  SCAN TO CONNECT WITH AFWIA TEAM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
