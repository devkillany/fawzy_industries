
import React from 'react';
import { motion as motionBase } from 'framer-motion';
// Fix for Framer Motion type inference issues in certain environments
const motion = motionBase as any;
import { useLanguage } from '../LanguageContext';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-4xl md:text-5xl font-black mb-4 ${isRTL ? 'font-ar' : 'font-en'}`}
          >
            {t.values_title}
          </motion.h2>
          <div className="w-20 h-1.5 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {VALUES.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors text-center"
            >
              <div className="w-20 h-20 bg-white text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <value.icon className="w-10 h-10" />
              </div>
              <h3 className={`text-2xl font-black mb-4 ${isRTL ? 'font-ar' : 'font-en'}`}>
                {value.title[isRTL ? 'ar' : 'en']}
              </h3>
              <p className={`text-white/80 leading-relaxed font-medium ${isRTL ? 'font-ar' : 'font-en'}`}>
                {value.desc[isRTL ? 'ar' : 'en']}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
