import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionWraper from "@/components/Layout/SectionWraper";
import headerImage from "../../../public/images/header.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "../Common/Slider";
import HeaderTitle from "./HeaderTItle";

const HEADER_INFORMATION = {
  title: "Invierte en inmuebles de españa o italia, de forma",
  subtitle:
    "Crea tu patrimonio inmobiliario inviertiendo en los inmuebles de mayor rentabilidad con total seguridad y tranquilidad",
  callToAction: "Concreta tu proyecto",
};

const wordVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeaderSection({ data }: any) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === data.words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const Background = () => (
    <div className="absolute w-full h-full brightness-[0.5] ">
      <Image
        className="bg-top"
        src={headerImage}
        alt="edificios"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
  );

  return (
    <div className="relative flex items-center pt-0 h-screen w-full">
      {/* bg-[url('/images/header2.jpg')] bg-right bg-cover  */}
      <div className="absolute w-full h-full brightness-[0.5] ">
        <Image
          className="bg-top"
          src={headerImage}
          alt="edificios"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="h-20 w-full absolute bottom-0 rotate-1 pt-14">
        <Slider />
      </div>
      <SectionWraper>
        <div className="relative flex items-center pt-0 h-screen w-full">
          {/* <div className="h-20 w-full absolute bottom-0 rotate-1 pt-14">
            <Slider />
          </div> */}
          <HeaderTitle data={data} />
        </div>
      </SectionWraper>
    </div>
  );
}
