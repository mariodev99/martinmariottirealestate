import React from 'react'
import SectionWraper from './SectionWraper'
import { EmailIcon, InstagramIcon, LinkedinIcon, LogoIcon, WspIcon } from '../Icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-[#000] to-[#01080E] text-white'>
    <SectionWraper>
      <div className='grid grid-cols-1 md:grid-cols-2 py-6'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className=''><LogoIcon color={"#c0ff3f"} /></h1>
          <h2 className='font-semibold text-2xl'>Mi asesoría, tu rentabilidad. <br/> Invierte con confianza hoy mismo.</h2>
          <h3 className='font-normal text-base'>Martin Mariotti, 2023</h3>
        </div>
        <div className=' mt-5 flex flex-col gap-2 md:gap-4 text-lg md:text-xl justify-center items-start md:items-end'>
          <Link className='nav-link' href={"/contacto"}>Servicios</Link>
          <Link className='nav-link' href={"/contacto"}>Blog</Link>
          <Link className='nav-link' href={"/contacto"}>Sobre mi</Link>
          <Link className='nav-link' href={"/contacto"}>Contacto</Link>
        </div>
      </div>
      <div className='my-10 h-[2px] bg-gradient-to-r from-[#030E16] via-white to-[#030E16]'></div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='order-2 md:order-1 text-light text-sm mt-3 text-[#888]'>© 2023 Martin Mariotti. All rights reserved</p>
        <p className='order-1 md:order-2 text-greenprimary '> <a href='mailto:martinmariotti.realestate@gmail.com'>martinmariotti.realestate@gmail.com</a></p> 
      </div>
    </SectionWraper>
  </div>
  )
}
