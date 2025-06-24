'use client';

import { Button } from '@/components/ui/button';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * Animation variants for the container (staggered children).
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

/**
 * Animation variants for individual items (heading, paragraph, button).
 */
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/**
 * ContactSection component.
 *
 * Renders a centered call-to-action section with animated heading,
 * description and a mailto contact button.
 *
 * Fully responsive and styled for modern UI/UX consistency.
 *
 * @returns {JSX.Element} The rendered Contact section.
 */
export default function ContactSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="w-full min-h-screen text-foreground flex flex-col items-center justify-center py-24 sm:py-32 md:py-40"
    >
      <motion.div
        className="w-full max-w-[60rem] px-6 sm:px-10 lg:px-20 text-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed font-poppins max-w-3xl mx-auto"
        >
          {t('contact.description')}
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="mailto:contact@robertogallardo.dev"
          className="inline-block"
          title="Send me an email"
        >
          <Button
            size="lg"
            className="px-6 py-2 rounded-full text-base font-semibold transition-transform duration-200 hover:scale-105"
          >
            {t('contact.button')}
          </Button>
        </motion.a>
      </motion.div>
    </section>
  );
}