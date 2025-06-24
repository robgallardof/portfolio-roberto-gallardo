'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/**
 * Motion container variants for staggered reveal.
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/**
 * Motion variants for each card.
 */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/**
 * Props for the ProjectCard component.
 */
interface ProjectCardProps {
  title: string;
  desc: string;
  demoUrl?: string;
  repoUrl?: string;
}

/**
 * ProjectCard component.
 *
 * Displays a single project card with title, description, and optional links to a live demo or GitHub repository.
 *
 * @param {ProjectCardProps} props - The props for the card.
 * @returns {JSX.Element} A responsive, animated project card.
 */
const ProjectCard = ({ title, desc, demoUrl, repoUrl }: ProjectCardProps): JSX.Element => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      scale: 1.025,
      boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
    }}
    transition={{
      type: 'spring',
      stiffness: 200,
      damping: 18,
      mass: 0.9,
    }}
    className="flex flex-col justify-between h-full p-6 rounded-xl bg-muted/40 border border-border shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 font-poppins">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>

    {(demoUrl || repoUrl) && (
      <div className="flex flex-wrap gap-4 mt-6 text-sm font-medium text-primary">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
            title="View demo"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Demo</span>
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
            title="View code on GitHub"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    )}
  </motion.div>
);

/**
 * ProjectsSection component.
 *
 * Renders a responsive, animated grid of featured personal projects.
 *
 * @returns {JSX.Element} The full projects section.
 */
export default function ProjectsSection(): JSX.Element {
  const { t } = useTranslation();

  const projects = t('projects.personal', { returnObjects: true }) as {
    title: string;
    desc: string;
    demoUrl?: string;
    repoUrl?: string;
  }[];

  return (
    <section
      id="projects"
      className="w-full min-h-screen text-foreground flex flex-col items-center py-24 sm:py-32 md:py-40"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-center mb-20">
        {t('projects.featured')}
      </h2>

      <motion.div
        className="w-full max-w-[100rem] px-6 sm:px-10 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}