import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { ServiceList } from '@/db/Services'
import { AdvantageList } from '@/db/Advantages'
import Image from 'next/image'
import SectionWraper from '@/components/Layout/SectionWraper'
import { motion } from 'framer-motion'
import { Service } from '@/db/Services'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  }
}

const itemAnimation = {
  hidden: { y: 600, opacity: 0 },
  show: { y: 0, opacity: 1,     
    transition: {
      duration: 1,
    },
  }
}



const ServiceBox = ({title, image, index, subtitle}:Service) => (
    <motion.div                   
      className="bg-white flex flex-col justify-between rounded-2xl shadow-xl "
    >
      <div className='py-5 px-3'>
        <div className='inline rounded-full border border-black px-2 uppercase font-medium text-sm'>
          {subtitle}
        </div>
        <p className='mt-5 text-xl font-semibold'>{title}</p>
      </div>
      {/* Image */}
      <motion.div 
        // variants={itemAnimation}
        // viewport={{ once: true }}
        className='relative w-full h-40  rounded-2xl overflow-hidden'
      >
        <Image
          src={image}
          alt='imagen del servicio' 
          layout="fill"
          objectFit="cover"
          quality={100} 
        />
      </motion.div>

  </motion.div>
)

export default function ServicesSection() {
  
  return (
    <SectionWraper>
      <div className='flex flex-col gap-12'>
          <TitleSection
            content='Concreta tu proyecto de inversión en bienes raíces' 
            alignment={"center"} 
            subtitle="servicios y acompañamiento integral"
          />
          <p className='text-secondary text-md md:text-xl mt-5'>
            Como Agente del Comprador, me dedico exclusivamente a la búsqueda de propiedades por encargo expreso de mis clientes compradores, ya sea que se encuentren en España o Italia al momento de la compra.
          </p>
          {/* Servicios */}
          <div>
            <h3 className='font-semibold text-lg md:text-2xl'>Delega todo el proceso y simplifica tu proyecto de inversion </h3>
            <motion.div     
              variants={container}
              initial="hidden"
              whileInView="show" 
              className='pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'
              >
                {ServiceList.map((item, index) => (
                  <ServiceBox key={item.title} index={index} {...item}/>
                  ))}
            </motion.div>
          </div>

      {/* Ventajas */}
      <div className=''>
        <h2 className='font-semibold text-2xl'>¿Por que contratar mis servicios?</h2>
        <div className='pt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {AdvantageList.map( item => (
              <div key={item.title} className="flex flex-col gap-3 py-6 px-5">
                <div>{item.icon}</div>
                <h3 className={`font-bold text-xl`}>{item.title}</h3>
                <p className='text-base'>{item.description}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Call to action */}
        <div className="mt-5 flex justify-center">
          <PrimaryButton mode='light'> 
            <p className='text-base md:text-xl font-bold'>Proyectemos juntos</p>
          </PrimaryButton>
        </div>
      </div>

    </SectionWraper>

  )
}
