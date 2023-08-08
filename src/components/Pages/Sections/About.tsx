import TitleSection from '@/components/Layout/TitleSection'
import Image from 'next/image'
import React from 'react'
import Martin from "../../../../public/images/martinabout.png"
import { Lexend_Mega, Inter } from 'next/font/google'
import { Characteristics } from '@/components/Accordion/AccordionCharacteristics'
import { EnfoqueIcon, MisionIcon, ValoresIcon } from '@/components/Icons'

const lexend = Lexend_Mega({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export interface CharacteristicsProps {
  title: string
  description: string
  icon: React.ReactNode
}

const Caracteristicas:CharacteristicsProps[] = [
    {
      title: "Enfoque",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en...",
      icon:  <EnfoqueIcon/>
    },
    {
      title: "Valores",
      description: "Mi enfoque es claro: tu satisfacción y seguridad son mi máxima prioridad. Trabajo arduamente para que encuentres la propiedad que se adapte a tus sueños y metas de inversión.",
      icon:  <ValoresIcon/>
    },
    {
      title: "Mision",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
      icon: <MisionIcon/>
    },
  ]

export default function AboutSection() {
  return (
    <div>
            <TitleSection 
              content='Conoce mi perfil profesional' 
              subtitle='Sobre mí'
              alignment='center' 
            />
      {/* Sobre mi */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-20'>
        {/* Texto sobre Martin */}
        <div className='flex flex-col justify-center items-start py-14 gap-5'>
          <p className='text-lg md:text-lg font-regular'>
            Formado en administración y dirección de empresa como así también especializado en agente e inversor inmobiliario, acompaño a mis clientes de manera integral para ayudarlos a hacer realidad sus proyectos de inversión inmobiliaria.
            Ya sea que desee comprar o vender, en España o Italia estoy aquí para guiarlo en cada paso del camino, asegurándole una experiencia tranquila y sin estrés.
            <br/>
            La atención al detalle y el bienestar de mis clientes y mis colaboradores me convierten en el socio ideal para todas sus necesidades inmobiliarias.
            ¡Embarquémonos juntos en esta aventura y hagamos realidad sus sueños inmobiliarios!
          </p>
        </div>
        {/* Imagen de Martin */}
        <div className=' flex justify-center items-center'>
          <Image className='h-[200px] md:h-[400px] w-auto' src={Martin} alt='agente inmobiliario'/> 
        </div>
      </div>

      {/* Caracteristicas Desktop */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3	gap-3 mt-10'>
        {Caracteristicas.map(item => (
          <div key={item.title} className=" flex flex-col gap-3 py-6 px-5 items-center">
            <div>{item.icon}</div>
            <h3 className={`${inter.className} uppercase text-lg font-bold`}>{item.title}</h3>
            <p className='text-sm md:text-base text-center text-secondary'>{item.description}</p>
          </div>
        ))}
      </div>
      
      {/* Caracteristicas Mobile */}
      <div className='block md:hidden'>
        <Characteristics characteristics={Caracteristicas} />
      </div>
    </div>
  )
}
