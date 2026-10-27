import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../contexts/LanguageContext';
import { highlight } from '../../lib/highlight';

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <SectionHeading title={t.about.title} />

        <div className="gap-12 items-start mb-16">
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed"
          >
            {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{highlight(paragraph)}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
