"use client";

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const iconHover = {
  whileHover: { scale: 1.08, rotate: 1 },
  whileTap: { scale: 0.94 },
};

/**
 * ExperienceSection component.
 *
 * Renders a two-column animated timeline section:
 * - Left side shows professional experience
 * - Right side shows academic education
 * Includes framer-motion animations and icon interactivity.
 *
 * @returns {JSX.Element} The ExperienceSection component.
 */
export default function ExperienceSection(): JSX.Element {
  const { t } = useTranslation();

  const experience = t("experience.items", { returnObjects: true }) as {
    company: string;
    role: string;
    date: string;
  }[];

  const education = t("education.items", { returnObjects: true }) as {
    institution: string;
    detail: string;
  }[];

  return (
    <section
      id="experience"
      className="relative z-10 w-full min-h-screen text-foreground border-t border-border flex items-center py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* ==== EXPERIENCE TIMELINE ==== */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins text-center md:text-left">
            {t("experience.title")}
          </h2>

          <div className="absolute top-[4.5rem] left-5 w-px h-[calc(100%-5.5rem)] bg-border pointer-events-none hidden md:block" />

          <motion.ul
            className="relative z-10 flex flex-col gap-10"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experience.map(({ company, role, date }, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                className="relative flex items-start gap-5"
              >
                <motion.div
                  className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-transform"
                  {...iconHover}
                >
                  <FaBriefcase size={16} />
                </motion.div>

                <div className="flex flex-col gap-[2px] font-poppins">
                  <p className="text-base font-semibold hover:text-primary transition-colors duration-200">
                    {company}
                  </p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                  <p className="text-xs text-muted-foreground">{date}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ==== EDUCATION TIMELINE ==== */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins text-center md:text-left">
            {t("education.title")}
          </h2>

          <div className="absolute top-[4.5rem] left-5 w-px h-[calc(100%-5.5rem)] bg-border pointer-events-none hidden md:block" />

          <motion.ul
            className="relative z-10 flex flex-col gap-10"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {education.map(({ institution, detail }, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                className="relative flex items-start gap-5"
              >
                <motion.div
                  className="shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-transform"
                  {...iconHover}
                >
                  <FaGraduationCap size={16} />
                </motion.div>

                <div className="flex flex-col gap-[2px] font-poppins">
                  <p className="text-base font-semibold hover:text-accent transition-colors duration-200">
                    {institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}