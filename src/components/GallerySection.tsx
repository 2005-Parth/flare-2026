import { motion } from 'framer-motion';

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    gradient: string;
    span: 'tall' | 'wide' | 'normal';
    emoji: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'Garba Under Stars',
        category: 'Dance',
        gradient: 'linear-gradient(135deg, #d4af37, #8b6914)',
        span: 'tall',
        emoji: '💃',
    },
    {
        id: 2,
        title: 'Folk Orchestra',
        category: 'Music',
        gradient: 'linear-gradient(135deg, #92400e, #451a03)',
        span: 'normal',
        emoji: '🎻',
    },
    {
        id: 3,
        title: 'Neon Stage',
        category: 'Concert',
        gradient: 'linear-gradient(135deg, #dc2626, #7c3aed)',
        span: 'normal',
        emoji: '🎤',
    },
    {
        id: 4,
        title: 'Laser Dome',
        category: 'Experience',
        gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
        span: 'wide',
        emoji: '✨',
    },
    {
        id: 5,
        title: 'Heritage Craft',
        category: 'Art',
        gradient: 'linear-gradient(135deg, #78350f, #d4af37)',
        span: 'normal',
        emoji: '🏺',
    },
    {
        id: 6,
        title: 'Crowd Energy',
        category: 'Moments',
        gradient: 'linear-gradient(135deg, #e11d48, #f97316)',
        span: 'tall',
        emoji: '🔥',
    },
    {
        id: 7,
        title: 'Digital Canvas',
        category: 'Future',
        gradient: 'linear-gradient(135deg, #a855f7, #06b6d4)',
        span: 'normal',
        emoji: '🎨',
    },
    {
        id: 8,
        title: 'Night Sky Lanterns',
        category: 'Tradition',
        gradient: 'linear-gradient(135deg, #1e1b4b, #4338ca)',
        span: 'normal',
        emoji: '🏮',
    },
];

export default function GallerySection() {
    return (
        <section
            data-section="gallery"
            className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
            style={{ background: '#0a0a0a' }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
                <p className="text-purple-400/60 text-xs tracking-[0.3em] uppercase font-inter mb-4">
                    Through the Lens
                </p>
                <h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #a855f7, #06b6d4, #a855f7)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'gradient 6s ease infinite',
                    }}
                >
                    Gallery
                </h2>
                <p className="text-white/40 text-base sm:text-lg font-inter">
                    Moments woven in time
                </p>
            </motion.div>

            {/* Masonry grid */}
            <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        className="break-inside-avoid mb-4 sm:mb-5"
                    >
                        <div
                            className="group relative rounded-xl overflow-hidden"
                            style={{
                                height:
                                    item.span === 'tall'
                                        ? '380px'
                                        : item.span === 'wide'
                                            ? '220px'
                                            : '280px',
                            }}
                        >
                            {/* Gradient background (placeholder for real images) */}
                            <div
                                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                style={{ background: item.gradient }}
                            />

                            {/* Center emoji */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-5xl sm:text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                                    {item.emoji}
                                </span>
                            </div>

                            {/* Glassmorphism hover overlay */}
                            <div
                                className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                }}
                            >
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase font-inter text-white/70 bg-white/10 mb-2">
                                    {item.category}
                                </span>
                                <h4 className="text-base sm:text-lg font-bold font-playfair text-white">
                                    {item.title}
                                </h4>
                            </div>

                            {/* Corner glow on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background:
                                        'radial-gradient(circle at 85% 85%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
