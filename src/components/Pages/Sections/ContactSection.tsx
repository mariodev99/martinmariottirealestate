import { EmailIcon, LocationIcon, LogoIcon, PhoneIcon } from '@/components/Icons'
import SectionWraper from '@/components/Layout/SectionWraper'
import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'

export default function ContactSection() {
  return (
    <div className='py-10 '>
        <SectionWraper>
            <TitleSection 
              content='Ponte en contacto conmigo y hagamos realidad tu proyecto de inversión inmobiliario' 
              subtitle='Contacto'
              alignment='center' 
            />
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='order-2 md:order-1 flex flex-col gap-4'>
                <div className='mb-5'>
                  <LogoIcon color='#000'/>
                  <h2 className='mt-3 text-2xl font-semibold'>Martin Mariotti, Real Estate Agent</h2>
                </div>
                <div className='text-lg font-medium flex flex-col gap-4'>
                  <div className='flex gap-3'>
                    <LocationIcon/>
                    <p>Barcelona, España</p>
                  </div>
                  <div className='flex gap-3'>
                    <EmailIcon/>
                    <a href='mailto:martinmariotti.realestate@gmail.com'>martinmariotti.realestate@gmail.com</a>
                  </div>
                  <div className='flex gap-3'>
                    <PhoneIcon/>
                    <p>España (+34) 624250094</p>
                  </div>
                  <div className='flex gap-3'>
                    <PhoneIcon/>
                    <p>Italia  (+39) 3802056435</p>
                  </div>
                </div>
              </div>


              {/* Formulario */}
              <form className='order-1 md:order-2 flex flex-col gap-10'>
                <h2 className='font-semibold text-xl'>Enviame un mensaje y cuentame sobre tu proyecto</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                  <div>
                    <label htmlFor='name' className='font-semibold'>Nombre</label>
                    <input id='name' type='text' className='text-xl border-b-2 border-black focus:outline-none '/>
                  </div>
                  <div>
                  <label htmlFor='last_name' className='font-semibold'>Apellido</label>
                  <input id='last_name' type='text' className='text-xl border-b-2 border-black focus:outline-none '/>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='email' className='font-semibold'>Email</label>
                  <input id='email' type='email' className='text-xl border-b-2 border-black focus:outline-none '/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='message' className='font-semibold'>Mensaje</label>
                  <textarea className='h-32 text-xl border-b-2 border-black focus:outline-none ' ></textarea>
                </div>
                <button 
                  type='submit' 
                  className='rounded-full w-full bg-black text-white transition-all duration-500 font-medium py-3 h-full px-7'> 
                    Enviar mensaje
                </button>
              </form>

            </div>
        </SectionWraper> 
    </div>
  )
}
