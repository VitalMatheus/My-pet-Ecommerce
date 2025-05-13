"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="w-6xl py-4 m-auto overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {data.map((image, index) => (
          <div className="flex-[0_0_100%]" key={index}>
            <Image src={image.img} alt="promotions" width="892" height="344" />
          </div>
        ))} 
      </div>
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
