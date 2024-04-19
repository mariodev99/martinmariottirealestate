import {
  CheckIcon,
  EmailIcon,
  LocationIcon,
  LogoIcon,
  PhoneIcon,
} from "@/components/Icons";
import TitleSection from "@/components/Layout/TitleSection";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactData from "../ContactForm/ContactData";
import Link from "next/link";

export default function ContactSection({ data }: any) {
  const [contact, setContact] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);

  const inputClassname =
    "rounded-xl mt-2 px-2 py-2 text-xl bg-[#ededed] focus:outline-none ";

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSendMessageLoading(true);

    emailjs
      .send("default_service", "template_7z09dl6", contact, "yKZW2OzLPewEgy9nB")
      .then(
        (response) => {
          // console.log("SUCCESS!", response.status, response.text);
          setSendMessageSuccess(true);
          setTimeout(() => {
            setSendMessageSuccess(false);
          }, 2000);
          setSendMessageLoading(false);
        },
        (err) => {
          console.log("FAILED", err);
        }
      );
  };

  return (
    <>
      <TitleSection content={data.title} alignment="start" />
      <Link
        href={"/blog"}
        className="text-[#4E4E4E] text-lg md:text-5xl mt-3 hidden md:flex gap-5 items-center group "
      >
        <h3 className="group-hover:text-white duration-75">
          martinmariotti.realestate@gmail.com
        </h3>
        <svg
          className="group-hover:rotate-45 duration-75"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M5.49761 32.7928C4.3411 33.9792 2.44176 34.0035 1.25531 32.847C0.0688717 31.6905 0.0446091 29.7911 1.20112 28.6047L5.49761 32.7928ZM30.311 0.000244204C31.9678 -0.02092 33.328 1.30496 33.3491 2.96168L33.694 29.9595C33.7152 31.6162 32.3893 32.9764 30.7326 32.9976C29.0758 33.0187 27.7156 31.6928 27.6945 30.0361L27.3879 6.03807L3.38989 6.34463C1.73317 6.36579 0.372973 5.03991 0.351811 3.38319C0.330649 1.72647 1.65653 0.366281 3.31325 0.345118L30.311 0.000244204ZM1.20112 28.6047L28.2011 0.905948L32.4976 5.09405L5.49761 32.7928L1.20112 28.6047Z"
            fill="#A5F83B"
          />
        </svg>
      </Link>
      <div className=" pb-10 mt-2 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactData contactData={data} />
        {/* Formulario */}
        <ContactForm data={data} />
      </div>
    </>
  );
}
