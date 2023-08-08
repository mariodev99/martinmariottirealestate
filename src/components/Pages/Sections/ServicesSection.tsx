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



const ServiceBox = ({title, image, index}:Service) => (
    <motion.div                   
      key={title} 
      className="relative text-white h-[28rem] flex flex-col justify-between gap-3 overflow-hidden"
    >
      {/* Image */}
      <motion.div 
        variants={itemAnimation}
        viewport={{ once: true }}
        className='absolute w-full h-full brightness-50'
      >
        <Image
          src={image}
          alt='imagen del servicio' 
          layout="fill"
          objectFit="cover"
          quality={100} 
        />
      </motion.div>
      <motion.div     
          initial={{opacity: 0}} 
          whileInView={{opacity: 1}} 
          viewport={{ once: true }}
          transition={{duration: 0.5}}  
          className='pt-2 px-5 relative z-20 h-full flex flex-col justify-between'
      >
        <div className='flex justify-end text-4xl font-light'>0{index+1}</div>
        <h3 className={`font-semibold text-xl md:text-lg h-20 md:h-14`}>{title}</h3>
      </motion.div>
  </motion.div>
)

export default function ServicesSection() {
  
  return (
    <div className='pt-20 '>
      <div className='px-5 container mx-auto flex flex-col gap-12'>
      <TitleSection
        content='Concreta tu proyecto de inversión en bienes raíces' 
        alignment={"center"} 
        subtitle="servicios y acompañamiento integral"
        />
        <p className='text-secondary text-xl mt-5'>
          Como Agente del Comprador, me dedico exclusivamente a la búsqueda de propiedades por encargo expreso de mis clientes compradores, ya sea que se encuentren en España o Italia al momento de la compra.
        </p>
          <h3 className='font-semibold text-2xl'>Delega todo el proceso y simplifica tu proyecto de inversion </h3>
        </div>

        <motion.div     
          variants={container}
          initial="hidden"
          whileInView="show" 
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10'
        >
            {ServiceList.map((item, index) => (
              <ServiceBox key={item.title} index={index} {...item}/>
            ))}
        </motion.div>

      {/* Ventajas */}
      <SectionWraper>

      <div className=''>
        <h2 className='font-semibold text-2xl'>¿Por que contratar mis servicios?</h2>
        <div className='pt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {AdvantageList.map( item => (
              <div key={item.title} className="flex flex-col gap-3 py-6 px-5">
                <div>{item.icon}</div>
                <h3 className={`font-bold text-xl`}>{item.title}</h3>
                <p className='text-base'>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <PrimaryButton mode='light'> 
          <p className='text-base md:text-xl font-bold'>Proyectemos juntos</p>
        </PrimaryButton>
      </div>
      </SectionWraper>

    </div>
  )
}
