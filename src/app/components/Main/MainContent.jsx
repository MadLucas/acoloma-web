'use client'
import React from 'react'
import ImageCard from './ImageCard'

const bgImage = [
  '/images/IMG_2390.jpeg',
];

const MainContent = () => {
  return (
    <>
    <section className='bg-orange-500 py-20'>
      <div className='text-center'>
      <h3 className='text-white text-4xl'>CORTINAS ROLLER, PERSIANAS, TOLDOS</h3>
      </div>
      <div>
      <div className='flex flex-wrap gap-5 justify-center mt-10'>
        <ImageCard imgSrc ={bgImage}>
          <h3 className='text-xl font-bold mb-2'>Cortinas Rollers</h3>
          <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
          <div>
            <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
              Info
            </button>
          </div>
        </ImageCard>
        <ImageCard imgSrc ={bgImage}>
          <h3 className='text-xl font-bold mb-2'>Toldos</h3>
          <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
          <div>
            <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
              INFO
            </button>
          </div>
        </ImageCard>
        <ImageCard imgSrc ={bgImage}>
          <h3 className='text-xl font-bold mb-2'>Persianas de aluminio</h3>
          <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
          <div>
            <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
              INFO
            </button>
          </div>
        </ImageCard>
        <ImageCard imgSrc ={bgImage}>
          <h3 className='text-xl font-bold mb-2'>Persianas de madera</h3>
          <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
          <div>
            <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
              INFO
            </button>
          </div>
        </ImageCard>
      </div>
      </div>
    </section>
    </>
  )
}

export default MainContent;

