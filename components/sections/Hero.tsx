import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

/**
 * Hero section with avatar and title.
 * Displays developer name and animated roles.
 */
export default function Hero(): JSX.Element {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true }) as string[];
  const sequence = roles.flatMap((role) => [role, 2000]);
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 text-center space-y-4 bg-gradient-to-b from-background to-muted/50">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="/avatar.jpg"
        alt={t('hero.name')}
        className="w-28 h-28 rounded-full border shadow-sm"
      />

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
      >
        {t('hero.name')}
      </motion.h1>

      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        className="block text-muted-foreground text-base font-mono"
        repeat={Infinity}
      />

      <p className="text-sm text-muted-foreground">{t('hero.location')}</p>
    </section>
  );
}
