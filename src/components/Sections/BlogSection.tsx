import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BlogList } from "@/db/BlogList";
import TitleSection from "@/components/Layout/TitleSection";
import { UpArrowIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// const serviceVariant = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       type: "spring"
//     }
//   },
// }

export default function BlogSection({ data }: any) {
  const router = useRouter();

  interface BlogData {
    image: StaticImageData;
    date: string;
    description: string;
    category: string;
    isSecondaryBlog?: boolean;
    title: string;
    color: string;
    position: number;
  }

  const Blog: React.FC<BlogData> = ({
    image,
    description,
    date,
    title,
    color,
    position,
  }) => {
    const order = position % 2;

    return (
      <>
        {/* Mobile Blog */}
        <div className="block md:hidden" onClick={() => router.push("/blog")}>
          <div className="flex  w-full text-white cursor-pointer">
            <div className="relative overflow-hidden w-20 h-20 rounded-s">
              <Image
                src={image}
                alt="imagen del servicio"
                fill={true}
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 bg-gradient-to-r from-[#0D0D0D] to-[#070707] pl-3 py-1 rounded-e">
              <h4 className=" line-clamp-2 font-medium mt-1">{title}</h4>
              {/* <p className="line-clamp-2 text-xs ">{description}</p> */}
              <p className="line-clamp-2 text-xs text-secondary">
                More information
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Blog */}
        <div
          onClick={() => router.push("/blog")}
          className="hidden md:flex flex-col gap-3 cursor-pointer"
        >
          <div
            className={`rounded-sm overflow-hidden brightness-75 relative w-full h-64 lg:h-72   ${
              order != 0 && "order-3 "
            } `}
          >
            <Image
              src={image}
              alt="imagen del servicio"
              layout="fill"
              objectFit="cover"
              quality={100}
              className=""
            />
          </div>
          <div
            className={`rounded-sm w-full h-64 lg:h-72 py-6 px-8 font-medium flex flex-col justify-between ${
              order == 0 && "text-white "
            }`}
            style={{ backgroundColor: color }}
          >
            <h3 className={`relative z-20  text-base md:text-lg `}>{title}</h3>
            <div className=" text-sm ">
              <p className="line-clamp-3  mb-3">{description}</p>
              <Link href={"/blog"}>Mas informacion</Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <TitleSection content={data.title} alignment="center" />
      <motion.div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 md:gap-3">
        {data.blogs.slice(0, 4).map((blog: any, index: number) => (
          <Blog
            key={blog.title}
            position={index}
            image={BlogList[index].image}
            {...blog}
          />
        ))}
      </motion.div>
    </>
  );
}
