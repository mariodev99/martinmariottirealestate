import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "../Icons";

interface Props {
  children: React.ReactNode;
}

export const PrimaryButton = ({ children }: Props) => {
  return (
    <motion.button
      className={`
        w-full
        md:w-auto
        rounded-full
        text-black        
        font-semibold 
        bg-greenprimary       
        p-1.5
        pl-7
        flex
        justify-between
        gap-3
        items-center
        justify-center
        text-base
        `}
    >
      {children}
      <div className="p-2 bg-black rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM22.1375 13.0607C22.7233 12.4749 22.7233 11.5251 22.1375 10.9393L12.5915 1.3934C12.0057 0.807612 11.056 0.807612 10.4702 1.3934C9.88442 1.97918 9.88442 2.92893 10.4702 3.51472L18.9555 12L10.4702 20.4853C9.88442 21.0711 9.88442 22.0208 10.4702 22.6066C11.056 23.1924 12.0057 23.1924 12.5915 22.6066L22.1375 13.0607ZM2 13.5H21.0768V10.5H2V13.5Z"
            fill="white"
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default PrimaryButton;
