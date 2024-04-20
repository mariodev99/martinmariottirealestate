import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import PrimaryButton from "../Buttons/PrimaryButton";

interface contactData {
  data: {
    contact_form: {
      title: string;
      name_label: string;
      email_label: string;
      message_label: string;
      callToAction: string;
      status_ok_message: string;
    };
  };
}

export default function ContactForm({ data }: contactData) {
  const [contact, setContact] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);

  const inputClassname =
    "rounded-full mt-2 px-4 py-2 text-lg  bg-[#0D0D0D] focus:outline-none placeholder:text-[#969696]";

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
    <form
      onSubmit={handleSubmit}
      className="order-1 md:order-2 flex flex-col gap-5 md:gap-10 text-white "
    >
      <h2 className="font-medium md:font-regular text-lg md:text-3xl">
        {data.contact_form.title}
      </h2>
      <div className="flex flex-col gap-5">
        <input
          placeholder={data.contact_form.name_label}
          onChange={handleChange}
          name="userName"
          required
          id="userName"
          type="text"
          className={inputClassname}
        />
        <input
          placeholder="E-mail"
          onChange={handleChange}
          required
          id="userEmail"
          name="userEmail"
          type="email"
          className={inputClassname}
        />
        <textarea
          placeholder={data.contact_form.message_label}
          onChange={handleChange}
          required
          className={`h-32 ${inputClassname} rounded-xl`}
          id="message"
          name="message"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="rounded-full w-full text-black transition-all duration-500 font-semibold py-3 px-7 bg-greenprimary h-14"
      >
        {/* Muestra un spinner si esta cargando, sino muestra "Mensaje Enviado en caso de" */}
        {sendMessageLoading ? (
          <div role="status">
            <span className="loader"></span>
          </div>
        ) : sendMessageSuccess ? (
          `${data.contact_form.status_ok_message}`
        ) : (
          `${data.contact_form.callToAction}`
        )}
      </motion.button>
      {/* <PrimaryButton>{data.contact_form.callToAction}</PrimaryButton> */}
    </form>
  );
}
