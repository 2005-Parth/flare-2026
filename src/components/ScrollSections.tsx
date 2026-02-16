import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StitchedHero from './StitchedHero';
import TimeWarpSlider from './TimeWarpSlider';
import EventsSection from './EventsSection';
import GallerySection from './GallerySection';
import TeamSection from './TeamSection';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

/* ── Floating particles for the Future section ── */
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 12,
        delay: Math.random() * 5,
        shape: Math.random() > 0.5 ? 'circle' : 'polygon',
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background:
              p.shape === 'circle'
                ? 'rgba(168, 85, 247, 0.4)'
                : 'rgba(6, 182, 212, 0.3)',
            boxShadow:
              p.shape === 'circle'
                ? '0 0 12px rgba(168,85,247,0.6)'
                : '0 0 12px rgba(6,182,212,0.5)',
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            transform: p.shape !== 'circle' ? 'rotate(45deg)' : undefined,
          }}
        />
      ))}
    </div>
  );
}

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        section1Ref.current,
        section2Ref.current,
        section3Ref.current,
      ];

      sections.forEach((section, index) => {
        if (!section) return;

        // Pin each section
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        // Content entrance animation
        const content = section.querySelector('[data-content]');
        if (content && index > 0) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 60, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* ══════════════════════════════════════════════
          SECTION 1 — THE ROOTS (Past)
          Gold & sepia, grain texture, heritage feel
         ══════════════════════════════════════════════ */}
      <section
        ref={section1Ref}
        data-section="past"
        className="relative h-screen w-full overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #1a1410 0%, #2a1c0e 30%, #3d2817 60%, #1a1410 100%)',
        }}
      >
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-20 animate-grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Warm ambient glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Ambient dust particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${10 + Math.random() * 80}%`,
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <div data-content className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <StitchedHero />
            <div className="mt-10">
              <p className="text-amber-400/50 text-xs sm:text-sm tracking-[0.3em] uppercase font-playfair">
                Echoes of Tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — THE PULSE (Present)
          Vibrant gradient mesh, red / electric blue
         ══════════════════════════════════════════════ */}
      <section
        ref={section2Ref}
        data-section="present"
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Animated gradient mesh */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              'linear-gradient(45deg, #dc2626 0%, #7c3aed 33%, #2563eb 66%, #dc2626 100%)',
            backgroundSize: '400% 400%',
          }}
        />

        {/* Radial light overlays */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 40%),
                              radial-gradient(circle at 80% 70%, rgba(6,182,212,0.15) 0%, transparent 40%)`,
          }}
        />

        {/* Edge glow (chromatic aberration feel) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.3), inset 0 0 60px rgba(6,182,212,0.1)',
          }}
        />

        <div data-content className="absolute inset-0 flex flex-col items-center justify-center">
          <TimeWarpSlider />
        </div>

        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center z-10">
          <p className="text-cyan-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase font-inter font-bold">
            Rhythm of Now
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — THE VISION (Future)
          Neon purple, holographic grid, particles
         ══════════════════════════════════════════════ */}
      <section
        ref={section3Ref}
        data-section="future"
        className="relative h-screen w-full overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0d0521 0%, #1a0a2e 30%, #2d1250 60%, #0d0521 100%)',
        }}
      >
        {/* Perspective grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(147,51,234,0.08) 1px, transparent 1px),
                              linear-gradient(0deg, rgba(147,51,234,0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'grid-flow 25s linear infinite',
            perspective: '500px',
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Center holographic glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.2) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)',
          }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        <div data-content className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider font-syncopate"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #a855f7 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 6s ease infinite',
              filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.4))',
            }}
          >
            BEYOND TOMORROW
          </h2>

          <p className="text-purple-300/70 text-base sm:text-lg md:text-xl font-inter max-w-2xl leading-relaxed">
            Where innovation meets imagination, and the future of culture unfolds
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">
            <button
              className="group relative px-8 py-4 rounded-full font-inter font-bold text-sm sm:text-base overflow-hidden transition-transform hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 0 30px rgba(168,85,247,0.4), 0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <span className="relative z-10 text-white">Join the Journey</span>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] animate-shimmer" />
            </button>

            <button
              className="px-8 py-4 rounded-full font-inter font-bold text-sm sm:text-base text-purple-300 transition-all hover:scale-105 active:scale-95"
              style={{
                border: '1px solid rgba(168,85,247,0.3)',
                background: 'rgba(168,85,247,0.05)',
              }}
            >
              Explore Events
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center">
          <p className="text-purple-400/60 text-xs sm:text-sm tracking-[0.3em] uppercase font-inter">
            The Vision
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTENT SECTIONS — Flow naturally (no pin)
         ══════════════════════════════════════════════ */}
      <EventsSection />
      <GallerySection />
      <TeamSection />
      <Footer />
    </div>
  );
}
