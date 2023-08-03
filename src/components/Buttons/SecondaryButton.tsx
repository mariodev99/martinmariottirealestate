import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SecondaryButton({children}:any ){
  return (
    <button className={`${inter.className} text-primary font-semibold py-2 rounded-xl h-full px-5 border-2 border-primary hover:bg-primary hover:text-white`}>{children}</button>

  )
}
