'use client';

import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/**
 * Footer component.
 *
 * Renders a responsive footer section with copyright message
 * and animated social media links.
 *
 * Fully responsive with accessible labels and clean layout.
 *
 * @returns {JSX.Element} The rendered footer.
 */
export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background text-foreground px-6 py-10 border-t border-border">
      <div className="w-full max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-sm gap-6 sm:gap-4">
        {/* Left spacer on desktop */}
        <div className="hidden md:block" />

        {/* Center: copyright message */}
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} Roberto Gallardo — {t('footer.rights')}
          </p>
        </div>

        {/* Right: social media icons */}
        <div className="flex justify-center md:justify-end gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/robgallardof"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label={t('ariaLabels.github')}
            className="flex items-center gap-2 hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <FaGithub className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/lrobertogallardo"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label={t('ariaLabels.linkedin')}
            className="flex items-center gap-2 hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:contact@robertogallardo.dev"
            title="Email"
            aria-label={t('ariaLabels.email')}
            className="flex items-center gap-2 hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <FaEnvelope className="w-5 h-5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}