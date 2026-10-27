import { MotionConfig } from 'motion/react';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from "./components/sections/About";
import { Footer } from "./components/layout/Footer";
import { Experience } from "./components/sections/Experience";
import { Formation } from "./components/sections/Formation";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
      <ThemeProvider>
          {/* Désactive les animations de mouvement si l'utilisateur l'a demandé à son système */}
          <MotionConfig reducedMotion="user">
              <div className="min-h-screen bg-gray-50 dark:bg-night-alt text-gray-900 dark:text-white transition-colors duration-300">
                  <Navigation />

                  <main>
                      <Hero />
                      <About />
                      <Experience />
                      <Projects />
                      <Skills />
                      <Formation />
                      <Contact />
                  </main>

                  <Footer />
              </div>
          </MotionConfig>
      </ThemeProvider>
  );
}

export default App;
