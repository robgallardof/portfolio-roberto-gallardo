"use client";

import { JSX, useMemo } from "react";
import { useTheme } from "next-themes";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

/** Registers every tsParticles feature once; must stay stable for ParticlesProvider. */
const initEngine = async (engine: Engine): Promise<void> => {
  await loadFull(engine);
};

/**
 * ParticlesBackground component.
 *
 * Animated background with geometric particles.
 * Automatically adapts to light/dark theme.
 *
 * @returns {JSX.Element | null} The particle background element or null if not ready.
 */
export default function ParticlesBackground(): JSX.Element | null {
  const { resolvedTheme } = useTheme();

  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === "dark";

    return {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      particles: {
        number: {
          value: 45,
          density: { enable: true, area: 1000 },
        },
        color: {
          value: isDark ? "#00f2ff" : "#334155", 
        },
        shape: {
          type: ["circle", "polygon", "edge"],
          options: {
            polygon: { sides: 6 },
          },
        },
        links: {
          enable: true,
          distance: 120,
          color: isDark ? "#00f2ff" : "#64748b", 
          opacity: 0.25,
          width: 1,
        },
        opacity: {
          value: 0.4,
          random: false,
        },
        size: {
          value: { min: 2.5, max: 4.5 },
          random: true,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          outModes: { default: "out" },
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  // resolvedTheme is undefined on the server; the provider renders nothing until the engine is loaded.
  if (!resolvedTheme) return null;

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="tsparticles"
        options={options}
        key={resolvedTheme}
        className="fixed inset-0 -z-10 pointer-events-none select-none"
      />
    </ParticlesProvider>
  );
}
