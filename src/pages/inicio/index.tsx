import React from 'react'
import { motion } from 'framer-motion'
import { Merriweather,Inter, Lexend_Mega } from 'next/font/google'
import OfertSection from '@/components/Pages/Sections/OfertSection'
import BlogSection from '@/components/Pages/Sections/BlogSection'
import HeaderSection from '@/components/Pages/Sections/HeaderSection'
import SectionWraper from '@/components/Layout/SectionWraper'
import Footer from '@/components/Layout/Footer'
import AboutSection from '@/components/Pages/Sections/About'
import ServicesSection from '@/components/Pages/Sections/ServicesSection'
import CredentialsSection from '@/components/Pages/Sections/Credentials'
import ContactSection from '@/components/Pages/Sections/ContactSection'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {

  return (
    <motion.div
        className={` min-h-screen overflow-y-hidden ${inter.className}`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <HeaderSection/>
      <OfertSection/>
      <div className=' bg-[#020202] text-white py-10'>
        <SectionWraper>
          <AboutSection/>
          <ServicesSection/>
        </SectionWraper>
      </div>
      <BlogSection/>
      <ContactSection/>
      {/* <CredentialsSection/> */}
      <Footer/>
    </motion.div>
  )
}
