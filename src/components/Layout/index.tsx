import React from 'react'
import {Nav} from './Nav'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export default function Layout({children, dataLang}:any) {



  return (
    <div className='relative z-10 '>
        <Nav dataLang={dataLang}/>
        {children}
    </div>
  )
}
