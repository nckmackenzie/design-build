'use client';

import { useSearchParams } from 'next/navigation';
import { type IconType } from 'react-icons';

import { SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useSetParams } from '@/hooks/use-set-params';

export default function Services() {
  const searchParams = useSearchParams();
  const q = searchParams.get('service') || SERVICES[0].slug;
  const selectedService = SERVICES.find(service => service.slug === q);

  return (
    <div className="py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      <div className=" grid grid-cols-2 gap-3 md:flex md:flex-col" role="list">
        {SERVICES.map(service => (
          <Service
            key={service.href}
            title={service.title}
            icon={service.icon}
            slug={service.slug}
            isSelected={service.slug === q}
          />
        ))}
      </div>
      <div className="sm:flex-1">
        <h3 className="text-lg font-semibold text-primary mb-4">
          {selectedService?.title}
        </h3>
      </div>
    </div>
  );
}

interface ServiceProps {
  title: string;
  icon: IconType;
  slug: string;
  isSelected: boolean;
}

function Service({ title, icon: Icon, slug, isSelected }: ServiceProps) {
  const setParams = useSetParams();
  return (
    <button
      onClick={() =>
        setParams({
          service: slug,
        })
      }
      className={cn(
        'inline-flex items-center gap-2 text-primary border border-primary bg-background whitespace-nowrap rounded-md h-9 px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-secondary': isSelected,
        }
      )}
    >
      <Icon size={16} />
      <span>{title}</span>
    </button>
  );
}
