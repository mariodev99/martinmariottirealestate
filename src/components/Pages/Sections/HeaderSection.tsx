import {PrimaryButton} from '@/components/Buttons/PrimaryButton'
import React, { useEffect, useState } from 'react'
import { Merriweather,Inter } from 'next/font/google'
import Image from 'next/image'
import SectionWraper from '@/components/Layout/SectionWraper'
import headerImage from "../../../../public/images/header2.jpg"
import Link from 'next/link'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const HEADER_INFORMATION = {
  title: "Invierte en inmuebles de españa o italia, de forma",
  subtitle: "Crea tu patrimonio inmobiliario inviertiendo en los inmuebles de mayor rentabilidad con total seguridad y tranquilidad",
  callToAction: "Concreta tu proyecto"
}

const headerWords = [
  "inteligente",
  "rentable",
  "escalable"
]

const wordVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeaderSection() {

  const [currentWordIndex, setCurrentWordIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === headerWords.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [])

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
        <main className='relative text-white w-full md:w-2/3'>
          <div className='flex flex-col gap-10'>
          
          <div className='text-2xl md:text-5xl whitespace-normal md:whitespace-normal	'>
            <h1 className={`${inter.className} text-center md:text-start font-medium tracking-wide`}>
              Invierte en inmuebles en España o Italia, de forma
              {headerWords.map((word, index) => (
                <motion.span
                  className='ml-3 block md:inline-block flex justify-center md:justify-start w-full absolute text-greenprimary'
                  key={index}
                  variants={wordVariants}
                  initial="hidden"
                  animate={index === currentWordIndex ? "visible" : "hidden"}
                >
                  {word}
                </motion.span>
                ))}
            </h1>

          </div>

            <h2 className={`${inter.className} text-lg md:text-xl text-center md:text-start font-regular md:font-medium mt-5 md:mt-0`}>{HEADER_INFORMATION.subtitle}</h2>
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
