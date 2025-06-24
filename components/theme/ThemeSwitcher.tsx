'use client';

import { JSX, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LuSunMedium, LuMoon } from 'react-icons/lu';

/**
 * ThemeSwitcher component.
 *
 * Toggles between light and dark themes using next-themes.
 * Matches size, responsiveness, and style with LanguageToggle.
 *
 * @returns {JSX.Element | null} The rendered theme toggle button.
 */
export default function ThemeSwitcher(): JSX.Element | null {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        inline-flex items-center justify-center
        rounded-md bg-transparent
        h-8 sm:h-9 md:h-10
        min-w-[2rem] sm:min-w-[2.25rem] md:min-w-[2.5rem]
        text-muted-foreground hover:text-primary
        transition-colors duration-200
        focus:outline-none focus-visible:ring-1 focus-visible:ring-ring
      "
    >
      {resolvedTheme === 'dark' ? (
        <LuSunMedium className="w-[1.25rem] sm:w-[1.35rem] h-[1.25rem] sm:h-[1.35rem]" />
      ) : (
        <LuMoon className="w-[1.25rem] sm:w-[1.35rem] h-[1.25rem] sm:h-[1.35rem]" />
      )}
    </button>
  );
}