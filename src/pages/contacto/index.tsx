import React from 'react'
import { motion } from 'framer-motion'
import headerImage from "../../../public/images/header2.jpg"
import Image from 'next/image'
import Footer from '@/components/Layout/Footer'
import { EmailIcon, LocationIcon, LogoIcon, PhoneIcon } from '@/components/Icons'
import contactImage from "../../../public/images/ContactPage.avif"
import ContactForm from '@/components/ContactForm/ContactForm'


export default function ContactPage(props:any) {

  const inputClassname = "rounded-xl mt-1 px-2 py-1 text-xl bg-[#ededed] focus:outline-none "


  return (
    <motion.main
        className={` min-h-screen overflow-y-hidden`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className='w-full '>
          <div className='relative h-64 w-full flex justify-center '>
            <div className='relative z-20 pt-24 w-3/4'>
              <h1 className={` text-xl md:text-3xl font-semibold text-center text-white`}>
                Contactame y hagamos realidad tu proyecto de inversión inmobiliario
              </h1>
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

          <div className='px-10 pb-10 mt-2 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='order-2 md:order-1 flex flex-col gap-4 bg-black text-white rounded-4xl px-5 py-10'>
                <div className='mb-3'>
                  <LogoIcon color='#fff'/>
                  <h2 className=' text-2xl font-semibold'>Martin Mariotti, Personal Shopper Inmobiliario</h2>
                </div>
                <div className='text-md md:text-lg font-regular md:font-medium flex flex-col gap-4 mt-5 '>
                  <div className='flex gap-3'>
                    <LocationIcon color='#fff'/>
                    <p>Barcelona, España</p>
                  </div>
                  <div className='flex gap-3'>
                    <EmailIcon color='#fff'/>
                    <a href='mailto:martinmariotti.realestate@gmail.com'>martinmariotti.realestate</a>
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
              <ContactForm data={props.contactData}/>

          </div>
        </div>
      <Footer/>
    </motion.main>
  )
}

export async function getStaticProps({locale}:any) {

  const response = await import (`../../lang/${locale}.json`)
  
  return {
    props: {
      contactData: response.default.contact,
    }
  }
}
