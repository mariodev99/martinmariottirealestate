import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Layout/Footer'
import Image from 'next/image'
import headerImage from "../../../public/images/header2.jpg"
import SectionWraper from '@/components/Layout/SectionWraper'
import { BlogList } from '@/db/BlogList'

export default function BlogPage() {
  return (
    <motion.main
        className={` min-h-screen overflow-y-hidden`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className='w-full '>
          <div className='relative h-64 w-full flex justify-center '>
            <div className='relative z-20 pt-24 w-3/4'>
              <h1 className={` text-xl md:text-3xl font-semibold text-center text-white`}>              Lo que debes saber para concretar tu proyecto de inversión en bienes raíces en España o Italia con éxito.</h1>
            </div>
            <Image
              className='brightness-50'
              src={headerImage}
              alt='imagen del servicio' 
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>
        <SectionWraper>
          {/* <h1 className={` text-xl md:text-3xl font-semibold text-center`}>
            Lo que debes saber para concretar tu proyecto de inversión en bienes raíces en España o Italia con éxito.
          </h1> */}
          {BlogList.map((item, index) => (
            <div key={item.title} className='px-5 grid grid-cols1 md:grid-cols-2 py-10 gap-12'>
              <div className={`flex flex-col justify-center ${index % 2 == 0 ? "order-0" : "order-0 md:order-1"}`}>
                <h2 className='text-2xl mb-6'>{item.title}</h2>
                <p className='text-lg'>{item.description}</p>
              </div>
              <div className='relative overflow-hidden rounded-3xl'>
                <Image src={item.image} alt='Imagen de una casa'></Image>
              </div>
            </div>
          ))}

        </SectionWraper>
      <Footer/>
    </motion.main>
  )
}