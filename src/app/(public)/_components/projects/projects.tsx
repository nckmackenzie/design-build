'use client';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { PROJECTS, SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/button';
import Link from 'next/link';

export default function Projects() {
  const [selectedService, setSelectedService] = React.useState<string>(
    SERVICES[0].slug
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <Services
        selectedServices={selectedService}
        onServiceSelect={setSelectedService}
      />
      <div>
        {PROJECTS.map((project, index) => (
          <Project
            key={project.projectName}
            {...project}
            isFirst={index === 0}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center py-6 md:py-12 border-b">
        <h4 className="text-3xl md:text-6xl font-bold text-primary">
          Start a project ?
        </h4>
        <p className="text-sm text-gray-500 max-w-prose">
          Embark on your project journey with us. We provide comprehensive
          solutions tailored to your needs. Lets bring your vision to life
          together.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}

interface ServicesProps {
  selectedServices: string;
  onServiceSelect: React.Dispatch<React.SetStateAction<string>>;
}

function Services({ onServiceSelect, selectedServices }: ServicesProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div className="sm:flex sm:justify-center">
      {isMobile ? (
        <div className="flex flex-col rounded-lg shadow-sm">
          {SERVICES.map((service, index) => (
            <button
              key={service.slug}
              onClick={() => onServiceSelect(service.slug)}
              type="button"
              className={cn(
                'px-4 py-2 inline-flex items-center gap-x-2  text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100  focus:outline-none focus:bg-primary  focus:ring-2 focus:ring-primary focus:text-primary',
                {
                  'rounded-t-md': index === 0,
                  '-mt-px': index !== 0,
                  'rounded-b-md': index === SERVICES.length - 1,
                  'bg-primary text-white focus:text-white':
                    service.slug === selectedServices,
                }
              )}
            >
              {service.title}
            </button>
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col sm:inline-flex sm:flex-row rounded-md shadow-sm"
          role="group"
        >
          {SERVICES.map((service, index) => {
            return (
              <button
                key={service.title}
                type="button"
                onClick={() => onServiceSelect(service.slug)}
                className={cn(
                  'flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 transition-all hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary ',
                  {
                    'border rounded-s-lg': index === 0,
                    'border-t border-b border-r':
                      index !== 0 && index !== SERVICES.length - 1,
                    'border border-l-0 rounded-e-lg':
                      index === SERVICES.length - 1,
                    'bg-primary text-secondary focus:text-secondary':
                      service.slug === selectedServices,
                  }
                )}
              >
                {service.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface ProjectProps {
  projectName: string;
  projectDescription: string;
  image: string;
  isFirst: boolean;
}

function Project({
  image,
  projectDescription,
  projectName,
  isFirst,
}: ProjectProps) {
  return (
    <div
      className={cn('grid sm:grid-cols-3 gap-y-4 gap-x-6 py-4 border-b', {
        'border-t': isFirst,
      })}
    >
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-4">
        {projectName}
      </h3>
      <p className="text-sm sm:text-base text-gray-500">{projectDescription}</p>
      <Image
        src={image}
        alt={projectName}
        width={1920}
        height={1080}
        objectFit="cover"
      />
    </div>
  );
}
