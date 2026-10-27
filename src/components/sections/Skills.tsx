import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { masteredSkills, practicedSkills, notionSkills, softSkills } from '../../data/skills';
import type { Skill } from '../../data/types';
import { useLanguage } from '../../contexts/LanguageContext';

export function Skills() {
  const { language, t } = useLanguage();

  return (
      <section id="skills" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-night-alt">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={t.skills.title} />

          <div className="space-y-12">
            <SkillLevel {...t.skills.mastered}>
              <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {masteredSkills.map((skill) => (
                    <motion.li
                        key={skill.name}
                        className="bg-white dark:bg-night-card border border-gray-200 dark:border-white/5 hover:border-accent/30 transition-colors rounded-xl p-4 shadow-sm dark:shadow-none flex flex-col items-center justify-center gap-3 aspect-square"
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                      <SkillLogo skill={skill} className="w-12 h-12" />
                      <span className="text-gray-900 dark:text-white font-semibold text-sm text-center">{skill.name}</span>
                    </motion.li>
                ))}
              </ul>
            </SkillLevel>

            <SkillLevel {...t.skills.practiced}>
              <ul className="flex flex-wrap gap-3">
                {practicedSkills.map((skill) => (
                    <motion.li
                        key={skill.name}
                        className="flex items-center gap-2 bg-white dark:bg-night-card border border-gray-200 dark:border-white/5 hover:border-accent/30 transition-colors rounded-lg px-3 py-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                      <SkillLogo skill={skill} className="w-5 h-5" />
                      <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{skill.name}</span>
                    </motion.li>
                ))}
              </ul>
            </SkillLevel>

            <SkillLevel {...t.skills.notions}>
              <ul className="flex flex-wrap gap-2">
                {notionSkills.map((name) => (
                    <motion.li
                        key={name}
                        className="px-3 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 bg-gray-200/60 dark:bg-white/5 border border-transparent hover:border-accent/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                      {name}
                    </motion.li>
                ))}
              </ul>
            </SkillLevel>

            <SkillLevel {...t.skills.soft}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map(({ name, icon: Icon, description }) => (
                    <motion.li
                        key={name.fr}
                        className="bg-white dark:bg-night-card border border-gray-200 dark:border-white/5 hover:border-accent/30 transition-colors rounded-xl p-5 shadow-sm dark:shadow-none flex items-start gap-4"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                    >
                      <div className="shrink-0 w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{name[language]}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{description[language]}</p>
                      </div>
                    </motion.li>
                ))}
              </ul>
            </SkillLevel>
          </div>
        </div>
      </section>
  );
}

interface SkillLevelProps {
  title: string;
  description: string;
  children: ReactNode;
}

function SkillLevel({ title, description, children }: SkillLevelProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
      >
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        {children}
      </motion.div>
  );
}

function SkillLogo({ skill, className }: { skill: Skill; className: string }) {
  if (skill.logo) {
    return (
        <img
            src={skill.logo}
            alt=""
            loading="lazy"
            decoding="async"
            className={`${className} object-contain ${skill.invertOnDark ? 'dark:invert' : ''}`}
        />
    );
  }
  if (skill.icon) {
    const Icon = skill.icon;
    return <Icon className={`${className} text-accent`} aria-hidden="true" />;
  }
  return null;
}
