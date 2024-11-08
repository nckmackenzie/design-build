import { type Metadata } from 'next';

import SectionHeader from '@/components/section-header';
import ContactForm from '../_components/contact/contact-form';
import ContactUsOther from '../_components/contact/contact-other';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactUsPage() {
  return (
    <section
      className="pb-12 md:pb-16 pt-8 md:pt-12 space-y-6 container"
      aria-labelledby="contact-us"
    >
      <SectionHeader
        id="contact-us"
        header="Contact our team"
        descripton="Have questions or ready to start your project? We’re here to help! Reach out to our team for expert guidance, personalized solutions, or to discuss your unique vision. Let’s bring your ideas to life together."
      />
      <div className="grid gap-4 sm:gap-x-8 sm:grid-cols-12">
        <div className="sm:col-span-8">
          <ContactForm />
        </div>
        <ContactUsOther />
      </div>
    </section>
  );
}
