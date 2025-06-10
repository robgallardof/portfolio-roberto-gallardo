'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

/**
 * ProjectCard component.
 *
 * Encapsulates the logic and animation for a single project card.
 * This helps isolate re-renders and makes the component more manageable.
 */
interface ProjectCardProps {
  title: string;
  desc: string;
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({ title, desc, demoUrl, repoUrl }: ProjectCardProps): JSX.Element => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }} // Add a subtle shadow on hover for a more polished look
      transition={{ type: 'spring', stiffness: 400, damping: 20, mass: 0.8 }} // Use spring for a natural, bouncy feel on hover
      className="flex flex-col justify-between p-6 rounded-xl bg-muted/40 border border-border shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {desc}
        </p>
      </div>

      {(demoUrl || repoUrl) && (
        <div className="flex gap-4 mt-6 text-sm text-primary font-medium">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

/**
 * ProjectsSection component.
 *
 * Renders the featured personal projects in a responsive grid layout with
 * animated cards, hover effects, and external links to demos and repositories.
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
      className="relative z-10 w-full min-h-screen text-foreground border-t border-border flex items-center py-24 sm:py-32"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center font-poppins"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {t('projects.featured')}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}