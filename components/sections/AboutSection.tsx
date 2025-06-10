'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { JSX } from 'react';

type Skill = {
  name: string;
  icon: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

/**
 * AboutSection component.
 *
 * Displays an introduction and categorized technical skills
 * in a vertically structured layout with responsive design and animations.
 *
 * @returns {JSX.Element}
 */
export default function AboutSection(): JSX.Element {
  const { t } = useTranslation();

  const groupedSkills: { title: string; skills: Skill[] }[] = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C#', icon: 'csharp' },
        { name: '.NET 8', icon: 'dotnet' },
        { name: 'ASP.NET Core', icon: 'dotnet' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'Vue.js', icon: 'vuedotjs' },
        { name: 'React Native', icon: 'react' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'ShadCN UI', icon: 'storybook' },
      ],
    },
    {
      title: 'Backend & Realtime',
      skills: [
        { name: 'EF Core', icon: 'dotnet' },
        { name: 'WebSockets / SignalR', icon: 'socketdotio' },
        { name: 'Stored Procedures', icon: 'sqlite' },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Azure DevOps', icon: 'azuredevops' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
        { name: 'CI/CD', icon: 'githubactions' },
        { name: 'Nginx', icon: 'nginx' },
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'Linux (Fedora / Ubuntu)', icon: 'linux' },
      ],
    },
    {
      title: 'Databases & Reporting',
      skills: [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'SQL Server', icon: 'microsoftsqlserver' },
        { name: 'SSRS Reports', icon: 'filezilla' },
      ],
    },
    {
      title: 'IDEs & Tools',
      skills: [
        { name: 'Visual Studio', icon: 'visualstudio' },
        { name: 'VS Code', icon: 'visualstudiocode' },
        { name: 'Android Studio', icon: 'androidstudio' },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 w-full min-h-screen text-foreground border-t border-border flex items-center py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-start gap-20"
        >
          {/* === Intro Section === */}
          <div className="max-w-3xl w-full text-center space-y-6 font-poppins">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* === Skills Sections === */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full flex flex-col gap-8"
          >
            {groupedSkills.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-primary font-poppins">
                  {group.title}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08, rotate: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground bg-muted border border-border rounded-md font-poppins cursor-default"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}/currentColor`}
                        alt={skill.name}
                        title={skill.name}
                        className="w-5 h-5 shrink-0 dark:invert"
                        loading="lazy"
                      />
                      <span>{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}