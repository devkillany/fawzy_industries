
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm"
    >
      <Languages className="w-4 h-4 text-blue-500" />
      <span className={`text-[10px] font-black uppercase tracking-widest ${isRTL ? 'font-ar' : 'font-en'}`}>
        {language === 'en' ? 'AR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
