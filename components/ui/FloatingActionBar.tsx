"use client";

import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

/**
 * FloatingActionBar component.
 *
 * Renders a fixed, bottom-centered, minimal nav with themed background and subtle animation.
 *
 * @returns {JSX.Element} A floating navigation component.
 */
export default function FloatingActionBar(): JSX.Element {
  const { t } = useTranslation();

  const navItems = [
    { id: "hero", icon: <FaHome />, label: t("sections.hero") },
    { id: "about", icon: <FaUser />, label: t("sections.about") },
    {
      id: "experience",
      icon: <FaBriefcase />,
      label: t("sections.experience"),
    },
    { id: "projects", icon: <FaCode />, label: t("sections.projects") },
    { id: "contact", icon: <FaEnvelope />, label: t("sections.contact") },
  ];

  const [activeSection, setActiveSection] = useState("hero");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateActiveSection = () => {
    let current = "hero";
    let minDistance = Infinity;

    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          current = id;
        }
      }
    }

    setActiveSection(current);
  };

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
    >
      <nav
        className="flex items-center justify-center gap-2 sm:gap-3 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full
                   backdrop-blur-md bg-[var(--card)] text-[var(--muted-foreground)] shadow-[0_4px_24px_rgba(0,0,0,0.05)]
                   dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-colors duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
        role="navigation"
        aria-label="Floating navigation"
      >
        {navItems.map(({ id, icon, label }) => {
          const isActive = id === activeSection;
          return (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              aria-label={label}
              className={`group flex flex-col items-center justify-center gap-[2px] px-2.5 py-1.5 rounded-md
                text-sm leading-none transition-all duration-200
                ${
                  isActive
                    ? "text-[var(--primary)] font-semibold scale-105"
                    : "hover:text-[var(--primary)]"
                }`}
            >
              <span className="text-[16px] sm:text-[17px]">{icon}</span>
              <span className="hidden sm:inline-block text-[10px] tracking-tight">
                {label}
              </span>
            </motion.button>
          );
        })}
      </nav>
    </motion.div>
  );
}
