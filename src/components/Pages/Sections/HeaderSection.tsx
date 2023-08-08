import PrimaryButton from '@/components/Buttons/PrimaryButton'
import React from 'react'
import { Merriweather,Inter } from 'next/font/google'
import Image from 'next/image'
import SectionWraper from '@/components/Layout/SectionWraper'
import headerImage from "../../../../public/images/header2.jpg"

const inter = Inter({ subsets: ['latin'] })

const HEADER_INFORMATION = {
  title: "Invierte en inmuebles de españa o italia, de forma inteligente, rentable y escalable",
  subtitle: "Crea tu patrimonio inmobiliario inviertiendo en los inmuebles de mayor rentabilidad con total seguridad y tranquilidad",
  callToAction: "Realiza tu proyecto"
}

export default function HeaderSection() {
  return (
    <div className="relative flex items-center pt-0 h-screen w-full">
       {/* bg-[url('/images/header2.jpg')] bg-right bg-cover  */}
       <div className='absolute w-full h-full brightness-50'>
          <Image
            src={headerImage}
            alt='imagen del servicio' 
            layout="fill"
            objectFit="cover"
            quality={100} 
          />
        </div>
      <SectionWraper>
        <main className='relative text-white md:grid w-full grid-cols-1 md:grid-cols-2 items-center gap-10'>
          <div className='flex flex-col gap-5'>
            <h1 className={`${inter.className} text-3xl md:text-5xl font-bold tracking-wide`}>{HEADER_INFORMATION.title}</h1>
            <h2 className={`${inter.className} text-xl md:text-xl font-medium `}>{HEADER_INFORMATION.subtitle}</h2>
            <div className='w-full'>
              <PrimaryButton mode='light'>
                <p className='text-xl'>{HEADER_INFORMATION.callToAction}</p>
              </PrimaryButton>          
            </div>
          </div>
          {/* Empty */}
          <div></div>
        </main>

      </SectionWraper>
    </div>

  )
}
