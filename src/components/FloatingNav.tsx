import { Home, Calendar, Image, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const navItems = [
  { icon: Home, label: 'Home', sectionId: 'past' },
  { icon: Calendar, label: 'Events', sectionId: 'events' },
  { icon: Image, label: 'Gallery', sectionId: 'gallery' },
  { icon: Users, label: 'Team', sectionId: 'team' },
];

export default function FloatingNav() {
  const [activeId, setActiveId] = useState('past');

  const updateActive = useCallback(() => {
    const sections = document.querySelectorAll('[data-section]');
    const scrollY = window.scrollY + window.innerHeight * 0.4;

    let currentId = 'past';
    sections.forEach((section) => {
      const el = section as HTMLElement;
      if (el.offsetTop <= scrollY) {
        currentId = el.getAttribute('data-section') || currentId;
      }
    });
    setActiveId(currentId);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', updateActive);
  }, [updateActive]);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(`[data-section="${sectionId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-full border shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          boxShadow:
            '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {navItems.map((item, index) => {
          const isActive = activeId === item.sectionId;
          return (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group relative p-2.5 sm:p-3 rounded-full transition-all duration-300"
              style={{
                background: isActive
                  ? 'rgba(255, 255, 255, 0.12)'
                  : 'transparent',
              }}
              aria-label={item.label}
            >
              <item.icon
                className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                style={{
                  color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                }}
              />

              {/* Active glow dot */}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{
                    background: '#d4af37',
                    boxShadow: '0 0 8px rgba(212, 175, 55, 0.8)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
