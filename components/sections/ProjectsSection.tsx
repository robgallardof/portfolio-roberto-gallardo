import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * Section showcasing highlighted projects.
 */
export default function ProjectsSection(): JSX.Element {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <h2 className="text-2xl font-semibold text-center">{t('projects.title')}</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(({ title, desc }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-5 rounded-xl bg-muted/40 border border-border hover:shadow transition-all"
          >
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-muted-foreground mt-1">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
