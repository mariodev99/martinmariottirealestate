import React from "react";
import { motion } from "framer-motion";

interface TitleProps {
  content: string;
  alignment: "start" | "end" | "center";
  subtitle?: string;
  // theme: "dark" | "light"
}

export default function TitleSection({ content, alignment }: TitleProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      style={{ overflow: "hidden" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col w-full items-${alignment} text-white`}
    >
      <h1 className={`text-3xl md:text-5xl text-medium text-${alignment} py-2`}>
        {content}
      </h1>
    </motion.div>
  );
}
