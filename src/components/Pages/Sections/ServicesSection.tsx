import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { ServiceList } from '@/db/Services'
import { AdvantageList } from '@/db/Advantages'
import Image from 'next/image'
import SectionWraper from '@/components/Layout/SectionWraper'
import { motion } from 'framer-motion'
import { Service } from '@/db/Services'
import { SwiperSlide, Swiper } from "swiper/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  }
}

const serviceVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring"
    }
  },
}





const ServiceBox = ({title, image, index, subtitle}:Service) => (
    <motion.div                   
      className="flex flex-col justify-between"
      variants={serviceVariant}
    >

      {/* Image */}
      <motion.div 
        className='relative w-full h-64  rounded-2xl overflow-hidden'
      >
        <Image
          src={image}
          alt='imagen del servicio' 
          layout="fill"
          objectFit="cover"
          quality={100} 
        />
      </motion.div>
      <div className='py-3 px-3'>
        <div className='inline rounded-full border border-black px-2 uppercase font-medium text-sm'>
          {subtitle}
        </div>
        <p className='mt-3 text-xl font-semibold'>{title}</p>
      </div>
  </motion.div>
)

export default function ServicesSection() {
  
  return (
      <div className='flex flex-col gap-12'>
          <TitleSection
            content='Te ayudo a concretar tu proyecto de inversión en bienes raíces, brindando un acompañamiento integral y servicios personalizados' 
            alignment={"center"} 
          />
          <div>
          <h2 className='font-medium md:text-xl'>
            Simplifica tu inversión en inmuebles delegando todo el proceso: 
          </h2>
          <ul className='list-disc mt-5 md:text-lg'>
            {ServiceList.map((item, index) => (
              <li className='flex items-center gap-3 '>
                <div className='h-3 w-3 bg-[#2ccdff] rounded-full'></div>
                <p className=''>{item.title}</p>
              </li>
            ))}
          </ul>
          </div>
          <div>
            <Swiper
              spaceBetween={20}
              breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              450: {
                slidesPerView: 1.5,
              },
              720: {
                slidesPerView: 3,
              },
              960: {
                slidesPerView: 3.5,
              },
              1200: {
                slidesPerView: 4,
              },
          }}
        >
          {ServiceList.map((item, index) => (
            <SwiperSlide key={item.title} index={index} {...item}>
                <ServiceBox  key={item.title} index={index} {...item}/>
            </SwiperSlide>
          ))}
            </Swiper>
          </div>

          <p className='text-secondary text-md md:text-xl mt-5 text-center'>
            Como Agente del Comprador, me dedico exclusivamente a la búsqueda de propiedades por encargo expreso de mis clientes compradores, ya sea que se encuentren en España o Italia al momento de la compra.
          </p>
      {/* Ventajas */}
      <div className=''>
        <h2 className='font-semibold text-2xl'>¿Por que contratar mis servicios?</h2>
        <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1,}}
          viewport={{ once: true }}
          className='pt-5 grid grid-cols-1 md:grid-cols-3 gap-5'
        >
            {AdvantageList.map( item => (
              <div key={item.title} className="flex flex-col gap-3 py-6 px-5">
                <div>{item.icon}</div>
                <h3 className={`font-bold text-xl`}>{item.title}</h3>
                <p className='text-base'>{item.description}</p>
              </div>
            ))}
        </motion.div>
      </div>

      {/* Call to action */}
        <div className="mt-5 flex justify-center">
          <PrimaryButton mode='light'> 
            <p className='text-base md:text-xl font-bold'>Proyectemos juntos</p>
          </PrimaryButton>
        </div>
      </div>


  )
}
