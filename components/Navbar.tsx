
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-black py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className={`text-2xl font-black tracking-tighter leading-none ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'}`}>
            AFWIA
          </span>
          <span className={`text-[8px] uppercase tracking-[0.6em] font-bold mt-1 ${!isScrolled && location.pathname === '/' ? 'text-white/60' : 'text-black/40'}`}>
            International Agency
          </span>
        </Link>

        {/* Flat Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {['About', 'Runway', 'Launch', 'Platforms'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-opacity hover:opacity-50 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'}`}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${
              !isScrolled && location.pathname === '/' 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Inquiry
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled && location.pathname === '/' ? 'text-white' : 'text-black'} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-12 flex flex-col justify-center space-y-8">
          {['About', 'Runway', 'Launch', 'Platforms', 'Contact'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase() === 'about' ? 'about' : item.toLowerCase()}`} className="text-6xl font-black uppercase tracking-tighter hover:italic">
              {item}
            </Link>
          ))}
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6">
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
