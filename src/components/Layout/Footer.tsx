import React from 'react'
import SectionWraper from './SectionWraper'
import { EmailIcon, InstagramIcon, LinkedinIcon, LogoIcon, WspIcon } from '../Icons'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-[#000] to-[#01080E] text-white'>
    <SectionWraper>
      <h1 className='my-6'><LogoIcon color={"white"} /></h1>
      <h2 className='font-semibold text-2xl w-full md:w-1/3'>Mi asesoría, tu rentabilidad. Invierte con confianza hoy mismo.</h2>
      <h3 className='font-normal text-base'>Martin Mariotti, 2023</h3>
      <div className='my-10 h-[2px] bg-gradient-to-r from-[#030E16] via-white to-[#030E16]'></div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='order-2 md:order-1 text-light text-sm mt-3 text-[#888]'>© 2023 Martin Mariotti. All rights reserved</p>
        <p className='order-1 md:order-2 '>martinmariotti.realestate@gmail.com</p>
      </div>
    </SectionWraper>
  </div>
  )
}
