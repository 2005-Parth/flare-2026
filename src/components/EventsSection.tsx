import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    venue: string;
    description: string;
    era: 'past' | 'present' | 'future';
    featured?: boolean;
}

const events: Event[] = [
    {
        id: 1,
        title: 'Grand Garba Night',
        date: 'Mar 14, 2026',
        time: '7:00 PM',
        venue: 'Central Arena',
        description:
            'A grand celebration of tradition — live dhol, folk dance circles, and the spirit of Navratri reborn under the stars.',
        era: 'past',
        featured: true,
    },
    {
        id: 2,
        title: "Raj Gadhvi's Dayro",
        date: 'Mar 14, 2026',
        time: '4:00 PM',
        venue: 'Heritage Pavilion',
        description:
            'A soulful afternoon of Gujarati folk stories, bhajans, and live orchestral poetry.',
        era: 'past',
    },
    {
        id: 3,
        title: 'Sachet-Parampara Live',
        date: 'Mar 15, 2026',
        time: '8:00 PM',
        venue: 'Main Stage',
        description:
            'Bollywood\'s hottest duo brings chart-topping hits live with full concert production.',
        era: 'present',
    },
    {
        id: 4,
        title: 'DJ Neon Pulse',
        date: 'Mar 15, 2026',
        time: '10:30 PM',
        venue: 'Electric Dome',
        description:
            'EDM, bass drops, and laser visuals — dance until dawn in an immersive sonic experience.',
        era: 'present',
    },
    {
        id: 5,
        title: 'Hackathon: Code the Future',
        date: 'Mar 16, 2026',
        time: '9:00 AM',
        venue: 'Innovation Lab',
        description:
            '24-hour hackathon where teams build solutions for tomorrow\'s cultural challenges.',
        era: 'future',
    },
    {
        id: 6,
        title: 'Holographic Art Installation',
        date: 'Mar 16, 2026',
        time: '6:00 PM',
        venue: 'Digital Gallery',
        description:
            'Walk through AI-generated holographic art that blends tradition with generative algorithms.',
        era: 'future',
    },
];

const eraStyles = {
    past: {
        accent: '#d4af37',
        bg: 'rgba(212, 175, 55, 0.08)',
        border: 'rgba(212, 175, 55, 0.2)',
        glow: 'rgba(212, 175, 55, 0.15)',
        label: 'Heritage',
    },
    present: {
        accent: '#dc2626',
        bg: 'rgba(220, 38, 38, 0.08)',
        border: 'rgba(220, 38, 38, 0.2)',
        glow: 'rgba(220, 38, 38, 0.15)',
        label: 'Now',
    },
    future: {
        accent: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.08)',
        border: 'rgba(168, 85, 247, 0.2)',
        glow: 'rgba(168, 85, 247, 0.15)',
        label: 'Tomorrow',
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
};

export default function EventsSection() {
    const featured = events.find((e) => e.featured);
    const timeline = events.filter((e) => !e.featured);

    return (
        <section
            data-section="events"
            className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
            style={{
                background:
                    'linear-gradient(180deg, #0d0521 0%, #0a0a0a 15%, #0a0a0a 100%)',
            }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
                <p className="text-amber-400/60 text-xs tracking-[0.3em] uppercase font-inter mb-4">
                    What Awaits
                </p>
                <h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #f5e6c8, #d4af37, #f5e6c8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Events
                </h2>
                <p className="text-white/40 text-base sm:text-lg font-inter">
                    Three days. Three eras. One unforgettable experience.
                </p>
            </motion.div>

            {/* Featured event spotlight */}
            {featured && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto mb-20 sm:mb-24"
                >
                    <div
                        className="relative rounded-2xl overflow-hidden group"
                        style={{
                            background: `linear-gradient(135deg, ${eraStyles[featured.era].bg}, rgba(255,255,255,0.02))`,
                            border: `1px solid ${eraStyles[featured.era].border}`,
                        }}
                    >
                        {/* Gradient banner */}
                        <div
                            className="h-48 sm:h-56 relative"
                            style={{
                                background:
                                    featured.era === 'past'
                                        ? 'linear-gradient(135deg, #3d2817, #1a1410, #3d2817)'
                                        : featured.era === 'present'
                                            ? 'linear-gradient(135deg, #dc2626, #7c3aed, #2563eb)'
                                            : 'linear-gradient(135deg, #1a0a2e, #4a1a5c, #1a0a2e)',
                            }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-7xl sm:text-8xl opacity-30">🎊</span>
                            </div>
                            <div
                                className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase font-inter"
                                style={{
                                    background: eraStyles[featured.era].accent,
                                    color: '#000',
                                }}
                            >
                                Featured
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="flex flex-wrap gap-4 mb-4 text-white/50 text-sm font-inter">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" /> {featured.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" /> {featured.time}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5" /> {featured.venue}
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-3">
                                {featured.title}
                            </h3>
                            <p className="text-white/50 font-inter leading-relaxed mb-6">
                                {featured.description}
                            </p>

                            <button
                                className="px-6 py-3 rounded-full font-inter font-bold text-sm transition-transform hover:scale-105 active:scale-95"
                                style={{
                                    background: eraStyles[featured.era].accent,
                                    color: '#000',
                                    boxShadow: `0 0 20px ${eraStyles[featured.era].glow}`,
                                }}
                            >
                                Reserve Your Spot
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
                {/* Vertical thread line */}
                <div
                    className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(212,175,55,0.4), rgba(220,38,38,0.4), rgba(168,85,247,0.4), transparent)',
                    }}
                />

                {timeline.map((event, index) => {
                    const style = eraStyles[event.era];
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={event.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className={`relative flex items-start mb-12 sm:mb-16 ${isLeft
                                ? 'sm:flex-row sm:pr-[52%]'
                                : 'sm:flex-row-reverse sm:pl-[52%]'
                                } pl-10 sm:pl-0`}
                        >
                            {/* Thread node */}
                            <div
                                className="absolute left-4 sm:left-1/2 top-2 w-3 h-3 rounded-full -translate-x-1/2 z-10"
                                style={{
                                    background: style.accent,
                                    boxShadow: `0 0 10px ${style.glow}, 0 0 20px ${style.glow}`,
                                }}
                            />

                            {/* Card */}
                            <div
                                className="relative w-full rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    background: style.bg,
                                    border: `1px solid ${style.border}`,
                                }}
                            >
                                {/* Era accent bar */}
                                <div
                                    className="absolute top-0 left-6 right-6 h-px"
                                    style={{ background: style.accent, opacity: 0.4 }}
                                />

                                <div className="flex items-center gap-2 mb-3">
                                    <span
                                        className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase font-inter"
                                        style={{
                                            background: `${style.accent}20`,
                                            color: style.accent,
                                        }}
                                    >
                                        {style.label}
                                    </span>
                                    <span className="text-white/30 text-xs font-inter">
                                        {event.date}
                                    </span>
                                </div>

                                <h4 className="text-lg sm:text-xl font-bold font-playfair text-white mb-2">
                                    {event.title}
                                </h4>
                                <p className="text-white/40 text-sm font-inter leading-relaxed mb-3">
                                    {event.description}
                                </p>

                                <div className="flex items-center gap-3 text-white/30 text-xs font-inter">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {event.time}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {event.venue}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
