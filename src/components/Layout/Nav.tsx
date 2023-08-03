import React, { useState } from 'react'
import { CloseIcon, Logo, LogoIcon, MenuIcon } from '../Icons'
import Link from 'next/link'
import { AnimatePresence, MotionValue, motion, useCycle, useMotionValueEvent, useScroll } from "framer-motion";
import PrimaryButton from '../Buttons/PrimaryButton';


const links = [
  { name: "Inicio", to: "/inicio", id: 1 },
  { name: "Oportunidades", to: "/inicio", id: 2 },
  { name: "Sobre mi", to: "/inicio", id: 3 },
  { name: "Servicios", to: "/servicios", id: 4 },
  { name: "Blog", to: "/blog", id: 5},
  { name: "Contacto", to: "/contacto", id: 6},
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: 0
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export const Nav = () => {

  const [open, cycleOpen] = useCycle(false, true);
  const { scrollY } = useScroll()
  const [backgroundNavColor, setBackgroundNavColor] = useState("transparent")

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ( latest > 50) {
      setBackgroundNavColor("white")
    }
    else {
      setBackgroundNavColor("transparent")
    }
 
    
  })


  return <>
    <motion.div 
      initial={{opacity: 0, y:-100}} 
      animate={{opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      style={{ backgroundColor: backgroundNavColor }}
      className='fixed w-full flex top-0 h-16 items-center z-40'
    >
      <div className="container flex mx-auto w-full justify-between px-3 items-center">
        <Logo/>
        <div className=' items-center justify-center flex-1 gap-8 hidden md:flex text-md font-regular uppercase'>
          <Link href={"/inicio"} className=''>Inicio</Link>
          <Link href={"/inicio"} className=''>Oportunidades</Link>
          <Link href={"/inicio"} className=''>Sobre mi</Link>
          <Link href={"/servicios"} className=''>Servicios</Link>
          <Link href={"/blog"} className=''>Blog</Link>
        </div>
        <div className='hidden md:flex'>
          <PrimaryButton mode='dark'>
            <Link href={"/contacto"} className='text-md'>Contacto</Link>
          </PrimaryButton>    
        </div>
        <button className='flex md:hidden' onClick={() => cycleOpen()}><MenuIcon/> </button>

      </div>
    </motion.div>

    {/* WRAPER */}
    <AnimatePresence>
        {open && (
          <motion.aside
            className='pl-6 bg-[#020202] fixed z-50 h-full'
            initial={{ width: 0 }}
            animate={{
              width: 330
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.3 }
            }}
          >
            <div className='flex justify-between my-5 pr-5'>
              <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              >
                <LogoIcon/>
              </motion.div>
              <motion.button exit={{opacity: 0}} className='' onClick={() => cycleOpen()}> <CloseIcon/></motion.button>
            </div>
            <motion.div
                className="flex flex-col gap-3 cursor-pointer"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.div
                    key={id}
                    whileHover={{backgroundColor: "#222" }}
                    variants={itemVariants}
                    className=' text-white font-bold text-4xl py-3'
                  >
                    <Link href={to}>
                    {name}
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
          </motion.aside>
        )}
    </AnimatePresence>
    </>
  
}


