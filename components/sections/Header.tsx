'use client';

import { useTranslation } from 'react-i18next';
import { JSX } from 'react';
import LanguageToggle from '../lang/LanguageToggle';
import ThemeSwitcher from '../theme/ThemeSwitcher';

/**
 * Site header with language toggle and theme switcher.
 *
 * @returns {JSX.Element} The header component.
 */
export default function Header(): JSX.Element {
  const { t } = useTranslation();

  return (
    <header
      className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md px-6 py-4 flex items-center justify-end"
      aria-label={t('header.label')}
    >
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <LanguageToggle />
      </div>
    </header>
  );
}