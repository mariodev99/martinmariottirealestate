import React from 'react'
import SectionWraper from './SectionWraper'
import { EmailIcon, InstagramIcon, LinkedinIcon, LogoIcon, WspIcon } from '../Icons'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-[#000] to-[#01080E] text-white'>
    <SectionWraper>
      <h1 className='my-6'><LogoIcon /></h1>
      <h2 className='font-semibold text-2xl w-full md:w-1/3'>Mi asesoría, tu rentabilidad. Invierte con confianza hoy mismo.</h2>
      <h3 className='font-normal text-md'>Martin Mariotti, 2023</h3>
      <div className='my-10 h-[2px] bg-gradient-to-r from-[#030E16] via-white to-[#030E16]'></div>
      <div className=' flex justify-between items-center'>
        <p className='text-light text-sm'>© 2023 Martin Mariotti. All rights reserved</p>
        <div className='flex gap-4'>
        <p>martinmariotti.realestate@gmail.com</p>

          {/* <LinkedinIcon/>
          <WspIcon/>
          <InstagramIcon/> */}
        </div>
      </div>
    </SectionWraper>
  </div>
  )
}
