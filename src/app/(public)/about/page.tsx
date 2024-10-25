import React from 'react';
import { Metadata } from 'next';
import SectionHeader from '@/components/section-header';
import { Accordion, Content, Tab, Trigger } from '@/components/accordion';
import { QUESTIONS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Design. Build. Supply. Solutions for Life',
};
export default function AboutUsPage() {
  return (
    <>
      <Introduction />
      <OurStory />
      <Faqs />
    </>
  );
}

function Introduction() {
  return (
    <section
      className="pb-12 md:pb-16 pt-8 md:pt-12 container"
      aria-labelledby="about-us"
    >
      <SectionHeader
        id="about-us"
        header="Building Dreams, One Project at a Time"
        descripton="We simplify your project by acting as the single point of contact for
        every phase—from design to completion. Whether it's a new build,
        renovation, or interior design, our team ensures quality and
        efficiency at every step."
      />
      <div className="pt-8 md:pt-12">
        <div className="relative bg-about-stats bg-cover bg-center w-full h-auto object-contain py-8 px-8 md:px-12 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-primary opacity-70"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-between relative z-10 ">
            <div className="rounded-bg bg-slate-100 shadow-md text-slate-600 rounded-lg text-center p-4 space-y-2">
              <div className="font-bold text-3xl text-primary">200+</div>
              <div>
                <h4 className="text-lg font-semibold">Projects completed</h4>
                <p className="text-sm text-slate-500">
                  Successfully completed 200+ projects, transforming visions
                  into reality.
                </p>
              </div>
            </div>
            <div className="rounded-bg bg-slate-100 text-slate-600 rounded-lg text-center p-4 space-y-2">
              <div className="font-bold text-3xl text-primary">98%</div>
              <div>
                <h4 className="text-lg font-semibold">On-Time Delivery Rate</h4>
                <p className="text-sm text-slate-500">
                  Ensuring that our projects are completed on or ahead of
                  schedule.
                </p>
              </div>
            </div>
            <div className="rounded-bg bg-slate-100 text-slate-600 rounded-lg text-center p-4 space-y-2">
              <div className="font-bold text-3xl text-primary">100+</div>
              <div>
                <h4 className="text-lg font-semibold">Skilled Professionals</h4>
                <p className="text-sm text-slate-500">
                  Our team of 100+ skilled professionals delivers excellence in
                  every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section
      aria-labelledby="our-story"
      id="our-story"
      className="container pb-12 md:pb-16"
    >
      <h3 className="text-secondary text-xl md:text-2xl font-semibold mb-8">
        Our Journey of Building Excellence
      </h3>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 ">
        <div className="sm:flex-1 space-y-4">
          <p className="text-base leading-relaxed max-w-prose ">
            <strong>DesignBuildSupplySolutions</strong> was founded in 2020 to
            bridge an existential gap in the construction industry. We
            identified the need for a seamless, all-in-one solution that takes
            clients from concept to completion, eliminating the hassle of
            managing multiple contractors and suppliers. Our mission is to
            provide comprehensive, turnkey solutions that streamline the
            construction process while delivering exceptional quality.
          </p>
          <p className="text-base leading-relaxed max-w-prose ">
            With our <em>Design, Build, and Supply</em> approach, we cover every
            aspect of your project. Whether it&apos;s residential or commercial,
            we offer expert architectural design services, creating custom
            blueprints that reflect your unique vision. From 3D renders to
            detailed plans, our experienced team brings your ideas to life.
          </p>
          <p className="text-base leading-relaxed max-w-prose ">
            Our construction specialists handle the build from start to finish,
            ensuring precision, quality, and timely execution. We work with
            reputable suppliers to source only the best materials, guaranteeing
            that every project meets the highest standards while staying within
            your budget.
          </p>
        </div>
        <div className="sm:flex-1 space-y-4">
          <p className="text-base leading-relaxed max-w-prose ">
            Beyond construction, we offer general supplies for all
            construction-related requirements, including custom-made furniture,
            interior design elements, building materials, and machinery. Whether
            you need household equipment like safes or specialized tools,
            we&apos;ve got you covered. Our interior design team takes the
            process further, creating bespoke spaces that combine functionality
            and style, with everything from design to top-tier installation
            taken care of.
          </p>
          <p className="text-base leading-relaxed max-w-prose ">
            We go beyond just building—we offer a comprehensive, hassle-free
            experience that ensures every part of your project is handled with
            expertise and care. With our team of architects, builders,
            suppliers, and designers, we make your vision a reality from start
            to finish.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section
      aria-labelledby="our-story"
      id="faqs"
      className="container pb-12 md:pb-16 bg-gray-100 py-4 sm:py-8"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-12">
        <div className="space-y-4 sm:col-span-4">
          <h3 className="text-secondary text-xl md:text-2xl font-semibold">
            FAQS
          </h3>
          <p className="text-sm text-slate-400">
            Have questions? We&apos;re here to help. Find answers to the most
            commonly asked questions about our services, process, and what to
            expect when working with us. If you need more details, feel free to
            &nbsp;
            <span className="text-blue-500 font-medium underline">
              <Link href="/contact">reach out</Link>
            </span>
          </p>
        </div>
        <Faq />
      </div>
    </section>
  );
}

const Faq = () => (
  <div className="sm:col-span-8">
    <Accordion className="divide-y">
      {QUESTIONS.map((e, i) => {
        return (
          <Tab key={i} className="text-primary">
            <Trigger>{e.question}</Trigger>
            <Content className="text-slate-500">{e.answer}</Content>
          </Tab>
        );
      })}
    </Accordion>
  </div>
);
