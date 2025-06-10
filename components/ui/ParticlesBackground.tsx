'use client';

import { JSX, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

/**
 * ParticlesBackground component.
 *
 * Clean and professional animated background with subtle geometric particles.
 * Optimized for tech/portfolio websites and theme-aware.
 *
 * @returns {JSX.Element | null}
 */
export default function ParticlesBackground(): JSX.Element | null {
  const [engineReady, setEngineReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === 'dark';

    return {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      particles: {
        number: {
          value: 30,
          density: { enable: true, area: 1000 },
        },
        color: {
          value: isDark ? '#00f2ff' : '#1f2937',
        },
        shape: {
          type: ['circle', 'edge', 'polygon'],
          options: {
            polygon: {
              sides: 5,
            },
          },
        },
        links: {
          enable: true,
          distance: 130,
          color: isDark ? '#00f2ff' : '#9ca3af',
          opacity: 0.15,
          width: 1,
        },
        opacity: {
          value: isDark ? 0.1 : 0.2,
          random: true,
        },
        size: {
          value: { min: 2, max: 4 },
          random: true,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: 'none',
          outModes: {
            default: 'out',
          },
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (!isMounted || !engineReady || !resolvedTheme) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      key={resolvedTheme}
      className="fixed inset-0 -z-10 pointer-events-none select-none"
    />
  );
}
