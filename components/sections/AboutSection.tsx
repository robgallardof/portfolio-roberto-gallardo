/**
 * Section describing the developer and core skills.
 */
import { useTranslation } from 'react-i18next';

export default function AboutSection(): JSX.Element {
  const { t } = useTranslation();
  const skills = [
    'C#',
    '.NET 8',
    'React',
    'Next.js',
    'TailwindCSS',
    'Azure',
    'MongoDB',
    'PostgreSQL',
    'Node.js',
    'CI/CD',
    'Docker',
    'Kubernetes',
    'SSRS',
    'Stored Procedures',
    'Azure DevOps',
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('about.title')}</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty text-sm">
          {t('about.description')}
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('about.skillsTitle')}</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-muted text-foreground rounded-full border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
