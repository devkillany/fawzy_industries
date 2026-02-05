
import React from 'react';
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { CheckCircle2, Factory, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { STATS } from '../constants';

const About: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  const benefits = [
    { text: t.innovative_tech, icon: Factory },
    { text: t.global_standards, icon: Globe },
    { text: t.sustainability, icon: Shield }
  ];

  return (
    <section id="about" className="py-32 md:py-48 overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Advanced Visual Composition */}
          <div className="relative group">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070" 
                alt="Operations"
                className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className={`absolute -bottom-10 ${isRTL ? '-left-10' : '-right-10'} bg-blue-600 p-12 rounded-[40px] shadow-2xl z-20 hidden md:block`}
            >
              <div className="text-white">
                <p className="text-7xl font-black tracking-tighter">36+</p>
                <p className={`text-xs font-black uppercase tracking-[0.3em] opacity-80 ${isRTL ? 'font-ar' : 'font-en'}`}>Years of Excellence</p>
              </div>
            </motion.div>
            
            <div className={`absolute -top-10 ${isRTL ? '-right-10' : '-left-10'} w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10`}></div>
          </div>

          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-6 block"
              >
                Industrial Foundation
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`text-5xl md:text-8xl font-black mb-10 leading-[1] tracking-tighter ${isRTL ? 'font-ar' : 'font-en'}`}
              >
                {t.about_us}
              </motion.h2>
              <p className={`text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium ${isRTL ? 'font-ar' : 'font-en'}`}>
                {t.about_text}
              </p>
            </div>
            
            <div className="grid gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: isRTL ? -10 : 10 }}
                  className="flex items-center gap-6 p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-xl font-black ${isRTL ? 'font-ar' : 'font-en'}`}>{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-12 md:gap-20 pt-12 border-t border-slate-100 dark:border-slate-800">
              {STATS.slice(0, 3).map((stat, idx) => (
                <div key={idx}>
                  <p className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className={`text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-[10px] ${isRTL ? 'font-ar' : 'font-en'}`}>
                    {stat.label[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
