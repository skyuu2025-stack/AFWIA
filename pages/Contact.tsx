
import React, { useState } from 'react';
import { FormType } from '../types';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-black uppercase tracking-tighter mb-8">Sent.</h1>
          <p className="text-lg text-gray-500 mb-12">Our agency team will review your inquiry within 48 hours.</p>
          <button onClick={() => setSubmitted(false)} className="px-12 py-4 bg-black text-white font-bold uppercase tracking-widest text-xs">New Inquiry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="py-24 border-r border-black pr-0 lg:pr-24">
           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">Connect</h1>
           <div className="space-y-12">
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

        <div className="py-24 pl-0 lg:pl-24">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-2">
               <label className="text-[10px] font-bold uppercase tracking-widest">Full Name</label>
               <input required type="text" className="w-full border-b border-black py-4 outline-none text-2xl font-medium focus:bg-gray-50 transition-colors" placeholder="First Last" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-bold uppercase tracking-widest">Email Address</label>
               <input required type="email" className="w-full border-b border-black py-4 outline-none text-2xl font-medium focus:bg-gray-50 transition-colors" placeholder="name@company.com" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-bold uppercase tracking-widest">Inquiry Type</label>
               <select className="w-full border-b border-black py-4 outline-none text-2xl font-medium focus:bg-gray-50 transition-colors appearance-none">
                  <option value={FormType.BRAND}>Brand / Enterprise</option>
                  <option value={FormType.DESIGNER}>Designer / Creative</option>
                  <option value={FormType.PARTNER}>Partner / Institution</option>
                  <option value={FormType.MEDIA}>Media / Press</option>
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-bold uppercase tracking-widest">Inquiry Details</label>
               <textarea required rows={3} className="w-full border-b border-black py-4 outline-none text-2xl font-medium focus:bg-gray-50 transition-colors resize-none" placeholder="Strategic objectives..."></textarea>
            </div>
            <button type="submit" className="w-full py-8 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-gray-800 transition-all">
               Submit Strategic Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
