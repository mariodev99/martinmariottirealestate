import React from 'react'
import { Merriweather,Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
  mode: "dark" | "light"
}


export default function PrimaryButton({children, mode}:Props ){
  return (
    <button 
      className={`
        w-full
        md:w-auto
        transition-all 
        duration-500 
        ${inter.className}  
        ${mode === "dark" ? "text-white" : "text-black"}
        ${mode === "dark" ? "bg-black" : "bg-white"}
        font-medium 
        py-3
        h-full 
        px-7`
      }
    >
      {children}
    </button>
  )
}
