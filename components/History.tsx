
import React from 'react';
import { motion as motionBase } from 'framer-motion';
// Fix for Framer Motion type inference issues in certain environments
const motion = motionBase as any;
import { useLanguage } from '../LanguageContext';
import { HISTORY } from '../constants';

const History: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-black mb-4 ${isRTL ? 'font-ar' : 'font-en'}`}
          >
            {t.history_title}
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-slate-800 hidden md:block"></div>

          <div className="space-y-12">
            {HISTORY.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                  idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-5/12 text-center md:text-right">
                  {idx % 2 === 0 ? (
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <span className="text-4xl font-black text-blue-600 mb-2 block">{item.year}</span>
                      <p className={`text-xl font-bold dark:text-slate-300 ${isRTL ? 'font-ar' : 'font-en'}`}>{item.event[isRTL ? 'ar' : 'en']}</p>
                    </div>
                  ) : null}
                </div>

                <div className="z-10 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 shadow-xl"></div>

                <div className="md:w-5/12 text-center md:text-left">
                  {idx % 2 !== 0 ? (
                    <div className={isRTL ? 'text-left' : 'text-right'}>
                      <span className="text-4xl font-black text-blue-600 mb-2 block">{item.year}</span>
                      <p className={`text-xl font-bold dark:text-slate-300 ${isRTL ? 'font-ar' : 'font-en'}`}>{item.event[isRTL ? 'ar' : 'en']}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
