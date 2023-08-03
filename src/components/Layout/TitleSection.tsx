import React from 'react'
import { Merriweather,Inter, Lexend_Mega } from 'next/font/google'

interface TitleProps {
    content: string
    alignment: "start" | "end" | "center";
    subtitle?: string
}

const lexend = Lexend_Mega({ subsets: ['latin'] })

export default function TitleSection({content, alignment, subtitle}:TitleProps) {
  return (
    <div>
      <h2 className={` text-3xl md:text-5xl font-bold text-${alignment}`}>{content}</h2>
      <div className={`flex justify-${alignment} mb-20`}>
      {subtitle && 
      <p className={`pt-2 ${lexend.className} w-full md:w-3/4 uppercase text-sm md:text-md font-regular text-${alignment}`}>
        {subtitle}
      </p>}
      </div>
    </div>
  )
}
