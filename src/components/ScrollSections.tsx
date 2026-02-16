import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StitchedHero from './StitchedHero';
import TimeWarpSlider from './TimeWarpSlider';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [section1Ref.current, section2Ref.current, section3Ref.current];

      sections.forEach((section, index) => {
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        });

        if (index < sections.length - 1) {
          const nextSection = sections[index + 1];
          if (nextSection) {
            gsap.fromTo(
              nextSection,
              { opacity: 0, y: 100 },
              {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger: section,
                  start: 'top top',
                  end: 'bottom top',
                  scrub: 1,
                },
              }
            );
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <section
        ref={section1Ref}
        className="relative h-screen w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1410 0%, #3d2817 50%, #1a1410 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'grain 8s steps(10) infinite',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <StitchedHero />
            <div className="mt-16">
              <p className="text-amber-400/60 text-sm tracking-[0.3em] uppercase font-serif">
                Echoes of Tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={section2Ref}
        className="relative h-screen w-full overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(45deg, #dc2626 0%, #7c3aed 50%, #2563eb 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <TimeWarpSlider />
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
          <p className="text-cyan-300 text-sm tracking-[0.3em] uppercase font-sans font-bold">
            Rhythm of Now
          </p>
        </div>
      </section>

      <section
        ref={section3Ref}
        className="relative h-screen w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0a2e 0%, #4a1a5c 50%, #1a0a2e 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px),
                              linear-gradient(0deg, rgba(147,51,234,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-flow 20s linear infinite',
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: '0 0 20px rgba(147,51,234,0.6)',
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-6xl md:text-8xl font-bold mb-8 tracking-wider"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 60px rgba(168,85,247,0.5)',
            }}
          >
            Beyond Tomorrow
          </h2>
          <p className="text-purple-300/80 text-xl md:text-2xl font-sans max-w-2xl">
            Where innovation meets imagination, and the future of culture unfolds
          </p>
          <div className="mt-12 flex gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-sans font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Join the Journey
            </button>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
          <p className="text-purple-400 text-sm tracking-[0.3em] uppercase font-sans">
            The Vision
          </p>
        </div>
      </section>
    </div>
  );
}
