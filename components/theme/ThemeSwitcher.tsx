"use client";

import { JSX, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuSunMedium, LuMoon } from "react-icons/lu";

/**
 * ThemeSwitcher component.
 *
 * Toggles between light and dark themes using next-themes.
 *
 * @returns {JSX.Element | null}
 */
export default function ThemeSwitcher(): JSX.Element | null {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-primary transition-colors duration-150 px-2 py-1 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      {resolvedTheme === "dark" ? (
        <LuSunMedium className="w-6 h-6 -translate-y-[1px]" />
      ) : (
        <LuMoon className="w-[1.35rem] h-[1.35rem] translate-y-[0.5px]" />
      )}
    </button>
  );
}