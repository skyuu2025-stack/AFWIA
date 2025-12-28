
import React, { useState } from 'react';
import { FormType } from '../types';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟提交成功
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-white">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-black uppercase tracking-tighter mb-8 animate-pulse">Sent.</h1>
          <p className="text-lg text-gray-500 mb-12">Our agency team will review your inquiry within 48 hours.</p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="px-12 py-4 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all"
          >
            New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="py-24 border-r border-black pr-0 lg:pr-24 flex flex-col justify-between">
           <div>
              <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">Connect</h1>
              <p className="text-xl text-gray-500 max-w-md leading-relaxed">
                We bridge international creative energy with Asian market growth. Establish your strategic presence today.
              </p>
           </div>
           
           <div className="space-y-12 mt-24">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">Strategic HQ</span>
                <p className="text-2xl font-black">Hong Kong SAR</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">Network Cities</span>
                <p className="text-2xl font-black">NYC / LDN / PAR / BKK</p>
              </div>
           </div>
        </div>

        <div className="py-24 pl-0 lg:pl-24 bg-white">
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="space-y-4 group">
               <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">Full Name</label>
               <input 
                required 
                type="text" 
                className="w-full bg-transparent border-b border-black/10 focus:border-black py-6 outline-none text-2xl font-medium transition-all placeholder:text-black/10" 
                placeholder="First Last" 
               />
            </div>
            
            <div className="space-y-4 group">
               <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">Email Address</label>
               <input 
                required 
                type="email" 
                className="w-full bg-transparent border-b border-black/10 focus:border-black py-6 outline-none text-2xl font-medium transition-all placeholder:text-black/10" 
                placeholder="name@company.com" 
               />
            </div>
            
            <div className="space-y-4 group">
               <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">Inquiry Type</label>
               <div className="relative">
                 <select className="w-full bg-transparent border-b border-black/10 focus:border-black py-6 outline-none text-2xl font-medium transition-all appearance-none cursor-pointer">
                    <option value={FormType.BRAND}>Brand / Enterprise</option>
                    <option value={FormType.DESIGNER}>Designer / Creative</option>
                    <option value={FormType.PARTNER}>Partner / Institution</option>
                    <option value={FormType.MEDIA}>Media / Press</option>
                 </select>
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs">↓</div>
               </div>
            </div>
            
            <div className="space-y-4 group">
               <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">Inquiry Details</label>
               <textarea 
                required 
                rows={4} 
                className="w-full bg-transparent border-b border-black/10 focus:border-black py-6 outline-none text-2xl font-medium transition-all resize-none placeholder:text-black/10" 
                placeholder="Strategic objectives..."
               ></textarea>
            </div>
            
            <button type="submit" className="w-full py-10 bg-black text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-gray-900 active:scale-[0.99] transition-all">
               Submit Strategic Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
