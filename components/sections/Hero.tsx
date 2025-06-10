'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { JSX } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 22,
      delay: 0.1,
    },
  },
};

/**
 * Hero component.
 *
 * This component renders the main introduction section, including:
 * - Greeting
 * - Animated name and roles
 * - Avatar
 * - Experience summary
 * - Social/contact links
 *
 * Smooth animations are applied using Framer Motion.
 *
 * @returns {JSX.Element} The Hero section component.
 */
export default function Hero(): JSX.Element {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - Number(t('hero.startingYear'));
  const formattedYears = yearsOfExperience.toString().padStart(2, '0');
  const email = t('hero.links.email');

  return (
    <section
      id="hero"
      className="relative z-10 w-full bg-transparent text-foreground min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16"
    >
      <motion.div
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* === Left Column: Text Content === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-lg font-medium text-muted-foreground"
          >
            {t('hero.greeting')}
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins leading-tight"
          >
            {t('hero.name')}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-muted-foreground text-base sm:text-lg font-poppins"
          >
            <TypeAnimation
              sequence={(t('hero.roles', { returnObjects: true }) as string[]).flatMap(
                (role) => [role, 2000]
              )}
              speed={40}
              repeat={Infinity}
              wrapper="span"
              className="inline-block"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed font-poppins"
          >
            {t('about.descriptionShort')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
          >
            <span className="text-3xl font-bold text-primary">{formattedYears}</span>
            <span className="uppercase text-xs leading-tight">
              {t('experience.years')}
              <br />
              {t('experience.experience')}
            </span>
          </motion.div>
        </div>

        {/* === Right Column: Avatar & CV Button === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
          <motion.div
            variants={avatarVariants}
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-[6px] border-muted shadow-xl overflow-hidden bg-white transition-transform hover:scale-105 duration-200 ease-out"
          >
            <img
              src="https://i.imgur.com/zrNPkxk.jpeg"
              alt={t('hero.avatarAlt')}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="https://cv.robertogallardo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-background text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <FaDownload className="text-background group-hover:-translate-y-0.5 transition-transform duration-150" />
            <span>Download CV</span>
          </motion.a>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground text-center">
              {t('hero.contactInstruction')}
            </p>

            <div className="flex items-center gap-6">
              {[
                {
                  href: t('hero.links.linkedin'),
                  icon: FaLinkedin,
                  label: 'LinkedIn',
                },
                {
                  href: t('hero.links.github'),
                  icon: FaGithub,
                  label: 'GitHub',
                },
                { href: `mailto:${email}`, icon: FaEnvelope, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}