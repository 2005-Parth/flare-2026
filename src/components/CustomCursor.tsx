import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });

      setTrail((prev) => {
        const newTrail = [...prev, { x, y, id: trailId++ }];
        return newTrail.slice(-15);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index / trail.length) * 0.5,
            filter: `blur(${(1 - index / trail.length) * 2}px)`,
          }}
        />
      ))}

      <div
        className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 animate-pulse" />
      </div>
    </div>
  );
}
