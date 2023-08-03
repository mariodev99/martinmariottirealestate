import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'
import { Lexend_Mega } from 'next/font/google'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { CashIcon, SmileIcon, TimeIcon } from '@/components/Icons'

const lexend = Lexend_Mega({ subsets: ['latin'] })


const Servicios = [
    {
      title: "Reunion personalizada",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M27.5 29.7917C28.7657 29.7917 29.7917 28.7657 29.7917 27.5C29.7917 26.2343 28.7657 25.2083 27.5 25.2083C26.2343 25.2083 25.2083 26.2343 25.2083 27.5C25.2083 28.7657 26.2343 29.7917 27.5 29.7917Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5 38.9583C33.8283 38.9583 38.9583 33.8283 38.9583 27.5C38.9583 21.1717 33.8283 16.0417 27.5 16.0417C21.1717 16.0417 16.0417 21.1717 16.0417 27.5C16.0417 33.8283 21.1717 38.9583 27.5 38.9583Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5 48.125C38.8909 48.125 48.125 38.8909 48.125 27.5C48.125 16.1091 38.8909 6.875 27.5 6.875C16.1091 6.875 6.875 16.1091 6.875 27.5C6.875 38.8909 16.1091 48.125 27.5 48.125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Servicio 2",
      description: "Mi enfoque es claro: tu satisfacción y seguridad son mi máxima prioridad. Trabajo arduamente para que encuentres la propiedad que se adapte a tus sueños y metas de inversión.",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M27.5 20.625V48.125M27.5 20.625C31.297 20.625 34.375 17.547 34.375 13.75C34.375 9.95304 31.297 6.875 27.5 6.875C23.703 6.875 20.625 9.95304 20.625 13.75C20.625 17.547 23.703 20.625 27.5 20.625ZM27.5 48.125C22.6377 48.125 17.9745 46.1935 14.5364 42.7553C11.0982 39.3171 9.16667 34.654 9.16667 29.7917M27.5 48.125C32.3623 48.125 37.0255 46.1935 40.4636 42.7553C43.9018 39.3171 45.8333 34.654 45.8333 29.7917M48.125 29.7917H43.5417M11.4583 29.7917H6.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Servicio 3",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M11.4583 32.0834H43.5416L33.2291 21.7709L43.5416 11.4584H11.4583V48.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Servicio 4",
      description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M27.5 29.7917C28.7657 29.7917 29.7917 28.7657 29.7917 27.5C29.7917 26.2343 28.7657 25.2083 27.5 25.2083C26.2343 25.2083 25.2083 26.2343 25.2083 27.5C25.2083 28.7657 26.2343 29.7917 27.5 29.7917Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5 38.9583C33.8283 38.9583 38.9583 33.8283 38.9583 27.5C38.9583 21.1717 33.8283 16.0417 27.5 16.0417C21.1717 16.0417 16.0417 21.1717 16.0417 27.5C16.0417 33.8283 21.1717 38.9583 27.5 38.9583Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5 48.125C38.8909 48.125 48.125 38.8909 48.125 27.5C48.125 16.1091 38.8909 6.875 27.5 6.875C16.1091 6.875 6.875 16.1091 6.875 27.5C6.875 38.8909 16.1091 48.125 27.5 48.125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
  ]

  const Ventajas = [
    {
      title: "Ahorras tiempo",
      description: "No más horas perdidas frente al ordenador buscando en portales (sin saber muy bien qué) o visitando inmuebles que no tienen la documentación legal en orden. Deja todo eso en mis manos, especialmente si te encuentras fuera de España.",
      icon:  <TimeIcon/>
    },
    {
      title: "Ahorras preocupaciones",
      description: "Conmigo tendrás acompañamiento integral de principio a fin: desde antes de comenzar (obtención del NIE, apertura de cuenta bancaria, etc.), durante la búsqueda (hasta el cierre de la operación de compraventa) y después de finalizada la transacción, con servicios administrativos relacionados al traspaso de la propiedad, su registro, etc.",
      icon:  <SmileIcon/>
    },
    {
      title: "Ahorras dinero",
      description: "Una vez que hayamos encontrado el inmueble que quieres comprar, elaboraré una estrategia personalizada de negociación para ti. Te daré mi asesoramiento y consejo profesional y me encargaré de negociar en tu nombre para garantizar que comprarás la vivienda al mejor precio posible.",
      icon:  <CashIcon/>
    },
  ]


export default function ServicesSection() {
  return (
    <div className='pt-20 flex flex-col gap-10'>
      <TitleSection
        content='Mis servicios' 
        alignment={"center"} 
        subtitle="Me especializo en acompañar de manera integral a extranjeros en la búsqueda y compra de una propiedad en España o italia."
        />
      <div className='grid grid-cols-1 md:grid-cols-2	gap-5'>
        {Servicios.map(item => (
          <div key={item.title} className=" flex flex-col gap-3 py-6 px-5 border-t-4 border-[#292929]">
            <div>{item.icon}</div>
            <h3 className={`${lexend.className} uppercase text-xl`}>{item.title}</h3>
            <p className='text-lg'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Ventajas */}
      <div className=''>
        <h2 className='text-2xl font-bold'>¿Por que contratar mis servicios?</h2>
        <div className='pt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {Ventajas.map( item => (
              <div key={item.title} className="flex flex-col gap-3 py-6 px-5  bg-[#111]">
                <div>{item.icon}</div>
                <h3 className={`${lexend.className} uppercase text-lg`}>{item.title}</h3>
                <p className='text-md'>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className=" flex justify-center">
        <PrimaryButton mode='light'> 
          <p className='text-md md:text-xl font-bold'>Más informacion</p>
        </PrimaryButton>
      </div>
    </div>
  )
}
