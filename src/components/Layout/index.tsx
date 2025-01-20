import React from "react";
import { Nav } from "./Nav";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Layout({ children }: any) {
  return (
    <div className={`relative z-10 ${jakarta.className}`}>
      <Nav />
      {children}
    </div>
  );
}
