import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import edificioImage from "../../../../public/images/edificio.jpg"
import Servicio2 from "../../../../public/images/Servicio2.jpg"

import SectionWraper from '@/components/Layout/SectionWraper'
import TitleSection from '@/components/Layout/TitleSection'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { DownArrowIcon, UpArrowIcon } from '@/components/Icons'
import { motion } from 'framer-motion'

const BlogList = [
    {
      image: edificioImage,
      category: "Inversiones",
      date: "22 de Noviembre del 2022",
      title: "Administración de Propiedades: Gestión de Alquileres ",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: Servicio2,
        category: "inversiones",
        date: "22 de Noviembre del 2022",
        title: "Planificar la inversión desde el inicio ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: edificioImage,
        category: "inversiones",
        date: "22 de Noviembre del 2022",
        title: "Tradicional forma de financiación ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: Servicio2,
      category: "inversiones",
      date: "22 de Noviembre del 2022",
      title: "Planificar la inversión desde el inicio 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
    // {
    //   image: edificioImage,
    //   category: "Inversiones",
    //   date: "22 de Noviembre del 2022",
    //   title: "",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // },
    // {
    //   image: edificioImage,
    //   category: "Inversiones",
    //   date: "22 de Noviembre del 2022",
    //   title: "",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    }
  }
  
  const serviceVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring"
      }
    },
  }
  
export default function BlogSection() {



    interface BlogData {
        image: StaticImageData
        date: string
        description: string
        category: string
        isSecondaryBlog?: boolean
        title: string
    }

    const Blog: React.FC<BlogData> = ({image, description, date, title }) => {

      const [isHover, setIsHover] = useState(false)

        return (
          <motion.div
            variants={serviceVariant}                
            className="group cursor-pointer relative w-full text-white flex flex-col justify-end h-32 md:h-96 overflow-hidden rounded-xl"
            onHoverStart={()=> setIsHover(true)}
            onHoverEnd={()=> setIsHover(false)}
          >
              <Image
                src={image}
                alt='imagen del servicio' 
                layout="fill"
                objectFit="cover"
                quality={100}
                className='group-hover:brightness-[0.4] brightness-[0.8] ease-in duration-100'
              />
            <div className='flex items-center px-5 py-2 relative z-20  gap-5'>
              <h3 className={`font-medium text-base`}>{title}</h3>
              <motion.div
                animate={{ rotateZ: isHover ? 45 : 0}}
              >
                <UpArrowIcon/>
              </motion.div>
            </div>
          </motion.div>
        )
    }


  return (
    <>
      <TitleSection 
        content='Ultima informacion del sector inmobiliario' 
        subtitle='Blog' 
        alignment='center'
      />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show" 
        viewport={{ once: true }}
        className='mt-14 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-3 md:px-10'
      >
        {BlogList.map(blog => (
          <Blog key={blog.title} {...blog} />
        ))}
      </motion.div>
    </>

  )
}
