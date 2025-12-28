
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showWeChat, setShowWeChat] = useState(false);

  // The user provided a specific WeChat QR code. 
  // In a real environment, this would be a local asset or a base64 string.
  // Using a placeholder URL that represents the high-fidelity QR provided.
  const wechatQrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https://u.wechat.com/AFWIA_OFFICIAL&ecc=H&margin=2";

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
               <Link to="/runway" className="hover:opacity-50 transition-opacity">Runway Production</Link>
               <Link to="/launch" className="hover:opacity-50 transition-opacity">Overseas Launch</Link>
               <Link to="/platforms" className="hover:opacity-50 transition-opacity">IP Incubation</Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-40">Institutional</h4>
            <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest">
               <Link to="/about" className="hover:opacity-50 transition-opacity">Philosophy</Link>
               <Link to="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
               <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="opacity-20 hover:opacity-100 transition-opacity">Terms</a>
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
            className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" 
            onClick={() => setShowWeChat(false)}
          />
          <div className="relative bg-white pt-14 pb-14 px-8 md:px-14 max-w-[420px] w-full animate-in fade-in zoom-in duration-300 shadow-2xl rounded-2xl">
            <button 
              onClick={() => setShowWeChat(false)}
              className="absolute top-6 right-6 text-gray-300 hover:text-black transition-colors p-1"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center">
              {/* Brand Header */}
              <div className="w-full flex items-center gap-4 mb-10 px-1">
                <div className="w-14 h-14 bg-black flex flex-col items-center justify-center p-1 rounded-xl shadow-md shrink-0">
                   <span className="text-white text-[10px] font-black tracking-tighter leading-none mb-0.5">AFWIA</span>
                   <span className="text-white/40 text-[4px] font-bold uppercase tracking-[0.2em]">Agency</span>
                </div>
                <div className="text-left">
                  <h3 className="text-black font-black text-lg tracking-tight leading-none mb-1 uppercase">AFWIA Official</h3>
                  <p className="text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">Scan to Inquire</p>
                </div>
              </div>
              
              {/* High Fidelity QR Container matching the PRD request */}
              <div className="relative w-full aspect-square bg-white flex items-center justify-center mb-10 p-2 border border-gray-50 rounded-lg">
                <img 
                  src={wechatQrUrl} 
                  alt="WeChat QR Code" 
                  className="w-full h-full block object-contain"
                />
                
                {/* Custom Overlay for High-Fidelity Branding if needed, 
                    but since the provided QR already has a center logo, we keep it clean. */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[19%] h-[19%] bg-white p-[3px] rounded-[24%] shadow-sm">
                    <div className="w-full h-full bg-black flex items-center justify-center rounded-[22%]">
                      <svg viewBox="0 0 100 100" className="w-[75%] h-[75%] fill-white">
                        <path d="M31.2,19.2c-15.3,0-27.7,10.6-27.7,23.6c0,7,3.6,13.2,9.3,17.7l-2.4,7.1l8.1-4c4,1.8,8.4,2.8,13.1,2.8c1.6,0,3.1-0.1,4.6-0.4 c-0.6-1.5-0.9-3.2-0.9-4.9c0-10.4,11.1-18.8,24.8-18.8c3.2,0,6.2,0.5,9,1.3c-2.3-14.3-17.7-24.4-37.9-24.4V19.2z M21.3,32.3 c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2C18.1,33.8,19.5,32.3,21.3,32.3z M41.1,32.3 c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2C37.9,33.8,39.3,32.3,41.1,32.3z"/>
                        <path d="M68.8,42.4c-13.7,0-24.8,8.4-24.8,18.8s11.1,18.8,24.8,18.8c2.9,0,5.6-0.4,8.1-1.2l6,3l-1.8-5.3 c4.6-3.8,7.5-9.1,7.5-15.3C88.6,50.8,79.7,42.4,68.8,42.4z M60,53.4c1.3,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3 S58.7,53.4,60,53.4z M77.5,53.4c1.3,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3S76.2,53.4,77.5,53.4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Context Footer */}
              <div className="text-center w-full px-2">
                <p className="text-[14px] text-gray-500 font-medium mb-3 tracking-tight">
                  扫一扫二维码，添加 AFWIA 商务微信
                </p>
                <div className="w-8 h-[1px] bg-gray-100 mx-auto mb-4" />
                <p className="text-[8px] text-gray-300 font-black uppercase tracking-[0.5em] leading-relaxed">
                  DIRECT ACCESS TO GLOBAL RUNWAY STRATEGY
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
