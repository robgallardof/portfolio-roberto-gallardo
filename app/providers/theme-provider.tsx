'use client'

import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

/**
 * AppThemeProvider
 *
 * Wraps the application with the `next-themes` provider to enable
 * system-aware and persistent dark/light mode toggling via the `class` attribute on <html>.
 *
 * @param children - The child components of the app.
 * @returns The wrapped children inside the theme context.
 */
export default function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  )
}