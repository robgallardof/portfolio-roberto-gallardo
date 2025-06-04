'use client';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

/**
 * Wrapper component to provide i18n context to the app.
 */
export default function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
