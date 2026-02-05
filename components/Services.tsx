
import React from 'react';
import { motion as motionBase } from 'framer-motion';
// Fix for Framer Motion type inference issues in certain environments
const motion = motionBase as any;
import { Cpu, Zap, Truck, Settings, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SERVICES } from '../constants';

const IconsMap: Record<string, React.ElementType> = {
  Cpu, Zap, Truck, Settings
};

const Services: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Enterprise Solutions
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-5xl md:text-6xl font-black mb-6 ${isRTL ? 'font-ar' : 'font-en'}`}
            >
              {t.our_services}
            </motion.h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              We provide the critical infrastructure and high-precision engineering needed to scale industrial operations worldwide.
            </p>
          </div>
          <div className="w-32 h-1 bg-blue-600 rounded-full hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, idx) => {
            const Icon = IconsMap[service.icon];
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col lg:flex-row overflow-hidden bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl hover:shadow-blue-500/10 transition-all border dark:border-slate-800"
              >
                <div className="lg:w-2/5 overflow-hidden">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title[language]}
                  />
                </div>
                <div className="lg:w-3/5 p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-black mb-4 dark:text-white ${isRTL ? 'font-ar' : 'font-en'}`}>
                      {service.title[language]}
                    </h3>
                    <p className={`text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 ${isRTL ? 'font-ar' : 'font-en'}`}>
                      {service.description[language]}
                    </p>
                  </div>
                  <a href="#" className="flex items-center gap-2 text-blue-600 font-black group-hover:gap-4 transition-all">
                    <span>In-depth Analysis</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
