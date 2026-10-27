import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <SectionHeading title="À propos de moi" />

        <div className="gap-12 items-start mb-16">
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed"
          >
            <p>
              J'ai débuté mon parcours de développeur avec le BTS SIO. C'est là que j'ai posé mes premières bases en{' '}
              <span className="text-accent font-semibold">PHP</span> et{' '}
              <span className="text-accent font-semibold">Laravel</span>, avant de faire de{' '}
              <span className="text-accent font-semibold">Symfony</span> ma spécialité au fil de mes expériences en stage et en alternance.
            </p>
            <p>
              Pour avoir une vision complète des projets, je ne me suis pas limité au back-end. J'ai exploré le{' '}
              <span className="text-accent font-semibold">développement mobile</span> et la manipulation d'{''}
              <span className="text-accent font-semibold">APIs</span> pour être capable de créer des interfaces modernes et réactives.
            </p>
            <p>
              Fort de deux ans d'alternance chez <span className="text-accent font-semibold">APRIL Marine</span> sur des APIs métier et de mon{' '}
              <span className="text-accent font-semibold">Mastère Expert en Développement Full Stack (Bac+5)</span>, je recherche aujourd'hui un poste de{' '}
              <span className="text-accent font-semibold">développeur</span>, idéalement en{' '}
              <span className="text-accent font-semibold">CDI</span>. Disponible{' '}
              <span className="text-accent font-semibold">immédiatement</span>, j'ai hâte de m'investir pleinement dans vos méthodes et vos projets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
