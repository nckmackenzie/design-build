import Image from 'next/image';
import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import SectionHeader from '@/components/section-header';

import { FEATURES, PROCESS, SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <OurProcess />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 container py-6 md:py-12">
      <div className="space-y-8 self-center">
        <div className="space-y-6">
          <div>
            <Badge variant="gore" aria-hidden="true">
              Your Vision, Our Expertise.
            </Badge>
            <h1 className="text-lg md:text-5xl font-bold text-primary font-headings">
              Complete turnkey construction solution.
            </h1>
          </div>
          <p className="text-foreground text-base md:text-lg">
            From design to build to supply, we provide a seamless, end-to-end
            solution for all your construction needs. Discover how we bring your
            dream project to life with precision, quality, and ease.
          </p>
        </div>
        <div className="space-x-4">
          <Button size="lg" variant="gore">
            Start your project today
          </Button>
          <Button size="lg" variant="outline">
            Get a free consultation
          </Button>
        </div>
      </div>
      <Image
        src="/home/hero.jpg"
        alt="Construction worker performing a task"
        width={1920}
        height={1080}
        className="rounded-3xl"
      />
    </section>
  );
}

function Features() {
  return (
    <section
      className="pb-12 md:pb-16 pt-8 md:pt-12 mx-4 rounded-3xl space-y-6"
      aria-labelledby="features-heading"
    >
      <SectionHeader
        id="features-heading"
        header="Your All-in-One Construction Partner"
        descripton="We simplify your project by acting as the single point of contact for
          every phase—from design to completion. Whether it's a new build,
          renovation, or interior design, our team ensures quality and
          efficiency at every step."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 container">
        {FEATURES.map(feature => (
          <Feature key={feature.header} {...feature} />
        ))}
      </div>
    </section>
  );
}

interface FeatureProps {
  Icon: IconType;
  text: string;
  header: string;
}
function Feature({ Icon, header, text }: FeatureProps) {
  return (
    <article
      className="flex flex-col gap-4 items-start rounded-lg shadow-md border-slate-100 p-4 "
      aria-labelledby={header}
    >
      <div
        className="size-8 grid place-content-center border rounded-full"
        aria-hidden="true"
      >
        <Icon className="size-4 text-secondary" aria-hidden="true" />
      </div>
      <div className="space-y-1">
        <div className="text-lg font-semibold text-primary">{header}</div>
        <p className="text-sm  text-foreground">{text}</p>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section
      className="pb-12 md:pb-16 pt-8 md:pt-12 mx-4 rounded-xl bg-primary/10 space-y-6"
      aria-labelledby="our-services"
      id="our-services"
    >
      <SectionHeader
        header="What we offer"
        descripton="Comprehensive Solutions for Every Stage of Your Construction Journey."
        id="our-services-heading"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:gap-6 container items-center">
        {SERVICES.map(service => (
          <Service
            key={service.title}
            header={service.title}
            text={service.description}
            href={service.href}
          />
        ))}
      </div>
    </section>
  );
}

interface ServiceProps {
  header: string;
  text: string;
  href: string;
}

function Service({ header, text, href }: ServiceProps) {
  return (
    <article className="rounded-xl overflow-hidden shadow-xl p-4 bg-white">
      <header className="text-lg font-semibold text-primary">
        <h4>{header}</h4>
      </header>
      <p className="text-fore">{text}</p>

      <footer>
        <Link href={href}>
          <Button
            size="sm"
            variant="link"
            className="justify-start px-0 text-primary text-blue-500 space-x-2 "
          >
            Learn More &rarr;
          </Button>
        </Link>
      </footer>
    </article>
  );
}

function OurProcess() {
  return (
    <section
      id="our-process"
      className="pb-12 md:pb-16 pt-8 md:pt-12 mx-4 rounded-xl space-y-6"
      aria-labelledby="our-process-heading"
    >
      <SectionHeader
        header="Step-by-Step Journey"
        descripton="Comprehensive Solutions for Every Stage of Your Construction Journey."
        id="our-process-heading"
      />
      {PROCESS.map((process, index) => (
        <Process key={process.title} {...process} index={index + 1} />
      ))}
    </section>
  );
}

interface ProcessProps {
  imagePath: string;
  title: string;
  description: string;
  attribute?: string;
  index: number;
}

function Process({ description, imagePath, title, index }: ProcessProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row gap-4 md:gap-6 container',
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      )}
    >
      <div className="space-y-6 self-center">
        <div
          className="text-7xl font-black font-sans text-gray-100"
          aria-hidden="true"
        >
          0{index}
        </div>
        <div className="space-y-1">
          <h5 className="text-primary text-lg md:text-xl font-semibold">
            {title}
          </h5>
          <p className="text-sm md:text-lg">{description}</p>
        </div>
      </div>
      <Image
        src={imagePath}
        alt={title}
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
}

function CTA() {
  return (
    <section
      id="cta"
      className="pb-12 md:pb-16 pt-8 md:pt-12 space-y-6 bg-primary"
      aria-labelledby="cta-heading"
    >
      <SectionHeader
        header="Ready to get started?"
        descripton="Let’s Talk About Your Next Project - Book an Appointment Now!"
        id="cta-heading"
        descriptionClassName="text-white"
      />
      <div className="text-center">
        <Button size="lg" variant="gore">
          Schedule a Consultation with Our Experts
        </Button>
      </div>
    </section>
  );
}
