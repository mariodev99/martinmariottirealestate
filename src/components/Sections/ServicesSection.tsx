import TitleSection from "@/components/Layout/TitleSection";
import React from "react";
import { ServiceList } from "@/db/Services";
import { AdvantageList } from "@/db/Advantages";
import Image from "next/image";
import { motion } from "framer-motion";
import { Service } from "@/db/Services";
import { SwiperSlide, Swiper } from "swiper/react";
// import ServiceImage1 from "@/../public/images/servicesImage1.jpg";
// import ServiceImage2 from "@/../public/images/servicess2.jpg";
// import ServiceImage3 from "@/../public/images/llavesEnMano.jpg";
import { ServicesItems } from "../Accordion/AccordionItem";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const serviceVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
};

const MostrarProceso = (data: any) => {
  const ServiceBox = ({ title, image, subtitle }: Service) => (
    <motion.div
      className="flex flex-col justify-between"
      variants={serviceVariant}
    >
      <div className="mb-4 pt-1">
        <div className="inline rounded-full border border-greenprimary px-3 py-1 font-normal text-sm text-greenprimary">
          {subtitle}
        </div>
      </div>
      {/* Image */}
      <motion.div className="relative w-full h-72 overflow-hidden rounded">
        <Image
          src={image}
          alt="imagen del servicio"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <div className="py-3 ">
        <p className="mt-0 text-lg ">{title}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      <h2 className="font-regular text-lg md:text-2xl">{data.subtitle2}</h2>

      <div>
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            450: {
              slidesPerView: 1.5,
            },
            720: {
              slidesPerView: 3,
            },
            960: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {data.proccess.map((item: any, index: number) => (
            <SwiperSlide key={item.title} index={index} {...item}>
              <ServiceBox
                index={index}
                title={item.title}
                subtitle={item.subtitle}
                image={ServiceList[index].image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

const MostrarVentajas = (data: any) => (
  <>
    <div className="flex flex-col items-center w-full gap-10 mb-10 ">
      <div className="text-center md:text-center w-full">
        <TitleSection content={data.advantage_title} alignment={"center"} />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-5 md:mt-0"
      >
        {data.advantages.map((item: any, index: number) => (
          <div
            key={item.title}
            className=" py-7 px-5 border border-[#181818] flex flex-col gap-3 rounded"
          >
            <div>{AdvantageList[index].icon}</div>
            <h3 className=" text-lg mt-4">{item.title}</h3>
            <p className="text-[#AEAEAE] text-sm">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </>
);

export default function ServicesSection({ data }: any) {
  return (
    <div className="flex flex-col gap-12  mt-10 md:mt-24">
      <h2 className="text-2xl md:text-5xl leading-tight">{data.subtitle}</h2>
      <ServicesItems process={data.process} />
    </div>
  );
}
