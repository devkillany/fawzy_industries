
import React from 'react';
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { ChevronRight, ArrowLeft, PlayCircle, Activity } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-950">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Advanced Industry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-blue-600/10 border border-blue-500/20 backdrop-blur-xl"
            >
              <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
              <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                {t.tagline}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter ${isRTL ? 'font-ar' : 'font-en'}`}
            >
              {t.hero_title.split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? "text-blue-600" : ""}>{word} </span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl ${isRTL ? 'font-ar' : 'font-en'}`}
            >
              {t.hero_sub}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <a 
                href="#about"
                className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-black text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
              >
                {t.learn_more}
                {isRTL ? <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" /> : <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />}
              </a>
              
              <button className="flex items-center gap-4 text-white font-black group px-6 py-4 rounded-full hover:bg-white/5 transition-all">
                <PlayCircle className="w-14 h-14 text-blue-500 transition-transform group-hover:scale-110" />
                <span className="text-lg">{language === 'ar' ? 'شاهد الرؤية' : 'Watch Vision'}</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="relative glass-blur border border-white/10 p-12 rounded-[40px] shadow-2xl space-y-12">
              {[
                { label: "Markets", val: "42+", sub: "Global Reach" },
                { label: "Assets", val: "$12B", sub: "Under Management" },
                { label: "Standard", val: "Tier-1", sub: "Certified Entity" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between gap-8 group">
                  <div>
                    <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest">{stat.label}</p>
                    <p className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors">{stat.val}</p>
                  </div>
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-blue-600/50 transition-all"></div>
                  <p className="text-slate-400 text-xs font-bold">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
