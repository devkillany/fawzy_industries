
import React from 'react';
import { 
  Factory, Linkedin, Twitter, Facebook, ExternalLink, 
  Mail, Phone, MapPin, ArrowUpRight, Github, Code, Heart, 
  Cpu, Shield, Terminal
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion as motionBase } from 'framer-motion';

const motion = motionBase as any;

const Footer: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <footer className="relative bg-slate-950 text-white pt-32 pb-12 border-t border-slate-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand & Corporate Mission */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-blue-600 rounded-[28px] flex items-center justify-center shadow-[0_20px_40px_rgba(37,99,235,0.25)] transform -rotate-3">
                <Factory className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`text-4xl font-black tracking-tighter ${isRTL ? 'font-ar' : 'font-en'}`}>
                  {t.brand}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-600"></span>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-500">Global Industrial Power</span>
                </div>
              </div>
            </div>
            <p className={`text-slate-400 text-xl leading-relaxed max-w-md italic ${isRTL ? 'font-ar' : 'font-en'}`}>
              "{t.footer_desc}"
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Github].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -5, backgroundColor: '#2563eb' }}
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-slate-800 transition-all"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className={`text-xs font-black tracking-[0.4em] text-blue-500 uppercase flex items-center gap-3 ${isRTL ? 'font-ar' : 'font-en'}`}>
              <Cpu className="w-4 h-4" /> {t.quick_links}
            </h4>
            <ul className="grid grid-cols-1 gap-5">
              {[t.nav.home, t.nav.about, t.nav.services, t.nav.projects, t.nav.contact].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-all flex items-center justify-between group py-1 border-b border-white/5 hover:border-blue-600/50">
                    <span className="text-lg font-bold">{link}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global HQ Info */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className={`text-xs font-black tracking-[0.4em] text-blue-500 uppercase flex items-center gap-3 ${isRTL ? 'font-ar' : 'font-en'}`}>
              <Shield className="w-4 h-4" /> {t.contact_info}
            </h4>
            <div className="space-y-8">
              <div className="group flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-600/30 transition-all">
                <MapPin className="w-7 h-7 text-blue-500" />
                <p className="text-slate-300 text-base font-medium leading-relaxed">
                  International Trade Tower, 88th Floor,<br />Smart Industrial District, Cairo.
                </p>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-600/30 transition-all">
                <Mail className="w-7 h-7 text-blue-500" />
                <p className="text-slate-300 font-bold text-lg">corporate@fawzy-group.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* THE MASTERPIECE: DEVELOPER RECOGNITION */}
        <div className="relative mt-24 pt-16 border-t border-slate-900">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
            Digital Engineering Excellence
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-slate-900/30 p-10 md:p-16 rounded-[40px] border border-white/5 glass-blur">
            
            <div className="flex flex-col items-center lg:items-start gap-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                   <Terminal className="w-6 h-6 text-blue-500" />
                 </div>
                 <span className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Lead System Architect</span>
               </div>
               
               <div className="flex flex-col items-center lg:items-start space-y-2">
                  <span className={`text-slate-400 text-sm font-bold uppercase ${isRTL ? 'font-ar' : 'font-en'}`}>
                    {t.developed_by}
                  </span>
                  <a 
                    href="https://devkillany.github.io/portofolio3/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <span className={`text-3xl sm:text-5xl font-black text-white group-hover:text-blue-500 transition-all tracking-tighter ${isRTL ? 'font-ar' : 'font-en'}`}>
                      {t.dev_name}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-0 h-1.5 bg-blue-600 group-hover:w-full transition-all rounded-full"></span>
                  </a>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://devkillany.github.io/portofolio3/" 
                target="_blank"
                className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-widest hover:bg-blue-700 hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3"
              >
                Explore Archive <ArrowUpRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3 text-slate-500 font-bold">
                <Code className="w-5 h-5" />
                <span>Modern Stack v3.0</span>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
              <div className="flex items-center gap-2 text-slate-300 font-black">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-600 fill-red-600 animate-pulse" />
                <span>in Egypt</span>
              </div>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
                &copy; {new Date().getFullYear()} {t.brand} Integrated
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
