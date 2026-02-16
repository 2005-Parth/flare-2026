import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TimeWarpSlider() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(8, Math.min(92, pct)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Scale labels based on reveal
  const leftLabelScale = 1 + (position / 100) * 0.08;
  const rightLabelScale = 1 + ((100 - position) / 100) * 0.08;

  return (
    <div
      ref={containerRef}
      className="relative w-[90vw] max-w-5xl h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden select-none shadow-2xl"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ touchAction: 'none' }}
    >
      {/* ── RIGHT SIDE: The Present ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 animate-gradient" style={{ backgroundSize: '400% 400%' }}>
          {/* Chromatic aberration lines */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,255,255,0.15) 3px, rgba(0,255,255,0.15) 4px)',
          }} />
          {/* Glitch line */}
          <div className="absolute top-[30%] left-0 right-0 h-px bg-cyan-400/30" />
          <div className="absolute top-[70%] left-0 right-0 h-px bg-red-400/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <div className="text-center" style={{ transform: `scale(${rightLabelScale})`, transition: 'transform 0.15s ease-out' }}>
            {/* Concert placeholder */}
            <div className="mb-6 w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-xl overflow-hidden relative shadow-2xl border-2 border-cyan-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-shimmer" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl mb-2">🎸</div>
                  <p className="text-white/90 font-inter text-xs sm:text-sm font-bold tracking-wider uppercase">Rock Concert</p>
                </div>
              </div>
            </div>

            <h3
              className="font-inter text-3xl sm:text-4xl md:text-5xl text-white mb-2 tracking-tight font-bold"
              style={{
                textShadow: '0 0 30px rgba(6,182,212,0.5), 0 0 60px rgba(168,85,247,0.3)',
              }}
            >
              Euphoria
            </h3>
            <p className="text-cyan-200/80 text-base sm:text-lg font-inter">
              Sachet Parampara Concert
            </p>
          </div>
        </div>
      </div>

      {/* ── LEFT SIDE: The Past (clipped) ── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-700 to-yellow-600">
          {/* Film grain overlay */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 4px)',
          }} />
          {/* Sepia wash */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <div className="text-center" style={{ transform: `scale(${leftLabelScale})`, transition: 'transform 0.15s ease-out' }}>
            {/* Folk singer placeholder */}
            <div className="mb-6 w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-xl overflow-hidden relative shadow-2xl border-4 border-amber-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-900" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl mb-2">🎵</div>
                  <p className="text-white/80 font-playfair text-xs sm:text-sm italic">Folk Singer</p>
                </div>
              </div>
            </div>

            <h3
              className="font-playfair text-3xl sm:text-4xl md:text-5xl text-amber-100 mb-2 tracking-wide"
              style={{
                textShadow: '0 0 30px rgba(212,175,55,0.6)',
              }}
            >
              Heritage
            </h3>
            <p className="text-amber-200/80 text-base sm:text-lg font-playfair italic">
              Raj Gadhvi's Dayro
            </p>
          </div>
        </div>
      </div>

      {/* ── DRAG HANDLE (The Thread) ── */}
      <div
        className="absolute top-0 bottom-0 z-30"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          width: '48px',
          cursor: 'ew-resize',
        }}
        onPointerDown={handlePointerDown}
      >
        {/* Vertical glowing thread */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 rounded-full"
          style={{
            background: isDragging
              ? 'linear-gradient(180deg, #d4af37, #fff, #06b6d4, #fff, #d4af37)'
              : 'linear-gradient(180deg, transparent, rgba(255,255,255,0.8), transparent)',
            boxShadow: isDragging
              ? '0 0 12px rgba(255,255,255,0.9), 0 0 30px rgba(212,175,55,0.5)'
              : '0 0 6px rgba(255,255,255,0.4)',
            transition: 'box-shadow 0.3s ease',
          }}
        />

        {/* Center grip handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2"
          style={{
            background: isDragging
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(255, 255, 255, 0.9)',
            borderColor: isDragging ? '#d4af37' : 'rgba(255,255,255,0.6)',
            boxShadow: isDragging
              ? '0 0 20px rgba(212,175,55,0.8), 0 0 40px rgba(212,175,55,0.3)'
              : '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          <div className="flex gap-0.5">
            <div className="w-0.5 h-5 bg-gray-400 rounded-full" />
            <div className="w-0.5 h-5 bg-gray-400 rounded-full" />
          </div>
        </div>

        {/* Sparks when dragging */}
        <AnimatePresence>
          {isDragging && (
            <>
              {[20, 35, 50, 65, 80].map((top) => (
                <motion.div
                  key={top}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: top * 0.01,
                    ease: 'easeOut',
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full blur-[2px]"
                  style={{
                    top: `${top}%`,
                    background:
                      top < 50
                        ? 'radial-gradient(circle, #d4af37, transparent)'
                        : 'radial-gradient(circle, #06b6d4, transparent)',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ── LABELS ── */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
        <span className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase font-playfair"
          style={{
            background: 'rgba(212,175,55,0.2)',
            color: '#d4af37',
            border: '1px solid rgba(212,175,55,0.3)',
            opacity: position > 30 ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
          }}
        >
          The Past
        </span>
      </div>
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
        <span className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase font-inter"
          style={{
            background: 'rgba(6,182,212,0.15)',
            color: '#06b6d4',
            border: '1px solid rgba(6,182,212,0.3)',
            opacity: position < 70 ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
          }}
        >
          The Present
        </span>
      </div>
    </div>
  );
}
