'use client';

import { useEffect, useState, JSX } from 'react';
import Cookies from 'js-cookie';
import i18n from '@/app/i18n';

type Locale = 'en' | 'es';

/**
 * LanguageToggle component.
 *
 * Renders a responsive language switcher between English and Spanish.
 * Syncs with i18n and persists preference using cookies.
 *
 * @returns {JSX.Element | null} The rendered toggle button.
 */
export default function LanguageToggle(): JSX.Element | null {
  const [locale, setLocale] = useState<Locale | null>(null);

  const isValidLocale = (value: unknown): value is Locale =>
    value === 'en' || value === 'es';

  useEffect(() => {
    const cookieLang = Cookies.get('language');
    let lang: Locale = 'en';

    if (isValidLocale(cookieLang)) {
      lang = cookieLang;
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (isValidLocale(browserLang)) {
        lang = browserLang;
      }
    }

    i18n.changeLanguage(lang);
    Cookies.set('language', lang, { expires: 365 });
    setLocale(lang);
  }, []);

  const toggleLanguage = (): void => {
    const nextLang: Locale = locale === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
    Cookies.set('language', nextLang, { expires: 365 });
    setLocale(nextLang);
  };

  if (!locale) return null;

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="
        inline-flex items-center justify-center
        rounded-md bg-transparent
        font-semibold uppercase tracking-wide
        h-8 sm:h-9 md:h-10
        min-w-[2rem] sm:min-w-[2.25rem] md:min-w-[2.5rem]
        text-xs sm:text-sm md:text-base
        text-muted-foreground hover:text-primary
        transition-colors duration-200
        focus:outline-none focus-visible:ring-1 focus-visible:ring-ring
      "
    >
      {locale.toUpperCase()}
    </button>
  );
}