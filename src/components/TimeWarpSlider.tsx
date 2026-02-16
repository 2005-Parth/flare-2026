import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function TimeWarpSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const sliderPosition = useMotionValue(50);
  const leftScale = useTransform(sliderPosition, [0, 100], [1.05, 1]);
  const rightScale = useTransform(sliderPosition, [0, 100], [1, 1.05]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <motion.div
          className="relative h-1/2 md:h-full overflow-hidden"
          style={{ width: `${sliderPosition.get()}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-700 to-yellow-600">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)`,
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.div style={{ scale: leftScale }} className="text-center">
              <div className="mb-8 w-64 h-64 mx-auto bg-gradient-to-br from-amber-600 to-amber-900 rounded-lg shadow-2xl flex items-center justify-center border-4 border-amber-400/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎵</div>
                  <p className="text-white/80 font-serif text-sm">Folk Singer</p>
                </div>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-amber-100 mb-2 tracking-wide">
                Heritage
              </h3>
              <p className="text-amber-200/80 text-xl font-serif italic">
                Raj Gadhvi's Dayro
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-1/2 md:h-full overflow-hidden flex-1"
          style={{ width: `${100 - sliderPosition.get()}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 animate-gradient">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.div style={{ scale: rightScale }} className="text-center">
              <div className="mb-8 w-64 h-64 mx-auto bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-lg shadow-2xl flex items-center justify-center border-4 border-cyan-400/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-shimmer" />
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">🎸</div>
                  <p className="text-white/90 font-sans text-sm font-bold">
                    Rock Concert
                  </p>
                </div>
              </div>
              <h3 className="font-sans text-4xl md:text-5xl text-white mb-2 tracking-tight font-bold">
                Euphoria
              </h3>
              <p className="text-cyan-200 text-xl font-sans">
                Sachet Parampara Concert
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={(_, info) => {
          const container = document.querySelector('.time-warp-container');
          if (!container) return;
          const rect = container.getBoundingClientRect();
          const percentage = ((info.point.x - rect.left) / rect.width) * 100;
          sliderPosition.set(Math.max(10, Math.min(90, percentage)));
        }}
        className="time-warp-container absolute top-0 bottom-0 left-1/2 z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition.get()}%` }}
      >
        <div className="absolute top-0 bottom-0 -left-1 w-2 bg-gradient-to-b from-transparent via-white to-transparent">
          <motion.div
            animate={{
              boxShadow: isDragging
                ? [
                    '0 0 20px rgba(255,255,255,0.8)',
                    '0 0 40px rgba(255,255,255,1)',
                    '0 0 20px rgba(255,255,255,0.8)',
                  ]
                : '0 0 10px rgba(255,255,255,0.5)',
            }}
            transition={{ duration: 0.5, repeat: isDragging ? Infinity : 0 }}
            className="absolute inset-0 bg-white rounded-full"
          />
          {isDragging && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full blur-sm"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                className="absolute top-3/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full blur-sm"
              />
            </>
          )}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-gray-400 rounded-full" />
            <div className="w-0.5 h-6 bg-gray-400 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
