
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'CN'>('CN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const t = {
    EN: {
      about: 'Philosophy',
      runway: 'Runway',
      launch: 'Global Launch',
      platforms: 'IP Platform',
      cta: 'Structural Consultation'
    },
    CN: {
      about: '核心哲学',
      runway: '国际秀场',
      launch: '全球发布',
      platforms: 'IP 孵化',
      cta: '申请结构会谈'
    }
  }[lang];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className={`text-2xl font-black tracking-tighter leading-none ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'}`}>
            AFWIA
          </span>
          <span className={`text-[7px] uppercase tracking-[0.6em] font-bold mt-1 ${!isScrolled && location.pathname === '/' ? 'text-white/60' : 'text-black/40'}`}>
            Structure & Infrastructure
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'CN' : 'EN')}
            className={`flex items-center gap-2 text-[10px] font-bold tracking-widest transition-opacity hover:opacity-50 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'}`}
          >
            <Globe size={12} /> {lang === 'EN' ? 'EN / 中文' : '中文 / EN'}
          </button>
          
          {[
            { key: 'about', path: '/about' },
            { key: 'runway', path: '/runway' },
            { key: 'launch', path: '/launch' },
            { key: 'platforms', path: '/platforms' }
          ].map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'}`}
            >
              {(t as any)[item.key]}
            </Link>
          ))}
          
          <Link
            to="/consultation"
            className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
              !isScrolled && location.pathname === '/' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {t.cta}
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-12 flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-start mb-12">
            <span className="text-sm font-bold opacity-30">MENU / 菜单</span>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          {['About', 'Runway', 'Launch', 'Platforms', 'Consultation'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-4xl font-black uppercase tracking-tighter hover:italic border-b border-black/5 pb-4">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
