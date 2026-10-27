import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { TimelineItem } from '../../data/types';

interface TimelineProps {
    items: TimelineItem[];
    /** Bordure du point central, de la couleur du fond de la section */
    dotBorderClassName: string;
}

export function Timeline({ items, dotBorderClassName }: TimelineProps) {
    return (
        <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 dark:bg-accent -translate-x-1/2 hidden md:block"></div>

            <ol className="space-y-12">
                {items.map((item, index) => (
                    <TimelineEntry
                        key={`${item.organization}-${item.period}`}
                        item={item}
                        side={index % 2 === 0 ? 'left' : 'right'}
                        dotBorderClassName={dotBorderClassName}
                    />
                ))}
            </ol>
        </div>
    );
}

interface TimelineEntryProps {
    item: TimelineItem;
    side: 'left' | 'right';
    dotBorderClassName: string;
}

function TimelineEntry({ item, side, dotBorderClassName }: TimelineEntryProps) {
    // Chaque entrée s'anime quand elle entre dans l'écran, et non toutes en même temps
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`relative flex items-center flex-col ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            <div className={`w-full md:w-[calc(50%-2rem)] ${side === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.article
                    className="bg-white dark:bg-night-card border border-gray-200 dark:border-white/5 rounded-xl p-6 shadow-sm dark:shadow-none hover:border-accent/30 transition-colors duration-200"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    {item.badge && (
                        <div className="mb-3">
                            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                                {item.badge}
                            </span>
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                    </h3>

                    <div className="mb-4">
                        <p className="text-accent font-medium text-sm mb-1">
                            {item.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                            {item.period} | {item.location}
                        </p>
                    </div>

                    <ul className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {item.missions.map((mission) => (
                            <li key={mission} className="mb-1">
                                <span className="text-accent font-medium" aria-hidden="true">•</span> {mission}
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                        {item.technologies.map((tech) => (
                            <motion.li
                                key={tech}
                                className="px-3 py-1 bg-accent/20 text-accent rounded-md text-xs font-medium"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                                transition={{ duration: 0.2 }}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </motion.article>
            </div>

            <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 z-10 ${dotBorderClassName}`}></div>

            <div className="hidden md:block w-[calc(50%-2rem)]"></div>
        </motion.li>
    );
}
