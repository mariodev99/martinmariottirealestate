import React, { useEffect } from 'react'
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
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  const router = useRouter();


  useEffect(() => {
    if (router.asPath.includes('#section_about_me')) {
      const targetElement = document.getElementById('section_about_me');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <motion.div
        className={` min-h-screen overflow-y-hidden ${inter.className} scroll-smooth	`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <HeaderSection/>
      <SectionWraper>
        <ServicesSection/>
      </SectionWraper>
      <div id='section_about_me'>
      
      <SectionWraper>
        <AboutSection/>
      </SectionWraper>
      </div>
      <SectionWraper>
        <BlogSection/>
      </SectionWraper>
      <SectionWraper>
        <ContactSection/>
      </SectionWraper>
      {/* <CredentialsSection/> */}
      <Footer/>
    </motion.div>
  )
}
