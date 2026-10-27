import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../contexts/LanguageContext';
import { Timeline } from '../ui/Timeline';
import { formations } from '../../data/formations';

export function Formation() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-6 lg:px-12 bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t.education.title} className="mb-20" />
        <Timeline items={formations} dotBorderClassName="border-white dark:border-night" />
      </div>
    </section>
  );
}
