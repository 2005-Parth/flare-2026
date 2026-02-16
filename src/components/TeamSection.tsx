import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    gradient: string;
    initials: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Aarav Patel',
        role: 'Festival Director',
        department: 'Core',
        gradient: 'linear-gradient(135deg, #d4af37, #92400e)',
        initials: 'AP',
    },
    {
        id: 2,
        name: 'Meera Shah',
        role: 'Creative Lead',
        department: 'Design',
        gradient: 'linear-gradient(135deg, #e11d48, #f97316)',
        initials: 'MS',
    },
    {
        id: 3,
        name: 'Rohan Desai',
        role: 'Tech Head',
        department: 'Tech',
        gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
        initials: 'RD',
    },
    {
        id: 4,
        name: 'Priya Joshi',
        role: 'Marketing Lead',
        department: 'Marketing',
        gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
        initials: 'PJ',
    },
    {
        id: 5,
        name: 'Karan Mehta',
        role: 'Events Coordinator',
        department: 'Events',
        gradient: 'linear-gradient(135deg, #dc2626, #7c3aed)',
        initials: 'KM',
    },
    {
        id: 6,
        name: 'Ananya Nair',
        role: 'PR & Outreach',
        department: 'PR',
        gradient: 'linear-gradient(135deg, #0d9488, #2563eb)',
        initials: 'AN',
    },
    {
        id: 7,
        name: 'Dev Sharma',
        role: 'Stage Manager',
        department: 'Events',
        gradient: 'linear-gradient(135deg, #f59e0b, #d4af37)',
        initials: 'DS',
    },
    {
        id: 8,
        name: 'Ishita Verma',
        role: 'Sponsorship Lead',
        department: 'Marketing',
        gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
        initials: 'IV',
    },
];

const deptColors: Record<string, string> = {
    Core: '#d4af37',
    Design: '#e11d48',
    Tech: '#2563eb',
    Marketing: '#a855f7',
    Events: '#dc2626',
    PR: '#0d9488',
};

export default function TeamSection() {
    return (
        <section
            data-section="team"
            className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
            style={{
                background:
                    'linear-gradient(180deg, #0a0a0a 0%, #0d0521 80%, #0d0521 100%)',
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
                <p className="text-cyan-400/60 text-xs tracking-[0.3em] uppercase font-inter mb-4">
                    The People Behind the Thread
                </p>
                <h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #f5e6c8, #d4af37)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Meet the Weavers
                </h2>
                <p className="text-white/40 text-base sm:text-lg font-inter">
                    The crew that stitches it all together
                </p>
            </motion.div>

            {/* Team grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        className="group"
                    >
                        <div
                            className="relative rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 group-hover:-translate-y-2"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                boxShadow: 'none',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.boxShadow =
                                    '0 12px 40px rgba(0,0,0,0.4)';
                                (e.currentTarget as HTMLElement).style.borderColor =
                                    'rgba(255,255,255,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                (e.currentTarget as HTMLElement).style.borderColor =
                                    'rgba(255,255,255,0.06)';
                            }}
                        >
                            {/* Avatar circle */}
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                                <div
                                    className="w-full h-full rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold font-inter text-white transition-shadow duration-300"
                                    style={{
                                        background: member.gradient,
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    {member.initials}
                                </div>
                                {/* Glow ring on hover */}
                                <div
                                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                    style={{
                                        background: member.gradient,
                                        filter: 'blur(8px)',
                                        opacity: undefined, // controlled by group-hover
                                    }}
                                />
                            </div>

                            {/* Name & role */}
                            <h4 className="text-sm sm:text-base font-bold font-inter text-white mb-1">
                                {member.name}
                            </h4>
                            <p className="text-white/40 text-xs sm:text-sm font-inter mb-3">
                                {member.role}
                            </p>

                            {/* Department badge */}
                            <span
                                className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase font-inter mb-4"
                                style={{
                                    background: `${deptColors[member.department]}15`,
                                    color: deptColors[member.department],
                                    border: `1px solid ${deptColors[member.department]}30`,
                                }}
                            >
                                {member.department}
                            </span>

                            {/* Social icons */}
                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {[Linkedin, Github, Mail].map((Icon, i) => (
                                    <button
                                        key={i}
                                        className="p-1.5 rounded-full transition-colors hover:bg-white/10"
                                        aria-label={Icon.displayName || 'social'}
                                    >
                                        <Icon className="w-3.5 h-3.5 text-white/50 hover:text-white/80" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mt-16 sm:mt-20"
            >
                <p className="text-white/30 text-sm font-inter mb-6">
                    Want to be part of the thread?
                </p>
                <button
                    className="px-8 py-4 rounded-full font-inter font-bold text-sm transition-all hover:scale-105 active:scale-95"
                    style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#d4af37',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)',
                    }}
                >
                    Join the Team
                </button>

                {/* Footer branding */}
                <div className="mt-20 sm:mt-28 pb-20">
                    <p className="text-white/10 text-xs font-inter tracking-widest uppercase">
                        Flare 2026 — Threads of Time
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
