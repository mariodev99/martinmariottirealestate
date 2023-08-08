import React from 'react'
import Image, { StaticImageData } from 'next/image'
import edificioImage from "../../../../public/images/edificio.jpg"
import SectionWraper from '@/components/Layout/SectionWraper'
import TitleSection from '@/components/Layout/TitleSection'
import PrimaryButton from '@/components/Buttons/PrimaryButton'


const BlogList = [
    {
      image: edificioImage,
      category: "Inversiones",
      date: "22 de Noviembre del 2022",
      title: "Administración de Propiedades: Gestión de Alquileres ",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: edificioImage,
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
        return (
          <div                   
          key={title} 
          className="relative text-white h-[28rem] flex flex-col justify-between gap-3 overflow-hidden"
        >
          <div 
            className='absolute w-full h-full brightness-50'
          >
            <Image
              src={image}
              alt='imagen del servicio' 
              layout="fill"
              objectFit="cover"
              quality={100} 
            />
          </div>
          <div     
            className='p-5 relative z-20 h-full flex flex-col justify-end'
          >
            <h3 className={`font-semibold text-lg h-20 md:h-16`}>{title}</h3>
            <a>Leer más</a>
          </div>
        </div>
        )
    }


  return (
    <SectionWraper>
      <TitleSection 
        content='Ultima informacion del sector inmobiliario' 
        subtitle='Blog' 
        alignment='center'
      />
      <div className='mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 md:px-10'>
        {BlogList.map(blog => (
          <Blog key={blog.title} {...blog} />
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
        <PrimaryButton mode='light'><p className='text-lg'>Ver blogs</p></PrimaryButton>
      </div>
    </SectionWraper>

  )
}
