'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useMemo } from 'react';

const PARTICLE_COUNT = 12;

export default function ParticleBackground() {
  const { theme } = useTheme();

  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      width: ((i * 7 + 3) % 5) + 2,
      height: ((i * 11 + 5) % 5) + 2,
      left: ((i * 23 + 7) % 100),
      top: ((i * 37 + 13) % 100),
      delay: ((i * 13 + 3) % 8),
      duration: ((i * 17 + 5) % 6) + 6,
    })),
  []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {theme === 'dark' ? (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-500/10 rounded-full blur-3xl float-animation" />
          <div className="absolute top-60 right-20 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl float-animation-delayed" />
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-cyan-glow/5 rounded-full blur-3xl float-animation" />
          {particles.map(p => (
            <div
              key={p.id}
              className="particle bg-neon-400/40"
              style={{
                width: `${p.width}px`,
                height: `${p.height}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </>
      ) : (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl float-animation" />
          <div className="absolute top-60 right-20 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl float-animation-delayed" />
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl float-animation" />
        </>
      )}
    </div>
  );
}
