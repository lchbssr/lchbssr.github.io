import { SectionHeading } from '../ui/SectionHeading';
import { Timeline } from '../ui/Timeline';
import { experiences } from '../../data/experiences';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-night-alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Expériences professionnelles" className="mb-20" />
        <Timeline items={experiences} dotBorderClassName="border-gray-50 dark:border-night-alt" />
      </div>
    </section>
  );
}
