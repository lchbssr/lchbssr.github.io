import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface SectionHeadingProps {
    title: string;
    /** Marge sous le titre (classe Tailwind) */
    className?: string;
    /** Contenu optionnel affiché sous la barre (ex : texte d'introduction) */
    children?: ReactNode;
}

export function SectionHeading({ title, className = 'mb-16', children }: SectionHeadingProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`text-center ${className}`}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                {title}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            {children}
        </motion.div>
    );
}
