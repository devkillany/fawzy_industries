
import React, { useEffect } from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import History from './components/History';
import Projects from './components/Projects';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion as motionBase, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const motion = motionBase as any;

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          {/* Industrial Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[1000] origin-left" 
            style={{ scaleX }}
          />
          
          <Navbar />
          
          <main className="relative">
            <Hero />
            
            {/* CSS-Powered Industrial Marquee */}
            <div className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden border-y border-slate-200/50 dark:border-slate-800/50">
                <div className="animate-marquee-css">
                   {[1, 2, 3, 4, 5, 6].map((_, i) => (
                     <div key={i} className="flex items-center gap-24 md:gap-40 px-12 md:px-20">
                        <span className="text-4xl md:text-8xl font-black tracking-tighter text-slate-200 dark:text-slate-800/50 hover:text-blue-500 transition-colors uppercase italic">GLOBAL LOGISTICS</span>
                        <span className="text-4xl md:text-8xl font-black tracking-tighter text-slate-200 dark:text-slate-800/50 hover:text-blue-500 transition-colors uppercase italic">ADVANCED METALLURGY</span>
                        <span className="text-4xl md:text-8xl font-black tracking-tighter text-slate-200 dark:text-slate-800/50 hover:text-blue-500 transition-colors uppercase italic">SYSTEM INTEGRATION</span>
                     </div>
                   ))}
                </div>
            </div>

            <About />
            <History />
            <Services />
            
            {/* Cinematic Transition Section */}
            <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 z-0"
                >
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale opacity-20" />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </motion.div>
                
                <div className="relative z-10 text-center space-y-8 px-4">
                  <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tighter uppercase italic">
                    Pushing the <br/> <span className="text-blue-600">Threshold.</span>
                  </h2>
                  <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                </div>
            </div>

            <Values />
            <Projects />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
