import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const prevPos = useRef({ x: -100, y: -100 });
  const trail = useRef<{ x: number; y: number; age: number }[]>([]);
  const visible = useRef(false);
  const rafId = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const needle = needleRef.current;
    if (!canvas || !needle) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to viewport
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add current position to trail
    const { x, y } = mousePos.current;
    const dx = x - prevPos.current.x;
    const dy = y - prevPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 2 && visible.current) {
      trail.current.push({ x, y, age: 0 });
    }

    // Age and cull trail points
    trail.current = trail.current
      .map((p) => ({ ...p, age: p.age + 1 }))
      .filter((p) => p.age < 40);

    // Draw fading thread trail
    if (trail.current.length > 1) {
      for (let i = 1; i < trail.current.length; i++) {
        const p0 = trail.current[i - 1];
        const p1 = trail.current[i];
        const alpha = Math.max(0, 1 - p1.age / 40) * 0.6;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, (1 - p1.age / 40) * 2);
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    // Update needle position
    const angle = Math.atan2(dy, dx);
    needle.style.left = `${x}px`;
    needle.style.top = `${y}px`;
    needle.style.transform = `translate(-50%, -50%) rotate(${angle + Math.PI / 4}rad)`;
    needle.style.opacity = visible.current ? '1' : '0';

    prevPos.current = { x, y };
    rafId.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) visible.current = true;
    };

    const handleLeave = () => {
      visible.current = false;
    };

    const handleEnter = () => {
      visible.current = true;
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    rafId.current = requestAnimationFrame(draw);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [draw]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ mixBlendMode: 'screen' }}
      />
      <div
        ref={needleRef}
        className="fixed pointer-events-none z-[9999]"
        style={{ opacity: 0 }}
      >
        {/* Needle shape */}
        <div
          className="w-5 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, rgba(212,175,55,0.3), #fff, rgba(212,175,55,0.3))',
            boxShadow:
              '0 0 8px rgba(255,255,255,0.8), 0 0 20px rgba(212,175,55,0.5)',
          }}
        />
        {/* Glow halo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          }}
        />
      </div>
    </>
  );
}
