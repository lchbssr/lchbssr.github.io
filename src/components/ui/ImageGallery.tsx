import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef, useId } from 'react';

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])';
// Distance (px) ou vitesse (px/s) de glissement à partir de laquelle on change d'image
const SWIPE_OFFSET = 60;
const SWIPE_VELOCITY = 500;

interface ImageGalleryProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
}

export function ImageGallery({ images, isOpen, onClose, projectTitle }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wasOpen, setWasOpen] = useState(isOpen);
    const panelRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    // Ne ferme la galerie que si le clic a commencé sur le fond (évite une fermeture en fin de glissement)
    const pressedOnBackdrop = useRef(false);
    const titleId = useId();

    // Revient à la première image à chaque ouverture (ajustement pendant le rendu, sans effet)
    if (isOpen !== wasOpen) {
        setWasOpen(isOpen);
        if (isOpen) {
            setCurrentIndex(0);
        }
    }

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'Tab' && panelRef.current) {
                // Garde le focus clavier à l'intérieur de la galerie
                const focusables = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, goToPrevious, goToNext, onClose]);

    // Place le focus dans la galerie à l'ouverture et le rend au bouton d'origine à la fermeture
    useEffect(() => {
        if (!isOpen) return;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        closeButtonRef.current?.focus();
        return () => previouslyFocused?.focus();
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onPointerDown={(e) => {
                        pressedOnBackdrop.current = e.target === e.currentTarget;
                    }}
                    onClick={(e) => {
                        if (pressedOnBackdrop.current && e.target === e.currentTarget) onClose();
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4 px-4">
                            <div className="flex-1">
                                <h3 id={titleId} className="text-white text-xl font-bold">{projectTitle}</h3>
                                <p className="text-gray-400 text-sm mt-1" aria-live="polite">
                                    {currentIndex + 1} / {images.length}
                                </p>
                            </div>

                            <motion.button
                                ref={closeButtonRef}
                                onClick={onClose}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Fermer la galerie"
                            >
                                <X className="text-white" size={24} />
                            </motion.button>
                        </div>

                        <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-lg bg-black/50">
                            <AnimatePresence mode="wait" custom={currentIndex}>
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`${projectTitle} - Image ${currentIndex + 1}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    drag={images.length > 1 ? 'x' : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.6}
                                    onDragEnd={(_, { offset, velocity }) => {
                                        if (offset.x < -SWIPE_OFFSET || velocity.x < -SWIPE_VELOCITY) goToNext();
                                        else if (offset.x > SWIPE_OFFSET || velocity.x > SWIPE_VELOCITY) goToPrevious();
                                    }}
                                    draggable={false}
                                    className={`max-w-full max-h-[70vh] object-contain ${images.length > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                                />
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <motion.button
                                        onClick={goToPrevious}
                                        whileHover={{ scale: 1.1, x: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                                        aria-label="Image précédente"
                                    >
                                        <ChevronLeft className="text-white" size={28} />
                                    </motion.button>

                                    <motion.button
                                        onClick={goToNext}
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                                        aria-label="Image suivante"
                                    >
                                        <ChevronRight className="text-white" size={28} />
                                    </motion.button>
                                </>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto px-4 pb-2 justify-center">
                                {images.map((image, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`Afficher l'image ${index + 1}`}
                                        aria-current={index === currentIndex ? 'true' : undefined}
                                        className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                            index === currentIndex
                                                ? 'border-accent ring-2 ring-accent/50'
                                                : 'border-white/20 hover:border-white/40'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                        {index === currentIndex && (
                                            <div className="absolute inset-0 bg-accent/20" />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        <div className="hidden md:flex justify-center gap-4 mt-4 text-gray-400 text-xs">
                            <span>← → Navigation</span>
                            <span>•</span>
                            <span>Échap : Fermer</span>
                        </div>
                        {images.length > 1 && (
                            <p className="md:hidden text-center mt-4 text-gray-400 text-xs">
                                Faites glisser l'image pour naviguer
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
