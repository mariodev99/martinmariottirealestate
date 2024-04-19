import React from "react";
import { EmailIcon, LocationIcon, LogoIcon, PhoneIcon } from "../Icons";

export default function ContactData(props: any) {
  return (
    <div className="order-2 md:order-1 flex flex-col gap-4  text-white ">
      <div className="mb-3 flex items-center gap-5">
        <LogoIcon color="#A5F83B" width="50" height="50" />
        <h2 className="text-xl font-medium">
          Martin Mariotti <br /> Personal Shopper Inmobiliario
        </h2>
      </div>
      <div className="text-md md:text-lg font-regular md:font-medium flex flex-col gap-4 mt-5 ">
        <div className="flex gap-3">
          <LocationIcon color="#fff" />
          <p>{props.contactData.contact_data.location}</p>
        </div>
        {/* <div className="flex gap-3">
          <EmailIcon color="#fff" />
          <a
            className="truncate"
            href="mailto:martinmariotti.realestate@gmail.com"
          >
            martinmariotti.realestate@gmail.com
          </a>
        </div> */}
        <div className="flex gap-3">
          <PhoneIcon color="white" />
          <p>{props.contactData.contact_data.spain} (+34) 624250094</p>
        </div>
        <div className="flex gap-3">
          <PhoneIcon color="#fff" />
          <p>{props.contactData.contact_data.italy} (+39) 3802056435</p>
        </div>
      </div>

      {/* <div className="relative overflow-hidden h-full w-full h-42 rounded-3xl bg-contactImage  bg-cover bg-no-repeat bg-center"></div> */}
    </div>
  );
}
