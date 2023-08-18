import React from 'react'
import { motion } from 'framer-motion'
import headerImage from "../../../public/images/header2.jpg"
import Image from 'next/image'
import Footer from '@/components/Layout/Footer'
import { EmailIcon, LocationIcon, LogoIcon, PhoneIcon } from '@/components/Icons'
import contactImage from "../../../public/images/ContactPage.avif"
export default function ContactPage() {

  const inputClassname = "rounded-xl mt-1 px-2 py-1 text-xl bg-[#ededed] focus:outline-none "


  return (
    <motion.main
        className={` min-h-screen overflow-y-hidden`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className='w-full '>
          <div className='relative h-80 w-full flex justify-center '>
            <div className='relative z-20 pt-24'>
              <h1 className={` text-xl md:text-5xl font-bold text-center text-white`}>Contacto</h1>
              <h2 className={`pt-2  w-full text-white text-md md:text-2xl font-medium text-center`}>
              Contactame y hagamos realidad tu proyecto de inversión inmobiliario
              </h2>
            </div>
            <Image
            className='brightness-50'
              src={headerImage}
              alt='imagen del servicio' 
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          {/* se agrego px-10 y pb-10 */}
          <div className='px-10 pb-10 mt-2 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='order-2 md:order-1 flex flex-col gap-4 bg-black text-white rounded-4xl p-5'>
                <div className='mb-5'>
                  <LogoIcon color='#fff'/>
                  <h2 className=' text-2xl font-semibold'>Martin Mariotti, Real Estate Agent</h2>
                </div>
                <div className='text-md md:text-lg font-regular md:font-medium flex flex-col gap-4 mt-5 '>
                  <div className='flex gap-3'>
                    <LocationIcon color='#fff'/>
                    <p>Barcelona, España</p>
                  </div>
                  <div className='flex gap-3'>
                    <EmailIcon color='#fff'/>
                    <a href='mailto:martinmariotti.realestate@gmail.com'>martinmariotti.realestate@gmail.com</a>
                  </div>
                  <div className='flex gap-3'>
                    <PhoneIcon color='white'/>
                    <p>España (+34) 624250094</p>
                  </div>
                  <div className='flex gap-3'>
                    <PhoneIcon color='#fff'/>
                    <p>Italia  (+39) 3802056435</p>
                  </div>
                </div>

                <div className='relative overflow-hidden h-full w-full h-42 rounded-3xl bg-contactImage  bg-cover bg-no-repeat bg-center'>
                </div>
              </div>


              {/* Formulario */}
              <form className='order-1 md:order-2 flex flex-col gap-10 py-10 px-5 rounded-4xl bg-white shadow-lg'>
                <h2 className='font-medium md:font-semibold text-lg md:text-xl'>Enviame un mensaje y cuentame sobre tu proyecto</h2>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='font-semibold'>Nombre y apellido</label>
                    <input id='name' type='text' className={inputClassname}/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='email' className='font-semibold'>Email</label>
                  <input id='email' type='email' className={inputClassname}/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='message' className='font-semibold'>Mensaje</label>
                  <textarea className={`h-32 ${inputClassname}`} ></textarea>
                </div>
                <button 
                  type='submit' 
                  className='rounded-full w-full bg-black text-white transition-all duration-500 font-medium py-3 px-7'> 
                    Enviar mensaje
                </button>
              </form>

          </div>
        </div>
      <Footer/>
    </motion.main>
  )
}
