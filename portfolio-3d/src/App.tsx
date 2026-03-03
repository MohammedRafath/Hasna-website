import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Steps } from './sections/Steps';
import { Stats } from './sections/Stats';
import { Contact } from './sections/Contact';
import { Navigation } from './components/ui/Navigation';
import { Loader } from './components/ui/Loader';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            <Navigation />
            <main>
              <Hero />
              <Projects />
              <Steps />
              <Stats />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
