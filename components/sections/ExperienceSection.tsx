"use client";

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Animation variants for the container list.
 */
const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/**
 * Animation variants for each item.
 */
const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Hover/tap animation configuration for icons.
 */
const iconHover = {
  whileHover: {
    scale: 1.12,
    rotate: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

/**
 * ExperienceSection component.
 *
 * Renders a timeline split into two animated sections:
 * - Work experience (with briefcase icons)
 * - Education history (with graduation cap icons)
 *
 * Layout is fully responsive and includes a central title and animated items.
 *
 * @returns {JSX.Element} The rendered ExperienceSection component.
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
      className="w-full min-h-screen text-foreground flex flex-col items-center py-24 sm:py-32 md:py-40"
    >
      {/* === Main Title === */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-center mb-20">
        {t("experience.mainTitle", "Experience & Education")}
      </h2>

      <div className="w-full max-w-[100rem] px-6 sm:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* === Work Experience Timeline === */}
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12 font-poppins text-center md:text-left">
            {t("experience.title")}
          </h3>

          <motion.ul
            className="flex flex-col gap-14 relative"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experience.map(({ company, role, date }, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                className="relative pl-14"
              >
                {/* Timeline connector */}
                <span className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full shadow-md" />
                {index !== experience.length - 1 && (
                  <span className="absolute left-[0.45rem] top-6 h-full w-px bg-border" />
                )}

                <div className="flex flex-col gap-[2px] font-poppins text-sm sm:text-base md:text-lg">
                  <p className="font-semibold hover:text-primary transition-colors duration-200">
                    {company}
                  </p>
                  <p className="text-muted-foreground">{role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{date}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* === Education Timeline === */}
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12 font-poppins text-center md:text-left">
            {t("education.title")}
          </h3>

          <motion.ul
            className="flex flex-col gap-14 relative"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {education.map(({ institution, detail }, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                className="relative pl-14"
              >
                {/* Timeline connector */}
                <span className="absolute left-0 top-1 w-4 h-4 bg-accent rounded-full shadow-md" />
                {index !== education.length - 1 && (
                  <span className="absolute left-[0.45rem] top-6 h-full w-px bg-border" />
                )}

                <div className="flex flex-col gap-[2px] font-poppins text-sm sm:text-base md:text-lg">
                  <p className="font-semibold hover:text-accent transition-colors duration-200">
                    {institution}
                  </p>
                  <p className="text-muted-foreground">{detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}