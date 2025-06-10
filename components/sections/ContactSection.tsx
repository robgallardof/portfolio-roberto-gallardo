"use client";

import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * ContactSection component.
 *
 * Displays a call-to-action section with heading, description, and contact button.
 * Features entry animations and responsive design for a clean and elegant appearance.
 *
 * @returns {JSX.Element} The Contact section component.
 */
export default function ContactSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative z-10 w-full min-h-screen text-foreground border-t border-border flex items-center py-24 sm:py-32"
    >
      <motion.div
        className="max-w-3xl mx-auto px-6 sm:px-8 text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold font-poppins"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm sm:text-base leading-relaxed font-poppins"
        >
          {t("contact.description")}
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="mailto:contact@robertogallardo.dev"
          className="inline-block"
        >
          <Button
            size="lg"
            className="px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 hover:scale-105" // Added hover scale effect
          >
            {t("contact.button")}
          </Button>
        </motion.a>
      </motion.div>
    </section>
  );
}
