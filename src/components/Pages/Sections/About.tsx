import TitleSection from '@/components/Layout/TitleSection'
import Image from 'next/image'
import React from 'react'
import Martin from "../../../../public/images/martinabout.png"
import { Lexend_Mega } from 'next/font/google'

const lexend = Lexend_Mega({ subsets: ['latin'] })


const Caracteristicas = [
    {
      title: "Enfoque",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M27.5 29.7917C28.7657 29.7917 29.7917 28.7657 29.7917 27.5C29.7917 26.2343 28.7657 25.2083 27.5 25.2083C26.2343 25.2083 25.2083 26.2343 25.2083 27.5C25.2083 28.7657 26.2343 29.7917 27.5 29.7917Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5 38.9583C33.8283 38.9583 38.9583 33.8283 38.9583 27.5C38.9583 21.1717 33.8283 16.0417 27.5 16.0417C21.1717 16.0417 16.0417 21.1717 16.0417 27.5C16.0417 33.8283 21.1717 38.9583 27.5 38.9583Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5 48.125C38.8909 48.125 48.125 38.8909 48.125 27.5C48.125 16.1091 38.8909 6.875 27.5 6.875C16.1091 6.875 6.875 16.1091 6.875 27.5C6.875 38.8909 16.1091 48.125 27.5 48.125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Valores",
      description: "Mi enfoque es claro: tu satisfacción y seguridad son mi máxima prioridad. Trabajo arduamente para que encuentres la propiedad que se adapte a tus sueños y metas de inversión.",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M27.5 20.625V48.125M27.5 20.625C31.297 20.625 34.375 17.547 34.375 13.75C34.375 9.95304 31.297 6.875 27.5 6.875C23.703 6.875 20.625 9.95304 20.625 13.75C20.625 17.547 23.703 20.625 27.5 20.625ZM27.5 48.125C22.6377 48.125 17.9745 46.1935 14.5364 42.7553C11.0982 39.3171 9.16667 34.654 9.16667 29.7917M27.5 48.125C32.3623 48.125 37.0255 46.1935 40.4636 42.7553C43.9018 39.3171 45.8333 34.654 45.8333 29.7917M48.125 29.7917H43.5417M11.4583 29.7917H6.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Mision",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M11.4583 32.0834H43.5416L33.2291 21.7709L43.5416 11.4584H11.4583V48.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
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
      <div className='grid grid-cols-1 md:grid-cols-2 my-10 md:my-20'>
        {/* Imagen de Martin */}
        <div className=' flex justify-center'>
          <Image className='h-[300px] md:h-[400px] w-auto' src={Martin} alt='agente inmobiliario'/> 
        </div>
        {/* Texto sobre Martin */}
        <div className='flex flex-col justify-center items-start py-14'>
          <p className='text-lg md:text-xl font-light'>
            ¡Bienvenido/a! Soy <span className='font-semibold'>Martin Mariotti</span>, un Agente del Comprador con un enfoque único y dedicado en el mundo inmobiliario. Mi pasión y compromiso son ayudar a mis clientes a encontrar la propiedad perfecta, sin importar dónde se encuentren en el mundo.
            Como Agente del Comprador, mi objetivo es representar y proteger los intereses de mis clientes en todo momento. Me especializo en la búsqueda de propiedades por encargo expreso, asegurándome de que cada cliente reciba una atención personalizada y un servicio de calidad.    
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3	gap-3'>
        {Caracteristicas.map(item => (
          <div key={item.title} className=" flex flex-col gap-3 py-6 px-5 border-2 border-[#292929]">
            <div>{item.icon}</div>
            <h3 className={`${lexend.className} uppercase text-md`}>{item.title}</h3>
            <p className='text-sm'>{item.description}</p>
          </div>
            ))}
      </div>
    </div>
  )
}
