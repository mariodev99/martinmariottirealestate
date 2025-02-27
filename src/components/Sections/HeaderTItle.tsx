"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const wordVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeaderTitle({ data }: { data: any }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === data.words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative text-white w-full overflow-x-hidden px-5">
      <div className="flex flex-col gap-10">
        <div className="text-4xl md:text-8xl font-bold">
          <h1 className={`text-center  tracking-wide`}>
            {data.title}
            <br></br>
            {data.words.map((word: string, index: number) => (
              <motion.span
                className="text-center flex justify-center w-full absolute text-greenprimary pr-8"
                key={index}
                variants={wordVariants}
                initial="hidden"
                animate={index === currentWordIndex ? "visible" : "hidden"}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
        <h2
          className={`text-base md:text-xl text-center font-medium mt-5 md:mt-20`}
        >
          {data.subtitle}
        </h2>
        <div className="flex justify-center">
          <Link href={"/contacto"} className="w-full md:max-w-lg ">
            <div className=" flex justify-between items-center p-1  bg-greenprimary text-black rounded-full text-lg  ">
              <div className=" font-semibold w-full md:w-auto pl-4">
                {data.callToAction}
              </div>
              <div className="bg-black h-12 w-12 rounded-full flex justify-center items-center">
                <ArrowRight color="white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
