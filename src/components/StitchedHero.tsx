import { motion, type Variants } from 'framer-motion';

export default function StitchedHero() {
  const text = 'FLARE 2026';
  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
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
    <div className="relative select-none">
      {/* Main title */}
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider"
        style={{
          fontFamily: "'Playfair Display', serif",
          perspective: '800px',
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block relative"
            style={{
              color: '#f5e6c8',
              textShadow:
                '0 0 30px rgba(212, 175, 55, 0.6), 0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}

            {/* Stitch mark above each letter */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.3 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2"
              width="12"
              height="8"
              viewBox="0 0 12 8"
            >
              <line
                x1="2"
                y1="6"
                x2="10"
                y2="2"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="4 3"
                style={{
                  animation: `stitch-draw 0.4s ${index * 0.1 + 0.8}s ease forwards`,
                }}
              />
            </motion.svg>

            {/* Bottom stitch connecting to next letter */}
            {index < letters.length - 1 && letter !== ' ' && letters[index + 1] !== ' ' && (
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.25 }}
                className="absolute -bottom-1 right-0 h-px origin-left"
                style={{
                  width: '120%',
                  background:
                    'linear-gradient(90deg, rgba(212,175,55,0.6), rgba(212,175,55,0.2))',
                }}
              />
            )}
          </motion.span>
        ))}
      </motion.h1>

      {/* Golden thread underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeInOut' }}
        className="mt-6 h-0.5 origin-left"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #d4af37 20%, #f5e6c8 50%, #d4af37 80%, transparent 100%)',
          boxShadow: '0 0 12px rgba(212,175,55,0.4)',
        }}
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-6 text-lg sm:text-xl md:text-2xl font-playfair italic"
        style={{ color: 'rgba(212, 175, 55, 0.7)' }}
      >
        Threads of Time
      </motion.p>

      {/* Scroll down cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        className="mt-16 flex flex-col items-center animate-scroll-cue"
      >
        <span className="text-amber-400/50 text-xs tracking-[0.3em] uppercase mb-2 font-inter">
          Scroll to explore
        </span>
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          className="text-amber-400/40"
        >
          <rect
            x="6"
            y="1"
            width="8"
            height="14"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <motion.circle
            cx="10"
            cy="7"
            r="1.5"
            fill="currentColor"
            animate={{ cy: [6, 10, 6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <path
            d="M6 19l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
