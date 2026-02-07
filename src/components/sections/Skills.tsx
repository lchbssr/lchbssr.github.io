import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import {useRef, useState } from 'react';
import { Lightbulb, Target, Zap, CheckCircle2, Clock, Eye } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState<string>("Hard Skills");

  const skillCategories = [
    {
      title: 'Langages',
      skills: [
        { name: 'PHP', logo: 'https://cdn.simpleicons.org/php' },
        { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
        { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
        { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
        { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
        { name: 'C#', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
        { name: 'C', logo: 'https://cdn.simpleicons.org/c' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
        { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
        { name: 'Svelte', logo: 'https://cdn.simpleicons.org/svelte' },
        { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5' },
        { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
        { name: 'Symfony', logo: 'https://cdn.simpleicons.org/symfony', invertOnDark: true },
        { name: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel' },
        { name: 'CodeIgniter', logo: 'https://cdn.simpleicons.org/codeigniter' },
        { name: 'AdonisJS', logo: 'https://cdn.simpleicons.org/adonisjs' },
        { name: 'API Platform', logo: 'https://api-platform.com/images/logos/Logo_Circle%20webby%20blue.svg' },
        { name: 'Deno', logo: 'https://cdn.simpleicons.org/deno', invertOnDark: true },
      ],
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'React Native', logo: 'https://cdn.simpleicons.org/react' },
        { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter' },
        { name: 'Swift', logo: 'https://cdn.simpleicons.org/swift' },
        { name: 'Kotlin', logo: 'https://cdn.simpleicons.org/kotlin' },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql' },
        { name: 'SQLite', logo: 'https://images.icon-icons.com/2699/PNG/512/sqlite_logo_icon_169724.png' },
        { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase' },
        { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
        { name: 'MongoDB', logo: 'https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg' },
        { name: 'DBeaver', logo: 'https://cdn.simpleicons.org/dbeaver', invertOnDark: true },
      ],
    },
    {
      title: 'CSS Frameworks',
      skills: [
        { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
        { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap' },
      ],
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
        { name: 'Podman', logo: 'https://icon.icepanel.io/Technology/svg/Podman.svg', invertOnDark: true },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github', invertOnDark: true },
      ],
    },
    {
      title: 'Autres',
      skills: [
        { name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino' },
        { name: 'Raspberry Pi', logo: 'https://cdn.simpleicons.org/raspberrypi' },
        { name: 'Vite', logo: 'https://cdn.simpleicons.org/vite' },
        { name: 'npm', logo: 'https://cdn.simpleicons.org/npm' },
        { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
        { name: 'Insomnia', logo: 'https://cdn.simpleicons.org/insomnia' },
        { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira' },
        { name: 'Gravitee', logo: 'https://www.gravitee.io/hubfs/Background_logo.svg', invertOnDark: true },
      ],
    },
  ];

  const softSkills = [
    {
      name: 'Curieux',
      icon: Lightbulb,
      description: 'J\'explore de nouvelles approches pour progresser en continu tout en gardant une veille active.'
    },
    {
      name: 'Autonome',
      icon: Target,
      description: 'Je prends en charge mes sujets de bout en bout, avec le sens des priorités.'
    },
    {
      name: 'Adaptable',
      icon: Zap,
      description: 'Je m’ajuste rapidement aux changements et imprévus, en gardant en vue les enjeux que ça peut avoir.'
    },
    {
      name: 'Persévérant',
      icon: CheckCircle2,
      description: 'J\'analyse et j\'itère méthodiquement jusqu\'à identifier la solution optimale.'
    },
    {
      name: 'Patient',
      icon: Clock,
      description: 'Je privilégie la qualité et la clarté, même si cela demande du temps.'
    },
    {
      name: 'Attentif aux détails',
      icon: Eye,
      description: 'Je soigne les détails tout en restant pragmatique pour respecter les délais.'
    },
  ];

  return (
      <section id="skills" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#0f0f14]">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Titre de section */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Compétences techniques
            </h2>
            <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
          </motion.div>

          {/* Filtres */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* Bouton Hard Skills */}
              <motion.button
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedFilter === "Hard Skills"
                          ? "bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30"
                          : "bg-gray-200 dark:bg-[#1e1e24] text-gray-800 dark:text-white hover:bg-[#6366f1]/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSelectedFilter("Hard Skills")}
              >
                Hard Skills
              </motion.button>

              {/* Bouton Soft Skills */}
              <motion.button
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedFilter === "Soft Skills"
                          ? "bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30"
                          : "bg-gray-200 dark:bg-[#1e1e24] text-gray-800 dark:text-white hover:bg-[#6366f1]/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSelectedFilter("Soft Skills")}
              >
                Soft Skills
              </motion.button>
            </div>
          </motion.div>

          {/* SECTION 1 : Hard Skills */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-24"
              style={{
                display: selectedFilter === "Soft Skills" ? "none" : "block"
              }}
          >
            {/* Grille de compétences */}
            <div className="space-y-16">
              {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    {/* Titre de catégorie */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                      {category.title}
                    </h3>

                    {/* Cartes de compétences */}
                    <div className="flex flex-wrap justify-center gap-6">
                      {category.skills.map((skill) => (
                          <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              whileHover={{
                                y: -8,
                                scale: 1.05,
                                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeOut"
                              }}
                              className="bg-gray-100 dark:bg-[#1e1e24] border border-gray-200 dark:border-white/5 rounded-xl p-6 text-center hover:border-[#6366f1]/30 transition-colors duration-200 cursor-pointer w-36 h-36 flex flex-col items-center justify-center"
                          >
                            {/* Icône officielle */}
                            <div className="mb-3 flex items-center justify-center h-16">
                              <img
                                  src={skill.logo}
                                  alt={skill.name}
                                  className={`w-16 h-16 object-contain ${
                                      skill.invertOnDark ? 'dark:invert' : ''
                                  }`}
                              />
                            </div>

                            {/* Nom en bas */}
                            <div className="text-gray-900 dark:text-white font-medium text-sm">
                              {skill.name}
                            </div>
                          </motion.div>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section Soft Skills */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: selectedFilter === "Hard Skills" ? "none" : "block"
              }}
          >
            {/* Grille de soft skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{
                          y: -8,
                          scale: 1.03,
                          boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)'
                        }}
                        className="bg-gray-100 dark:bg-[#1e1e24] border border-gray-200 dark:border-white/5 rounded-xl p-6 hover:border-[#6366f1]/30 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icône */}
                        <div className="shrink-0 w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#6366f1]" />
                        </div>

                        {/* Texte */}
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                            {skill.name}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
  );
}