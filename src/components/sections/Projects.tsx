import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {ExternalLink, Github, ImageIcon} from 'lucide-react';
import { ImageGallery } from "../../components/ui/ImageGallery";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
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

  const projects = [
    {
      title: 'Booking API',
      description: 'API REST de réservation d\'espaces partagés : authentification JWT, règles métier, créneaux disponibles, anti-chevauchement garanti par PostgreSQL et e-mails asynchrones.',
      type: 'API Backend',
      image: './projects/booking-api.webp',
      technologies: ['PHP', 'Symfony', 'API Platform', 'PostgreSQL', 'Docker', 'PHPUnit'],
      liveUrl: null,
      codeUrl: 'https://github.com/lchbssr/booking-api',
      galleryImages: [
        './projects/booking-api/endpoints.webp',
        './projects/booking-api/connexion-jwt.webp',
        './projects/booking-api/disponibilites.webp',
        './projects/booking-api/reservation-acceptee.webp',
        './projects/booking-api/reservation-refusee.webp',
        './projects/booking-api/email-confirmation.webp',
        './projects/booking-api/tests.webp',
      ],
    },
    {
      title: 'Smartexpo',
      description: 'Exposition des modèles de smartphones. Projet académique L3 CDA.',
      type: 'Application Web',
      image: './projects/smartexpo.webp',
      technologies: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'Bootstrap', 'SQL'],
      liveUrl: 'https://dev-data.alwaysdata.net/',
      codeUrl: 'https://github.com/lchbssr/smartexpo',
    },
    {
      title: 'Keywatch',
      description: 'Application web basée sur un jeu de frappe consistant à écrire un texte le plus vite possible. Projet académique LP AMIO.',
      type: 'Application Web',
      image: './projects/keywatch.webp',
      technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
      liveUrl: 'https://lchbssr.github.io/keywatch',
      codeUrl: 'https://github.com/lchbssr/keywatch',
    },
    {
      title: 'Pixel',
      description: 'Site Web regroupant l\'ensemble des jeux-vidéos. Projet académique LP AMIO.',
      type: 'Application Web',
      image: './projects/pixel.webp',
      technologies: ['HTML', 'CSS', 'PHP', 'Symfony', 'SQL', 'Docker'],
      liveUrl: null,
      codeUrl: 'https://github.com/lchbssr/pixel',
      galleryImages: [
        './projects/pixel/accueil.webp',
        './projects/pixel/accueil-connecte.webp',
        './projects/pixel/inscription.webp',
        './projects/pixel/connexion.webp',
        './projects/pixel/liste-jeux.webp',
        './projects/pixel/liste-editeurs.webp',
        './projects/pixel/liste-supports.webp',
      ],
    },
    {
      title: 'Foodeat',
      description: 'Application mobile regroupant la liste des recettes de cuisine à l\'aide d\'une API. Projet académique LP AMIO.',
      type: 'Application Mobile',
      image: './projects/foodeat.webp',
      technologies: ['Swift', 'API'],
      liveUrl: null,
      codeUrl: 'https://github.com/lchbssr/foodeat',
      galleryImages: [
        './projects/foodeat/accueil.webp',
        './projects/foodeat/detail.webp',
        './projects/foodeat/liste-plats.webp',
        './projects/foodeat/relance-choix-plat.webp',
        './projects/foodeat/relance-choix-plat-2.webp',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-white dark:bg-night">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projets" className="mb-20" />

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
                    {project.type}
                  </span>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
                      {project.technologies.map((tech) => (
                          <li
                              key={tech}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium border border-accent/20"
                          >
                            {tech}
                          </li>
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
                            Voir le site
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
                            Voir les images
                          </motion.button>
                      ) : (
                          <div className="flex-1 relative group/tooltip">
                            <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/50 text-gray-200 rounded-lg text-sm font-medium cursor-not-allowed">
                              <ExternalLink size={16} />
                              Indisponible
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-accent text-white text-xs font-medium rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                              Le site arrive prochainement !
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
                        Code source
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
