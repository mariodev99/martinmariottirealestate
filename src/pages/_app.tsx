import Layout from '@/components/Layout'
import "swiper/css";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {  AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import { useRouter } from 'next/router'
import { useEffect } from 'react';

// FIX
export default function App({ Component, pageProps, navData }: AppProps & any) {
  const router = useRouter()

  return (
    <Layout dataLang={navData}>
      <AnimatePresence  mode={"wait"}>
      <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export async function getStaticProps({locale}:any) {

  const response = await import (`../lang/${locale}.json`)
  
  return {
    props: {
      navData: response.default.nav,
    }
  }
}