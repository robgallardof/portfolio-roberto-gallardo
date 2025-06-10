"use client";

import { JSX, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ScrollToTopButton component.
 *
 * Displays a minimalist floating icon at the bottom-right corner
 * when the user scrolls down. Clicking it scrolls smoothly to the top.
 *
 * @returns {JSX.Element | null} The scroll-to-top button.
 */
export default function ScrollToTopButton(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-16 right-8 sm:bottom-20 sm:right-10 z-50 text-muted-foreground hover:text-primary transition-colors transition-transform duration-200 hover:scale-110" // Added hover scale effect
        >
          <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
