import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ServiceImage1 from "@/../public/images/servicesImage1.jpg";
import ServiceImage2 from "@/../public/images/servicess2.jpg";
import ServiceImage3 from "@/../public/images/llavesEnMano.jpg";
import Image from "next/image";

interface AccordionItemProps {
  title: string;
  description: string;
  image: any;
}

const images = [ServiceImage1, ServiceImage2, ServiceImage3, ServiceImage1];

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F1F1F1] rounded-3xl overflow-hidden py-6 px-4">
      <motion.header
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-4 cursor-pointer"
      >
        <h3 className="text-lg md:text-2xl font-medium">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="flex justify-between flex-col md:flex-row "
          >
            <div className="px-4 text-sm md:text-lg">{description}</div>
            <div className="p-4 md:pt-0">
              <div className="w-full h-32 md:h-44 md:w-44 bg-gray-200 rounded-2xl relative overflow-hidden object-cover">
                <Image
                  alt="imagen del servicio"
                  src={image}
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export function ServicesItems({ process }: { process: any }) {
  return (
    <div className="w-full space-y-3">
      {process.map((item: any, index: number) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          description={item.description}
          image={images[index]}
        />
      ))}
    </div>
  );
}
