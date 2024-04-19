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
    <section className='text-center bg-cyan-950 py-5'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2'>
        <div className='mx-auto my-auto bg-orange-500 py-5 px-5'>
          <h3 className='text-4xl md:text-8xl text-white font-sans'>
            SOLUCIONES MODERNAS
          </h3>
          <p className='text-2xl md:text-4xl text-white font-sans'>
            Y SOFISTICADAS PARA TU HOGAR
          </p>
        </div>
        <div className='my-auto max-w-xl mx-auto md:mt-5'>
          <MyCarousel images={images} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
