'use client';
import { SERVICES } from '@/lib/constants';
import clsx from 'clsx';

import React from 'react';

export default function Projects() {
  const [selectedService, setSelectedService] = React.useState<string>(
    SERVICES[0].title
  );

  return (
    <div className="">
      <ul className="flex items-center gap-x-6 justify-end">
        {SERVICES.map(service => (
          <li
            className={clsx(
              'text-base cursor-pointer text-gray-400 transition-all duration-300 hover:text-secondary',
              {
                'text-secondary font-medium': service.title === selectedService,
              }
            )}
            key={service.title}
            onClick={() => setSelectedService(service.title)}
          >
            {service.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
