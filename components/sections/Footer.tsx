/**
 * Simple footer displayed at the end of the page.
 */
import { useTranslation } from 'react-i18next';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="text-center py-6 text-xs text-muted-foreground">
      {t('footer', { year: new Date().getFullYear() })}
    </footer>
  );
}
