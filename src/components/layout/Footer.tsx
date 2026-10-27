import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { scrollBehavior } from '../../lib/scroll';
import { socialLinks } from '../../data/socials';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior()
    });
  };

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/5 bg-white dark:bg-night">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <button
                onClick={scrollToTop}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-accent transition-colors mb-2 cursor-pointer"
            >
              Luca Chaboissier
            </button>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Développeur Backend PHP / Symfony
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-100 dark:bg-night-raised border border-gray-200 dark:border-white/5 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-accent hover:border-accent/30 duration-100"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {currentYear} Luca Chaboissier. Tous droits réservés.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 z-40"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.1 }}
                aria-label="Revenir en haut de la page"
            >
              <ArrowUp size={20} />
            </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
