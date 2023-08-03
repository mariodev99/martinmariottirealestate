import { EmailIcon, LocationIcon, PhoneIcon } from '@/components/Icons'
import SectionWraper from '@/components/Layout/SectionWraper'
import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'

export default function ContactSection() {
  return (
    <div className='py-10 md:py-20'>
        <SectionWraper>
            <TitleSection content='Contacto' alignment='center' subtitle='Hablemos sobre tus ideas e iniciemos un proyecto inmobiliario personalizado. Contáctame y trabajemos en hacer realidad tus planes.'/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='order-2 md:order-1 flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold'>Martin Mariotti, Real Estate Agent</h2>
                <div className='flex gap-3'>
                  <LocationIcon/>
                  <p>Barcelona, España</p>
                </div>
                <div className='flex gap-3'>
                  <EmailIcon/>
                  <p>martinmariotti.realestate@gmail.com</p>
                </div>
                <div className='flex gap-3'>
                  <PhoneIcon/>
                  <p>ESPAÑA (+12) 123 456 789</p>
                </div>
                <div className='flex gap-3'>
                  <PhoneIcon/>
                  <p>ITALIA (+12) 123 456 789</p>
                </div>
              </div>


              {/* Formulario */}
              <form className='order-1 md:order-2 flex flex-col gap-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                  <input type='text' className='text-xl border-b-2 border-black focus:outline-none ' placeholder='Nombre'/>
                  <input type='text' className='text-xl border-b-2 border-black focus:outline-none ' placeholder='Apellido'/>
                </div>
                <input type='email' className='text-xl border-b-2 border-black focus:outline-none ' placeholder='Email'/>
                <input type='text' className='text-xl border-b-2 border-black focus:outline-none ' placeholder='Cuentame sobre tu proyecto...'/>
                <button 
                  type='submit' 
                  className='w-full bg-black text-white transition-all duration-500 font-medium py-3 h-full px-7'> 
                    Enviar mensaje
                  </button>
              </form>

            </div>
        </SectionWraper> 
    </div>
  )
}
