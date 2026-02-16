import { motion } from 'framer-motion';

export default function StitchedHero() {
  const text = 'FLARE 2026';
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block relative"
            style={{
              textShadow: '0 0 30px rgba(255, 215, 0, 0.6)',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.12 + 0.5, duration: 0.3 }}
              className="absolute -top-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left"
            />
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeInOut' }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent origin-left"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-6 text-xl md:text-2xl text-amber-200/80 font-serif italic"
      >
        Threads of Time
      </motion.p>
    </div>
  );
}
