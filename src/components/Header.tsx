import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-slate-900/90 backdrop-blur-lg border-b border-white/10' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">VIGICON</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest hidden sm:block">Enterprises</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Contact', 'Owner'].map((item) => {
              const path = item === 'Home' ? '/' : item === 'Owner' ? '/owner' : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link key={item} to={path} className={`text-sm font-medium transition-colors hover:text-cyan-400 ${isActive ? 'text-cyan-400' : 'text-slate-300'}`}>
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919309961807" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-cyan-300">
              <Phone size={16} /> Call
            </a>
            <Link to="/book" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400">Book Service</Link>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden">
            <div className="flex flex-col space-y-4 px-6 py-8">
              {['Home', 'About', 'Services', 'Gallery', 'Contact', 'Owner'].map((item) => (
                <Link key={item} to={item === 'Home' ? '/' : item === 'Owner' ? '/owner' : `/${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                  {item}
                </Link>
              ))}
              <Link to="/book" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-white">Book Service</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
