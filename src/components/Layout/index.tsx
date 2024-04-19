import React from "react";
import { Nav } from "./Nav";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: any) {
  return (
    <div className={`relative z-10 ${inter.className}`}>
      <Nav />
      {children}
    </div>
  );
}
