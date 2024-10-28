import { Metadata } from 'next';

import SectionHeader from '@/components/section-header';
import Services from '../_components/services/service';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <section
      aria-labelledby="our-services"
      id="our-services"
      className="container pt-6 md:pt-8 pb-12 md:pb-16"
    >
      <SectionHeader
        id="our-services"
        header="Our Comprehensive Services"
        descripton="From initial design to final touches, we provide end-to-end construction solutions that bring your vision to life. With expertise in architectural design, construction management, material sourcing, and interior finishing, our team ensures a seamless experience and exceptional results every step of the way."
      />

      <Services />
    </section>
  );
}
