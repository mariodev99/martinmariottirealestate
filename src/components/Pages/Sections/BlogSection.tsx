import React from 'react'
import { Merriweather,Inter } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'
import edificioImage from "../../../../public/images/edificio.jpg"
import SecondaryButton from '@/components/Buttons/SecondaryButton'
import SectionWraper from '@/components/Layout/SectionWraper'
import TitleSection from '@/components/Layout/TitleSection'
import PrimaryButton from '@/components/Buttons/PrimaryButton'


const merriweather = Merriweather({ subsets: ['latin'], weight: ["300", "400"] })
const inter = Inter({ subsets: ['latin'] })


const BlogList = [
    {
      image: edificioImage,
      category: "Inversiones",
      date: "22 de Noviembre del 2022",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: edificioImage,
        category: "inversiones",
        date: "22 de Noviembre del 2022",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: edificioImage,
        category: "inversiones",
        date: "22 de Noviembre del 2022",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]

export default function BlogSection() {


    interface BlogData {
        image: StaticImageData
        date: string
        description: string
        category: string
        isSecondaryBlog?: boolean
      }

    const Blog: React.FC<BlogData> = ({image, description, date, isSecondaryBlog, category}) => {
        return (
          <div className='border border-gray-100 flex flex-col w-full h-full p-6 shadow-xl gap-4'>
            <div className={`relative  overflow-hidden w-full object-cover ${isSecondaryBlog ? "h-24 md:h-40" : "h-36 md:h-4/6"} `} >
            <Image
              src={image}
              alt={`Blog sobre ${description}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"/> 
            </div>
            <div className='px-3'>
            {!isSecondaryBlog && <p className='text-primary font-semibold my-5'>{category}</p>}
            <div className=' flex flex-1 items-center'>
              <p className={`${isSecondaryBlog ? "text-xs md:text-2xl" : "text-lg md:text-4xl"} font-medium`}>{description}</p>
            </div>
            {!isSecondaryBlog && <p className='text-sm md:text-md text-end text-secondary font-medium mt-7'>{date}</p>}

            </div>

          </div>
        )
    }


  return (
    <SectionWraper>
      <TitleSection content='Blog' subtitle='Ultima informacion del sector inmobiliario' alignment='center'/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-14 place-items-center h-auto md:h-blogsection'>
        <Blog {...BlogList[0]} isSecondaryBlog={false}/>
        <div className='grid grid-cols-2 md:grid-cols-1 h-full gap-2 md:gap-4'>
          <div className='h-full'>
            <Blog {...BlogList[1]} isSecondaryBlog={true}/>
          </div>
          <div className='h-full'>
            <Blog {...BlogList[1]} isSecondaryBlog={true}/>
          </div>      
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
        <PrimaryButton mode='light'><p className='text-lg'>Ver blogs</p></PrimaryButton>
      </div>
    </SectionWraper>

  )
}
