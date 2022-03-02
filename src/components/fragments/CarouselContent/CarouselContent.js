import React from 'react';
import { Carousel, Arrow } from '@trendyol-js/react-carousel';
import CardCarousel from './CardCarousel.js';
import square from '../../../images/square.png';
import LeftArrow from './ArrowLeft';
import RightArrow from './ArrowRight';

export default function CarouselContent() {

  return (
    <div className="bgCarouselContent">
      <div>
        <h1 className="titleCarousel">Jenjang di LPIT Al Uswah Jatirogo</h1>
      </div>
      <div className="carousel">
        <Carousel show={2.5} slide={1} transition={0.5} rightArrow={<RightArrow/>} leftArrow={<LeftArrow/>}>
          <CardCarousel
            image={square}
            title="Play Group Islam Terpadu (PGIT)"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
            link="/pgit"
          />
          <CardCarousel
            image={square}
            title="Taman Kanak - Kanak Islam Terpadu (TKIT)"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
            link="/tkit"
          />
          <CardCarousel
            image={square}
            title="Sekolah Dasar Islam Terpadu (SDIT)"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
            link="/sdit"
          />
          <CardCarousel
            image={square}
            title="Tempat Penitipan anak Islam Terpadu (TPIT)"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
            link="/tdit"
          />
        </Carousel>
      </div>
    </div>
  )
}
