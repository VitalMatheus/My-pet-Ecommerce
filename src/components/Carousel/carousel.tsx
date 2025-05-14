"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-6xl py-4 m-auto overflow-hidden" ref={emblaRef}>
      <div className="flex h-40">
        {data.map((image, index) => (
          <div className="flex-[0_0_100%]" key={index}>
            <Image src={image.img} alt="promotions" width="892" height="344" />
          </div>
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4/15 top-1/5 -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3/15 top-1/5 -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  )
}

export default Carousel;

const data = [
  {
    img: '/carousel/carousel1.jpg'
  },
  {
    img: '/carousel/carousel2.jpg'
  },
  {
    img: '/carousel/carousel3.jpg'
  },
  {
    img: '/carousel/carousel4.jpg'
  },
  {
    img: '/carousel/carousel5.jpg'
  },
  {
    img: '/carousel/carousel6.jpg'
  },
  {
    img: '/carousel/carousel7.jpg'
  },
  {
    img: '/carousel/carousel8.jpg'
  },
]
