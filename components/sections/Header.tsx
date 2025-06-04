import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

/**
 * Simple header with site title and language switcher.
 */
export default function Header(): JSX.Element {
  const { t, i18n } = useTranslation();
  const toggleLang = (): void => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang).catch(console.error);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
      <h1 className="font-semibold">{t('hero.name')}</h1>
      <Button variant="ghost" size="sm" onClick={toggleLang}>
        {i18n.language === 'en' ? 'ES' : 'EN'}
      </Button>
    </header>
  );
}
