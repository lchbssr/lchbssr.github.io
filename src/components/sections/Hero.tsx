import { motion } from 'motion/react';
import { Download, Mail, FileText, MapPin, Car } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { highlight } from '../../lib/highlight';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto rounded-full p-1.5 bg-white dark:bg-night-card border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="w-full h-full rounded-full bg-gray-100 dark:bg-night-raised flex items-center justify-center overflow-hidden">
              <img
                  src="/assets/profile.webp"
                  alt={t.hero.photoAlt}
                  width={192}
                  height={192}
                  fetchPriority="high"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block"
        >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
          {t.hero.available}
        </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Luca Chaboissier
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4"
        >
          {t.hero.role}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-accent" />
            Nantes / Vendée
          </span>
          <span className="flex items-center gap-1.5">
            <Car size={16} className="text-accent" />
            {t.hero.drivingLicence}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {highlight(t.hero.intro)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer"
          >
            <FileText size={20} />
            {t.hero.background}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 text-gray-900 dark:text-white rounded-full font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Mail size={20} />
            {t.hero.contact}
          </motion.a>

          <motion.a
              href="/cv/CV_Luca_Chaboissier.pdf"
              download="CV_Luca_Chaboissier.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 text-gray-900 dark:text-white rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <Download size={20} />
            {t.hero.cv}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
