"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 }, // más sutil
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * SectionWrapper component.
 *
 * Wraps a section with scroll-based animation and layout-safe constraints.
 *
 * @param {object} props - The component props.
 * @param {JSX.Element} props.children - The section to animate.
 * @param {'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn'} [props.variant] - The animation variant.
 * @returns {JSX.Element} Animated section with safe overflow.
 */
export default function SectionWrapper({
  children,
  variant = "fadeUp",
}: {
  children: JSX.Element;
  variant?: keyof typeof variants;
}): JSX.Element {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={variants[variant]}
      >
        {children}
      </motion.div>
    </div>
  );
}
