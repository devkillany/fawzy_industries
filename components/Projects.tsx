
import React from 'react';
import { motion as motionBase } from 'framer-motion';
// Fix for Framer Motion type inference issues in certain environments
const motion = motionBase as any;
import { useLanguage } from '../LanguageContext';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`text-4xl md:text-5xl font-black mb-4 ${isRTL ? 'font-ar' : 'font-en'}`}
            >
              {t.nav.projects}
            </motion.h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest">{t.tagline}</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-xl hover:bg-blue-600 transition-colors"
          >
            {isRTL ? 'عرض كافة المشاريع' : 'Explore All Cases'}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={project.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={project.title[isRTL ? 'ar' : 'en']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              
              <div className={`absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform ${isRTL ? 'text-right' : 'text-left'}`}>
                <span className="text-blue-400 font-black text-sm uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className={`text-2xl text-white font-black mb-4 ${isRTL ? 'font-ar' : 'font-en'}`}>
                  {project.title[isRTL ? 'ar' : 'en']}
                </h3>
                <div className="flex items-center gap-2 text-white/70 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
