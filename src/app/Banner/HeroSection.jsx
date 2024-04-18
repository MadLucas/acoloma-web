'use client'
import React from 'react'
import MyCarousel from './MyCarousel';


const images = [
  '/images/IMG_2390.jpeg',
  '/images/IMG_2391.jpeg',
  '/images/IMG_3037.jpeg',
  '/images/IMG_3052.jpeg',
];

const HeroSection = () => {
  return (
    <section className='text-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='my-auto'>
          <h3 className='text-2xl md:text-4xl text-black font-sans'>
            SOLUCIONES SOFISTICADAS
          </h3>
          <p className='text-xl md:text-2xl text-black font-sans'>
            Y MODERNAS PARA TU HOGAR
          </p>
        </div>
        <div className='my-auto max-w-xl '>
          <MyCarousel images={images} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
