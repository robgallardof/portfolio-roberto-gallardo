import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import { I18nextProviderWrapper } from './providers/i18n-provider';
import LanguageGate from '@/components/ui/LanguageGate';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import AppThemeProvider from './providers/theme-provider';

// Load fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata definition
export const metadata: Metadata = {
  title: {
    default: 'Roberto Gallardo – Full Stack .NET Developer',
    template: '%s | Roberto Gallardo',
  },
  description:
    "I'm Roberto Gallardo, a Full Stack .NET Developer specializing in software architecture, clean code, and modern web development with Next.js and Azure.",
  keywords: [
    'Roberto Gallardo',
    'Full Stack Developer',
    '.NET',
    'Software Architect',
    'Next.js',
    'Azure',
    'MongoDB',
    'Clean Code',
    'Portfolio',
  ],
  metadataBase: new URL('https://robertogallardo.mx'),
  openGraph: {
    title: 'Roberto Gallardo – Full Stack .NET Developer',
    description:
      'Explore the professional portfolio of Roberto Gallardo. Clean architecture. Modern development. Scalable solutions.',
    url: 'https://lrobertogallardo.mx',
    siteName: 'Roberto Gallardo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://lrobertogallardo.mx/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roberto Gallardo – Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roberto Gallardo – Full Stack .NET Developer',
    description:
      'Clean code, modern architecture, and full stack web development expertise using .NET, Next.js, and Azure.',
    creator: '@robgallardof',
    images: ['https://lrobertogallardo.mx/og-image.png'],
  },
  themeColor: '#000000',
};

/**
 * Root layout that applies global styles, fonts, theme context,
 * animated background, and wraps the app with i18n providers.
 *
 * @param children - React children components
 * @returns Root layout wrapper
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const lang = (await cookieStore).get('language')?.value || 'en';

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppThemeProvider>
          <ParticlesBackground />
          <I18nextProviderWrapper lang={lang}>
            <LanguageGate>{children}</LanguageGate>
          </I18nextProviderWrapper>
        </AppThemeProvider>
      </body>
    </html>
  );
}