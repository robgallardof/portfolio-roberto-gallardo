"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { JSX } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Motion container variants for staggered entrance.
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/**
 * Motion variants for items inside the container.
 */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * Motion variants for the avatar.
 */
const avatarVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 18,
      delay: 0.1,
    },
  },
};

/**
 * Hero section of the portfolio.
 *
 * This section includes:
 * - Animated heading and dynamic role text
 * - Avatar with hover zoom
 * - Years of experience
 * - CV download button
 * - Social links
 *
 * Fully responsive and animated.
 *
 * @returns {JSX.Element} Hero section
 */
export default function Hero(): JSX.Element {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const startingYear = Number(t("hero.startingYear"));
  const formattedYears = (currentYear - startingYear)
    .toString()
    .padStart(2, "0");
  const email = t("hero.links.email");

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-24 sm:py-32 bg-transparent text-foreground"
    >
      <motion.div
        className="w-full max-w-[100rem] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-16 sm:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* === Text Column === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 font-poppins">
          <motion.h2
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground"
          >
            {t("hero.greeting")}
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            {t("hero.name")}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-muted-foreground text-base sm:text-lg"
          >
            <TypeAnimation
              sequence={(
                t("hero.roles", { returnObjects: true }) as string[]
              ).flatMap((r) => [r, 2500])}
              speed={40}
              repeat={Infinity}
              wrapper="span"
              className="inline-block"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed text-justify"
          >
            {t("about.shortDescription")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-sm font-medium text-muted-foreground mt-2"
          >
            <span className="text-3xl sm:text-4xl font-bold text-primary">
              {formattedYears}
            </span>
            <span className="uppercase text-xs sm:text-sm leading-tight">
              {t("experience.years")} <br /> {t("experience.experience")}
            </span>
          </motion.div>
        </div>

        {/* === Avatar + Actions Column === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
          <motion.div
            variants={avatarVariants}
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72 rounded-full border-[6px] border-muted shadow-xl overflow-hidden bg-white transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://i.imgur.com/zrNPkxk.jpeg"
              alt={t("hero.avatarAlt")}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="https://cv.robertogallardo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-background text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaDownload className="text-background group-hover:-translate-y-1 transition-transform duration-200" />
            <span>Download CV</span>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-sm text-muted-foreground text-center">
              {t("hero.contactInstruction")}
            </p>
            <div className="flex items-center gap-6">
              {[
                {
                  href: t("hero.links.linkedin"),
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: t("hero.links.github"),
                  icon: FaGithub,
                  label: "GitHub",
                },
                {
                  href: `mailto:${email}`,
                  icon: FaEnvelope,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110"
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
