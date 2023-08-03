import PrimaryButton from '@/components/Buttons/PrimaryButton'
import React from 'react'
import { Merriweather,Inter } from 'next/font/google'
import Image from 'next/image'
import SectionWraper from '@/components/Layout/SectionWraper'

const merriweather = Merriweather({ subsets: ['latin'], weight: ["300", "400"] })
const inter = Inter({ subsets: ['latin'] })

export default function HeaderSection() {
  return (
    <div className="flex items-center pt-0 md:pt-16 h-screen w-full  bg-[url('/images/imagenheader.jpg')] bg-right bg-cover">
      <SectionWraper>
        <main className='md:grid w-full grid-cols-1 md:grid-cols-2 items-center gap-10'>
        <div className='flex flex-col gap-5'>
          <h1 className={`${inter.className} text-3xl md:text-5xl font-bold`}>
            Invierte en Bienes Raíces en España o Italia, desde cualquier sitio.
          </h1>
          <h2 className={`${inter.className} text-xl md:text-xl font-medium `}>Acompañamiento Integral para Extranjeros. Servicios personalizados, llave en mano. </h2>
          <div className='w-full'>
            <PrimaryButton mode='dark'>
              <p className='text-xl'>Realiza tu proyecto</p>
            </PrimaryButton>          
          </div>
        </div>

        {/* Empty */}
        <div></div>

        </main>

        {/* <div className='block md:hidden'>
          <h1 className={`${inter.className} text-3xl md:text-5xl font-bold mb-3`}>
              Invierte en Bienes Raíces en España o Italia, desde cualquier sitio.
          </h1>

          <button className='mt-3 bg-primary rounded-full py-3 px-6 w-full text-white font-bold text-xl'>Comienza tu proyecto hoy</button>
        </div> */}
      </SectionWraper>
    </div>

  )
}
