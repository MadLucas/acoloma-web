'use client'
import React from 'react'
import ImageCard from './ImageCard'
import Link from 'next/link'
import MyForm from '../Form/MyForm'

const bgImage = [
  '/images/IMG_2390.jpeg',
];

const MainContent = () => {
  return (
    <>
      <section className='bg-orange-500 py-20'>
        <div className='text-center'>
          <h3 className='text-white text-4xl'>Nuestros productos</h3>
        </div>
        <div>
          <div className='flex flex-wrap gap-5 justify-center mt-10'>
            <ImageCard imgSrc={bgImage}>
              <h3 className='text-xl font-bold mb-2'>Cortinas Rollers</h3>
              <p>Black Out, Sunscreen, Traslucida, Duo, gran variedad y muchos colores</p>
              <div>
              <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
                  <Link href={'/cortinasroller'}>
                    INFO
                  </Link>
                </button>
              </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage}>
              <h3 className='text-xl font-bold mb-2'>Toldos</h3>
              <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
              <div>
                <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
                  <Link href={'/toldos'}>
                    INFO
                  </Link>
                </button>
              </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage}>
              <h3 className='text-xl font-bold mb-2'>Persianas de aluminio</h3>
              <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
              <div>
                <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
                  <Link href={'/persianasaluminio'}>
                  INFO
                  </Link>
                </button>
              </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage}>
              <h3 className='text-xl font-bold mb-2'>Persianas de madera</h3>
              <p>Black Out, Sunscreen, Traslucida, gran variedad y muchos colores</p>
              <div>
                <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
                  <Link href={'/persianasmadera'}>
                  INFO
                  </Link>
                </button>
              </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage}>
              <h3 className='text-xl font-bold mb-2'>Domotica</h3>
              <p> Soluciones de ultima generacion para tu hogar</p>
              <div>
                <button className='btn bg-slate-900 p-2 mt-4 rounded-xl font-sans font-bold'>
                  <Link href={'/domotica'}>
                  INFO
                  </Link>
                </button>
              </div>
            </ImageCard>
          </div>
        </div>
      </section>
      <MyForm/>
    </>
  )
}

export default MainContent;

