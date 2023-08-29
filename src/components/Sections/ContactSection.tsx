import { CheckIcon, EmailIcon, LocationIcon, LogoIcon, PhoneIcon } from '@/components/Icons'
import TitleSection from '@/components/Layout/TitleSection'
import React, { useState } from 'react'
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function ContactSection({data}:any) {
  const [contact, setContact] = useState({ userName:"", userEmail: "", message:"" });
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);

  const inputClassname = "rounded-xl mt-2 px-2 py-2 text-xl bg-[#ededed] focus:outline-none "

  const handleChange = (e:any) => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };

  const handleSubmit = (event:any) => {
    event.preventDefault()
    setSendMessageLoading(true)

    emailjs.send("default_service", "template_7z09dl6", contact, "yKZW2OzLPewEgy9nB")
		.then((response) => {
			// console.log("SUCCESS!", response.status, response.text);
      setSendMessageSuccess(true)
      setTimeout(() => {
        setSendMessageSuccess(false)
      }, 2000);
      setSendMessageLoading(false)
		}, 
    (err) => {
			console.log("FAILED", err);
		});
  }

  return (
        <>
          <TitleSection 
            content={data.title}
            alignment='center' 
          />
          <div className=' pb-10 mt-2 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='order-2 md:order-1 flex flex-col gap-3 bg-black text-white rounded-4xl px-5 py-14'>
                <div className=''>
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
            <ContactForm data={data}/>
          </div>
        </> 
  )
}
