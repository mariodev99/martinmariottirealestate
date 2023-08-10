import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { CharacteristicsProps } from "../Pages/Sections/About";
import { DownArrowIcon } from "../Icons";


interface CharacteristicsGeneralProps {
  characteristics: CharacteristicsProps[]
}

interface AccordionProps {
    i: number
    expanded: false | number
    setExpanded: (value: false | number) => void;
}

const Accordion = ({ i, expanded, setExpanded, title, description, icon }:AccordionProps & CharacteristicsProps) => {
    const isOpen = i === expanded;
  
    return (
      <>
        <motion.header
          className="cursor-pointer flex items-center justify-between px-4 py-2 rounded-xl shadow-lg"
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <div className={`text-lg font-semibold flex items-center gap-3`}>{icon}{title}</div>
          <motion.div
            animate={{ rotateZ: isOpen ? 180 : 0}}
          >
            <DownArrowIcon/>
          </motion.div>
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              className="px-2"
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {description}
            </motion.section>
          )}
        </AnimatePresence>
      </>
    );
  };


  
  export const Characteristics = ({characteristics}:CharacteristicsGeneralProps) => {
    const [expanded, setExpanded] = useState<false | number>(0);
  
    return (
    <div className=" px-4 flex flex-col gap-2">
      {characteristics.map((item, index) => (
        <Accordion key={item.title} i={index} expanded={expanded} setExpanded={setExpanded} {...item} />
      ))}
    </div>
    )
  };
  
  const accordionIds = [0, 1, 3];