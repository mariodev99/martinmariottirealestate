import TitleSection from '@/components/Layout/TitleSection'
import Image from 'next/image'
import React from 'react'
import Martin from "../../../../public/images/martinabout.png"
import { Lexend_Mega } from 'next/font/google'
import { Characteristics } from '@/components/Accordion/AccordionCharacteristics'
import { EnfoqueIcon, MisionIcon, ValoresIcon } from '@/components/Icons'

const lexend = Lexend_Mega({ subsets: ['latin'] })

export interface CharacteristicsProps {
  title: string
  description: string
  icon: React.ReactNode
}

const Caracteristicas:CharacteristicsProps[] = [
    {
      title: "Enfoque",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
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
            alignment={"start"} 
            subtitle="Asesora inmobiliaria profesional y Property Manager. Trabajo en San Sebastián pero brindo servicios en todo el territorio español."
      />
      {/* Sobre mi */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Imagen de Martin */}
        <div className=' flex justify-center'>
          <Image className='h-[200px] md:h-[400px] w-auto' src={Martin} alt='agente inmobiliario'/> 
        </div>
        {/* Texto sobre Martin */}
        <div className='flex flex-col justify-center items-start py-14'>
          <p className='text-lg md:text-xl font-light'>
            ¡Bienvenido/a! Soy <span className='font-semibold'>Martin Mariotti</span>, un Agente del Comprador con un enfoque único y dedicado en el mundo inmobiliario. Mi pasión y compromiso son ayudar a mis clientes a encontrar la propiedad perfecta, sin importar dónde se encuentren en el mundo.
            Como Agente del Comprador, mi objetivo es representar y proteger los intereses de mis clientes en todo momento. Me especializo en la búsqueda de propiedades por encargo expreso, asegurándome de que cada cliente reciba una atención personalizada y un servicio de calidad.    
          </p>
        </div>
      </div>

      {/* Caracteristicas Desktop */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3	gap-3 mt-10'>
        {Caracteristicas.map(item => (
          <div key={item.title} className=" flex flex-col gap-3 py-6 px-5 border-2 border-[#292929]">
            <div>{item.icon}</div>
            <h3 className={`${lexend.className} uppercase text-md`}>{item.title}</h3>
            <p className='text-sm'>{item.description}</p>
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
