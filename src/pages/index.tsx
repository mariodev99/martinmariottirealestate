import { Logo } from '@/components/Icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push("/inicio")
    }, 2500);
  }, [])


  return (
    <motion.div exit={{ opacity: 0}} className=' fixed z-50 flex bg-white h-screen w-full justify-center items-center '>
      <motion.div  initial={{ opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{ duration: 1, type: "spring"}} exit={{ scale: 0}}>
        <Logo/>
      </motion.div>
    </motion.div>
  )
}
