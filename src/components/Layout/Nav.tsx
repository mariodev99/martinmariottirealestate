import React, { useState } from 'react'
import { CloseIcon, Logo, LogoIcon, MenuIcon } from '../Icons'
import Link from 'next/link'
import { AnimatePresence, motion, useCycle, useMotionValueEvent, useScroll } from "framer-motion";
import {PrimaryButton} from '../Buttons/PrimaryButton';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from "react-scroll"
import SelectButton from '../Buttons/SelectButton';


const links = [
  { name: "Inicio", to: "/inicio", id: 1 },
  // { name: "Oportunidades", to: "/inicio", id: 2 },
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

// FIX
export const Nav = ({dataLang}:any) => {

  const router = useRouter()
  const [open, cycleOpen] = useCycle(false, true);
  const { scrollY } = useScroll()

  // console.log(router.pathname, "Base path")
  const [backgroundNavColor, setBackgroundNavColor] = useState("transparent")

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ( latest > 50) {
      setBackgroundNavColor("black")
    }
    else {
      setBackgroundNavColor("transparent")
    }
  })

  const handleRedirect = (link:string) => {
    router.push(link)
    cycleOpen()
  }

  // console.log(router.pathname, "Base path")

  const LogoWithAnimation = () => (
    <motion.div
    animate={{scale: backgroundNavColor === "black" ? 0.9 : 1 }}
  >
    <LogoIcon color={backgroundNavColor === "black" ? "#c0ff3f" : "white"} />
  </motion.div>
  )


  return <>
    <motion.div 
      initial={{opacity: 0, y:-100}} 
      animate={{opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      style={{ backgroundColor: backgroundNavColor }}
      className='fixed w-full flex top-0 h-16 items-center z-40'
    >
      <div className="container flex mx-auto w-full justify-between px-3 items-center ">
        <div className='hidden md:flex gap-3'>
          <LogoWithAnimation/>
          <motion.div
          style={{color: backgroundNavColor === "black" ? "white" : "white" }}
          animate={{opacity: backgroundNavColor === "black" ? 0 : 1, y:  backgroundNavColor === "black" ? -100 : 0 }}
          className='border-l-2 border-white pl-3'
          >
            <p className='uppercase text-xl font-normal'>Martin Mariotti</p>
            <p className='font-light'>Personal Shopper Inmobiliario</p>
          </motion.div>
        </div>
        <div className='block md:hidden'>
          <LogoWithAnimation/>
        </div>
        <div className={`items-center justify-center flex-1 gap-8 hidden md:flex text-base font-medium uppercase ${backgroundNavColor === "white" ? "text-dark" : "text-white"}`}>
          <Link href={"/inicio"} className='nav-link'>Inicio</Link>

          {router.pathname === "/inicio" ? 
          <div className='cursor-pointer nav-link'>
            <ScrollLink to="section_services" smooth={true} duration={500}>Servicios</ScrollLink>
          </div>
          :
          <Link href={"/inicio#section_services"} className='nav-link'>Servicios</Link>
          }

          {router.pathname === "/inicio" ? 
          <div className='cursor-pointer nav-link'>
            <ScrollLink to="section_about_me" smooth={true} duration={500}>Sobre mi</ScrollLink>
          </div>
          :
          <Link href={"/inicio#section_about_me"} className='nav-link'>Sobre mi</Link>
          }

          <Link href={"/blog"} className='nav-link'>Blog</Link>

          <Link href={"/contacto"} className='nav-link'>Contacto</Link>

        </div>
        <div className='hidden md:flex'>
          <SelectButton />          
        </div>
        <button className='flex md:hidden' onClick={() => cycleOpen()}><MenuIcon color={backgroundNavColor === "white" ? "#000" : "#fff"}/></button>
      </div>
    </motion.div>

    {/* WRAPER */}
    <AnimatePresence>
        {open && (
          <motion.aside
            className='pl-6 bg-[#020202] fixed z-50 h-screen'
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
                <LogoIcon color='#c0ff3f'/>
              </motion.div>
              <motion.button exit={{opacity: 0}} className='' onClick={() => cycleOpen()}> <CloseIcon/></motion.button>
            </div>
            <motion.div
                className="flex flex-col gap-3 cursor-pointer mt-10"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.div
                    whileHover={{ color: "#c0ff3f"}}
                    key={id}
                    variants={itemVariants}
                    className='text-center text-white font-medium text-3xl py-2'
                    onClick={() => handleRedirect(to)}
                  >
                    {name}
                  </motion.div>
                ))}
            </motion.div>

            <motion.div 
              initial={{opacity: 0}} 
              animate={{opacity: 1}}
              exit={{opacity: 0}} 
              className='flex flex-col gap-5'
            >
              <SelectButton />          
              <p className=' text-xs text-secondary text-center text-regular'>Martin Mariotti, Real Estate Agent</p>
            </motion.div>

          </motion.aside>
        )}
    </AnimatePresence>
    </>
  
}


