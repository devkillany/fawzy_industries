
import React, { useState, useEffect } from 'react';
import { Menu, X, Factory, ChevronRight, LayoutGrid } from 'lucide-react';
import { motion as motionBase, AnimatePresence } from 'framer-motion';
const motion = motionBase as any;
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#portfolio' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'glass-navbar py-3 border-b border-slate-200/50 dark:border-slate-800/50 shadow-2xl' 
          : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 shrink-0"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-600/30">
                <Factory className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl md:text-3xl font-black tracking-tighter leading-none ${isRTL ? 'font-ar' : 'font-en'}`}>
                  {t.brand}
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-500">Integrated Systems</span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-2 relative group text-sm font-black transition-all hover:text-blue-500 ${isRTL ? 'font-ar' : 'font-en'}`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all group-hover:w-4"></span>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
                <ThemeToggle />
                <LanguageToggle />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-xs transition-all shadow-xl shadow-blue-600/20"
                >
                  {language === 'ar' ? 'طلب عرض' : 'Get Quote'}
                </motion.button>
              </div>
            </div>

            {/* Mobile/Tablet Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl transition-all active:scale-90"
              >
                {isOpen ? <X className="w-7 h-7 text-blue-600" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Advanced Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] lg:hidden"
          >
            {/* Backdrop */}
            <div 
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            {/* Panel */}
            <motion.div 
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`absolute inset-y-0 ${isRTL ? 'right-0' : 'left-0'} w-[85%] max-w-sm bg-white dark:bg-slate-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col p-8 overflow-y-auto`}
            >
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-2xl font-black ${isRTL ? 'font-ar' : 'font-en'}`}>{t.brand}</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900">
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between text-3xl font-black p-6 rounded-3xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-all group ${isRTL ? 'font-ar' : 'font-en'}`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-8 h-8 text-blue-500 transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180' : ''}`} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-16 space-y-6">
                <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <span className="font-black text-sm uppercase tracking-widest text-slate-500">Settings</span>
                  <div className="flex items-center gap-4">
                    <LanguageToggle />
                  </div>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-6 bg-blue-600 text-white font-black rounded-3xl text-xl shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3 ${isRTL ? 'font-ar' : 'font-en'}`}
                >
                   <LayoutGrid className="w-6 h-6" />
                  {t.contact_us}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
