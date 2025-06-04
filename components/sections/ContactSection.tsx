import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

/**
 * Section with contact information and call to action button.
 */
export default function ContactSection(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-24 text-center">
      <h2 className="text-2xl font-semibold mb-2">{t('contact.title')}</h2>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-pretty">
        {t('contact.description')}
      </p>
      <a href="mailto:contact@lrobertogallardo.mx">
        <Button size="lg" className="px-6 rounded-full">
          {t('contact.button')}
        </Button>
      </a>
    </section>
  );
}
