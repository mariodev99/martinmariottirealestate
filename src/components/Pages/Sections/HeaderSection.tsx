import {PrimaryButton} from '@/components/Buttons/PrimaryButton'
import React from 'react'
import { Merriweather,Inter } from 'next/font/google'
import Image from 'next/image'
import SectionWraper from '@/components/Layout/SectionWraper'
import headerImage from "../../../../public/images/header2.jpg"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const HEADER_INFORMATION = {
  title: "Invierte en inmuebles de españa o italia, de forma inteligente, rentable y escalable",
  subtitle: "Crea tu patrimonio inmobiliario inviertiendo en los inmuebles de mayor rentabilidad con total seguridad y tranquilidad",
  callToAction: "Concreta tu proyecto"
}

export default function HeaderSection() {
  return (
    <div className="relative flex items-center pt-0 h-screen w-full">
       {/* bg-[url('/images/header2.jpg')] bg-right bg-cover  */}
       <div className='absolute w-full h-full brightness-[0.3]'>
          <Image
            src={headerImage}
            alt='imagen del servicio' 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      <SectionWraper>
        <main className='relative text-white  w-full md:w-2/3'>
          <div className='flex flex-col gap-5'>
            <h1 className={`${inter.className} text-3xl md:text-5xl text-center md:text-start font-medium tracking-wide`}>{HEADER_INFORMATION.title}</h1>
            <h2 className={`${inter.className} text-lg md:text-xl text-center md:text-start font-regular md:font-medium `}>{HEADER_INFORMATION.subtitle}</h2>
            <div className='w-full'>
              <Link href={"/contacto"}>
              <PrimaryButton mode='dark'>
                {HEADER_INFORMATION.callToAction}
              </PrimaryButton> 
              </Link>
            </div>
          </div>
          {/* Empty */}
        </main>

      </SectionWraper>
    </div>

  )
}
