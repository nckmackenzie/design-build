/* eslint-disable @next/next/no-img-element */
'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function ProjectCarousel() {
  return (
    <section id="project-carousel" className="bg-slate-100">
      <div className="container">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="/home/carousel_1.jpg" alt="" />
          </div>
          <div>
            <img src="/home/carousel_2.jpg" alt="" />
          </div>
          <div>
            <img src="/home/carousel_3.jpg" alt="" />
          </div>
          <div>
            <img src="/home/carousel_4.jpg" alt="" />
          </div>
          <div>
            <img src="/home/carousel_5.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
