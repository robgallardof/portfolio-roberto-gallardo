/**
 * Section listing professional experience and education.
 */
import { useTranslation } from 'react-i18next';

export default function ExperienceSection(): JSX.Element {
  const { t } = useTranslation();
  const experience = t('experience.items', { returnObjects: true }) as {
    company: string;
    role: string;
    date: string;
  }[];

  const education = t('education.items', { returnObjects: true }) as {
    institution: string;
    detail: string;
  }[];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t('experience.title')}</h2>
        {experience.map(({ company, role, date }, i) => (
          <div key={i} className="mb-5">
            <p className="font-medium">{company}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t('education.title')}</h2>
        {education.map(({ institution, detail }, i) => (
          <div key={i} className="mb-5">
            <p className="font-medium">{institution}</p>
            <p className="text-sm text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
