import { Home, Calendar, Image, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Calendar, label: 'Events' },
  { icon: Image, label: 'Gallery' },
  { icon: Users, label: 'Team' },
];

export default function FloatingNav() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="group relative p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
