'use client';

import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/**
 * Footer component.
 *
 * Displays a centered copyright message and right-aligned
 * social media icons with responsive layout and clean design.
 *
 * @returns {JSX.Element} The rendered footer.
 */
export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background text-foreground px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-sm gap-4">
        {/* Left placeholder (empty for spacing on desktop) */}
        <div className="hidden md:block" />

        {/* Center: copyright */}
        <div className="text-center"> {/* This ensures it's always centered */}
          <p className="text-muted-foreground">
            © {currentYear} Roberto Gallardo — {t('footer.rights')}
          </p>
        </div>

        {/* Right: social icons */}
        <div className="flex justify-center md:justify-end gap-6 mt-4 md:mt-0"> {/* justify-end pushes to right */}
          <a
            href="https://github.com/robgallardof"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-transform duration-200 hover:scale-110"
            aria-label={t('ariaLabels.github')}
          >
            <FaGithub className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/lrobertogallardo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-transform duration-200 hover:scale-110"
            aria-label={t('ariaLabels.linkedin')}
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:contact@robertogallardo.dev"
            className="flex items-center gap-2 hover:text-primary transition-transform duration-200 hover:scale-110"
            aria-label={t('ariaLabels.email')}
          >
            <FaEnvelope className="w-5 h-5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}