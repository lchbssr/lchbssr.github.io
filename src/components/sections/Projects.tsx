import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {ExternalLink, Github, ImageIcon} from 'lucide-react';
import { ImageGallery } from "../../components/ui/ImageGallery";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../contexts/LanguageContext";
import { projects } from "../../data/projects";

export function Projects() {
  const { language, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState<string[]>([]);
  const [currentGalleryTitle, setCurrentGalleryTitle] = useState("");

  const openGallery = (images: string[], title: string) => {
    setCurrentGalleryImages(images);
    setCurrentGalleryTitle(title);
    setGalleryOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-white dark:bg-night">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.projects.title} className="mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {projects.map((project, index) => (
              <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                    className="bg-white dark:bg-night-card border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden h-full flex flex-col group shadow-sm dark:shadow-none"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-night-raised">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-night-card via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow border-t border-gray-200 dark:border-white/5 group-hover:border-accent/30 transition-colors duration-200">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold mb-4 w-fit">
                    {project.type[language]}
                  </span>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description[language]}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6" aria-label={t.projects.technologies}>
                      {project.technologies.map((tech) => (
                          <motion.li
                              key={tech}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium border border-accent/20"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                              transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      {project.liveUrl ? (
                          <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover transition-colors text-white rounded-lg text-sm font-medium"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                          >
                            <ExternalLink size={16} />
                            {t.projects.live}
                          </motion.a>
                      ) : project.galleryImages && project.galleryImages.length > 0 ? (
                          <motion.button
                              onClick={() =>
                                  openGallery(project.galleryImages!, project.title)
                              }
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover transition-colors text-white rounded-lg text-sm font-medium"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                          >
                            <ImageIcon size={16} />
                            {t.projects.gallery}
                          </motion.button>
                      ) : (
                          <div className="flex-1 relative group/tooltip">
                            <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/50 text-gray-200 rounded-lg text-sm font-medium cursor-not-allowed">
                              <ExternalLink size={16} />
                              {t.projects.unavailable}
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-accent text-white text-xs font-medium rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                              {t.projects.comingSoon}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-accent"></div>
                            </div>
                          </div>
                      )}
                      <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-accent text-accent hover:bg-accent/10 transition-colors rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                      >
                        <Github size={16} />
                        {t.projects.code}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
      <ImageGallery
          images={currentGalleryImages}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          projectTitle={currentGalleryTitle}
      />
    </section>
  );
}
