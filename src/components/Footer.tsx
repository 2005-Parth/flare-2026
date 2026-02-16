import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone, Heart, ExternalLink } from 'lucide-react';

const quickLinks = [
    { label: 'Home', sectionId: 'past' },
    { label: 'Events', sectionId: 'events' },
    { label: 'Gallery', sectionId: 'gallery' },
    { label: 'Team', sectionId: 'team' },
];

const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter / X', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
];

const sponsors = [
    { name: 'TechCorp', tier: 'Title Sponsor' },
    { name: 'InnovateLabs', tier: 'Gold Sponsor' },
    { name: 'CreativeMinds', tier: 'Gold Sponsor' },
    { name: 'FutureWave', tier: 'Silver Sponsor' },
    { name: 'DigitalArts Co.', tier: 'Silver Sponsor' },
    { name: 'EventPro', tier: 'Silver Sponsor' },
];

function scrollTo(sectionId: string) {
    const el = document.querySelector(`[data-section="${sectionId}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer data-section="footer" className="relative bg-[#060608] overflow-hidden">
            {/* Subtle top glow */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background:
                        'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.5) 50%, transparent 100%)',
                }}
            />
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)',
                }}
            />

            {/* ── Sponsors Section ── */}
            <div className="relative border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                    <p className="text-xs tracking-[0.35em] uppercase text-purple-400/60 font-inter mb-2">
                        Proudly Supported By
                    </p>
                    <h3
                        className="text-2xl sm:text-3xl font-bold mb-12 font-playfair"
                        style={{
                            background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Our Sponsors
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {sponsors.map((s) => (
                            <div
                                key={s.name}
                                className="group relative rounded-xl p-5 border transition-all duration-300 hover:scale-[1.04]"
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    borderColor: 'rgba(255,255,255,0.06)',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor =
                                        'rgba(168,85,247,0.3)';
                                    (e.currentTarget as HTMLElement).style.background =
                                        'rgba(168,85,247,0.04)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor =
                                        'rgba(255,255,255,0.06)';
                                    (e.currentTarget as HTMLElement).style.background =
                                        'rgba(255,255,255,0.02)';
                                }}
                            >
                                {/* Placeholder logo area */}
                                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/5 flex items-center justify-center">
                                    <span className="text-white/30 text-xl font-bold font-playfair">
                                        {s.name.charAt(0)}
                                    </span>
                                </div>
                                <p className="text-white/80 text-sm font-inter font-medium leading-tight">
                                    {s.name}
                                </p>
                                <p className="text-purple-400/50 text-[10px] tracking-wider uppercase mt-1 font-inter">
                                    {s.tier}
                                </p>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-10 text-purple-400/70 text-xs tracking-widest uppercase font-inter hover:text-purple-300 transition-colors"
                    >
                        Become a Sponsor <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* ── Main Footer Content ── */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Column 1 — Committee Info */}
                    <div>
                        <h4
                            className="text-lg font-bold mb-1 font-playfair"
                            style={{
                                background: 'linear-gradient(135deg, #d4af37, #f5d76e)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Social &amp; Cultural Committee
                        </h4>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-5 font-inter">
                            YATRI — College Name
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed font-inter max-w-xs">
                            Celebrating the tapestry of art, music, dance, and drama that
                            weaves our campus community together since 20XX.
                        </p>

                        <div className="flex items-center gap-3 mt-6">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="group p-2.5 rounded-full border transition-all duration-300 hover:scale-110"
                                    style={{
                                        borderColor: 'rgba(255,255,255,0.08)',
                                        background: 'rgba(255,255,255,0.03)',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor =
                                            'rgba(168,85,247,0.5)';
                                        (e.currentTarget as HTMLElement).style.background =
                                            'rgba(168,85,247,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor =
                                            'rgba(255,255,255,0.08)';
                                        (e.currentTarget as HTMLElement).style.background =
                                            'rgba(255,255,255,0.03)';
                                    }}
                                >
                                    <s.icon className="w-4 h-4 text-white/50 group-hover:text-purple-400 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white/70 mb-5 font-inter">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.sectionId)}
                                        className="text-white/40 text-sm font-inter hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Contact */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white/70 mb-5 font-inter">
                            Contact us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-purple-400/60 mt-0.5 flex-shrink-0" />
                                <span className="text-white/40 text-sm font-inter leading-relaxed">
                                    College Campus, City,<br />
                                    State — PIN
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-purple-400/60 flex-shrink-0" />
                                <a
                                    href="mailto:flare@college.edu"
                                    className="text-white/40 text-sm font-inter hover:text-purple-400 transition-colors"
                                >
                                    flare@college.edu
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-purple-400/60 flex-shrink-0" />
                                <a
                                    href="tel:+910000000000"
                                    className="text-white/40 text-sm font-inter hover:text-purple-400 transition-colors"
                                >
                                    +91 00000 00000
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/25 text-xs font-inter">
                        © {new Date().getFullYear()} Flare 2026 — Social &amp; Cultural Committee. All rights reserved.
                    </p>
                    <p className="text-white/20 text-[11px] font-inter flex items-center gap-1">
                        Crafted with <Heart className="w-3 h-3 text-red-500/60 inline" /> by YATRI
                    </p>
                </div>
            </div>
        </footer>
    );
}
