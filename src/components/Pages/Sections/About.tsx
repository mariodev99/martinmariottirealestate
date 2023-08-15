import TitleSection from '@/components/Layout/TitleSection'
import Image from 'next/image'
import React from 'react'
import Martin from "../../../../public/images/martinabout.png"
import { Characteristics } from '@/components/Accordion/AccordionCharacteristics'
import { EnfoqueIcon, MisionIcon, ValoresIcon } from '@/components/Icons'
import { motion } from 'framer-motion'

export interface CharacteristicsProps {
  title: string
  description: string
  icon: React.ReactNode
}

const Caracteristicas:CharacteristicsProps[] = [
    {
      title: "Enfoque",
      description: "Mi enfoque es simple: tu éxito inmobiliario. Me esforzare por superar las expectativas al proporcionar una experiencia de búsqueda y compra excepcionalmente personalizada y orientada a resultados.",
      icon:  <EnfoqueIcon/>
    },
    {
      title: "Valores",
      description: "Estoy comprometido con la ética profesional, la transparencia y la honestidad en cada interacción. Mis valores me impulsan a priorizar el bienestar de mis clientes y a establecer relaciones basadas en la confianza mutua.",
      icon:  <ValoresIcon/>
    },
    {
      title: "Mision",
      description: "Mi misión es ser el aliado inmobiliario confiable y dedicado guiandote hacia la propiedad ideal, proporcionando un servicio personalizado y garantizando su satisfacción en cada paso del proceso de compra.",
      icon: <MisionIcon/>
    },
  ]

export default function AboutSection() {
  return (
    <div >
      <TitleSection 
        content='Conoce mi perfil profesional' 
        alignment='center' 
      />
      {/* Sobre mi */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-20'>
        {/* Imagen de Martin */}
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1,}}
          viewport={{ once: true }}
          className=' flex justify-center items-center order-2 md:order-1'
        >
          <Image className='h-full md:h-[400px] w-auto rounded-2xl' src={Martin} alt='agente inmobiliario'/> 
        </motion.div>
        {/* Texto sobre Martin */}
        <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1,}}
          viewport={{ once: true }}
          className='order-1 md:order-2 flex flex-col justify-center items-start py-8 gap-5 text-base md:text-lg font-regular'
        >
          <p className=''>
            Formado en administración y dirección de empresa como así también especializado en agente e inversor inmobiliario, acompaño a mis clientes de manera integral para ayudarlos a hacer realidad sus proyectos de inversión inmobiliaria.
            Ya sea que desee comprar o vender, en España o Italia estoy aquí para guiarlo en cada paso del camino, asegurándole una experiencia tranquila y sin estrés.
            <br/>
          </p>
          <p className='hidden md:block'>
          La atención al detalle y el bienestar de mis clientes y mis colaboradores me convierten en el socio ideal para todas sus necesidades inmobiliarias.
          ¡Embarquémonos juntos en esta aventura y hagamos realidad sus sueños inmobiliarios!
          </p>
        </motion.div>
      </div>

      {/* Caracteristicas Desktop */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3	gap-3 mt-10'>
        {Caracteristicas.map(item => (
          <div key={item.title} className=" flex flex-col gap-3 py-6 px-5 items-center">
            <div>{item.icon}</div>
            <h3 className={` text-lg font-bold`}>{item.title}</h3>
            <p className='text-sm md:text-base text-center text-white'>{item.description}</p>
          </div>
        ))}
      </div>
      
      {/* Caracteristicas Mobile */}
      <div className='block md:hidden mt-8'>
        <Characteristics characteristics={Caracteristicas} />
      </div>
    </div>
  )
}
