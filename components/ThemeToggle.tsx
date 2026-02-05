
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun className={`absolute w-4 h-4 text-amber-500 transition-all duration-500 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90 scale-0'}`} />
        <Moon className={`absolute w-4 h-4 text-blue-400 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 scale-0'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
