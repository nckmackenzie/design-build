import { type Metadata } from 'next';

import SectionHeader from '@/components/section-header';
import Projects from '../_components/projects/projects';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectPage() {
  return (
    <section
      aria-labelledby="our-project"
      id="our-project"
      className="container pt-6 md:pt-8 pb-12 md:pb-16"
    >
      <SectionHeader
        id="our-project"
        header="Our Portfolio of Success"
        descripton="Explore our completed projects across various aspects of design, construction, and general supplies. Each section highlights our work, with photos illustrating our dedication to quality and client satisfaction."
      />

      <div className="py-6 sm:py-8">
        <Projects />
      </div>
    </section>
  );
}
