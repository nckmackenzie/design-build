'use client';
import React from 'react';
import clsx from 'clsx';
import { RowsPhotoAlbum, type Photo } from 'react-photo-album';
import 'react-photo-album/rows.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { SERVICES, SLIDES } from '@/lib/constants';
import BasicSelect from '@/components/basic-select';
import { useMediaQuery } from 'usehooks-ts';
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string) {
  return `/projects/${asset}`;
}

export default function Projects() {
  const [selectedService, setSelectedService] = React.useState<string>(
    SERVICES[0].slug
  );
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [index, setIndex] = React.useState(-1);
  const photos = SLIDES.filter(s => s.category === selectedService).map(
    ({ asset, alt, width, height }) =>
      ({
        src: assetLink(asset),
        alt,
        width,
        height,
        srcSet: breakpoints.map(breakpoint => ({
          src: assetLink(asset),
          width: breakpoint,
          height: Math.round((height / width) * breakpoint),
        })),
      } as Photo)
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {isMobile && (
        <BasicSelect
          options={[...SERVICES.map(s => ({ label: s.title, value: s.slug }))]}
        />
      )}
      <ul className="hidden sm:flex sm:items-center sm:gap-x-6 sm:justify-end">
        {SERVICES.map(service => (
          <li
            className={clsx(
              'text-base cursor-pointer text-gray-400 transition-all duration-300 hover:text-secondary',
              {
                'text-secondary font-medium': service.slug === selectedService,
              }
            )}
            key={service.title}
            onClick={() => setSelectedService(service.slug)}
          >
            {service.title}
          </li>
        ))}
      </ul>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
