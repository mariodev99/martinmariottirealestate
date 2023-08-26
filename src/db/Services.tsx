import { CashIcon, SmileIcon, TimeIcon } from "@/components/Icons"
import React from "react"
import busquedaImg from "../../public/images/busqueda_image.jpg"
import negociacionImg from "../../public/images/negociacion_image.jpg"
import reformaImg from "../../public/images/reforma_image.jpg"
import gestionImg from "../../public/images/gestion_image.jpg"

import { StaticImageData } from "next/image"

export interface Service {
    title: string
    image: StaticImageData
    index?: number
    subtitle: string
}

export const ServiceList:Service[] = [
    {
        title: "Busqueda del inmueble mas rentable",
        image: busquedaImg,
        subtitle: "Busqueda"
      },
      {
        title: "Negociacion al mejor precio ",
        image: negociacionImg,
        subtitle: "Ahorro"
      },
      {
        title: "Reforma del inmueble",
        image: reformaImg,
        subtitle: "Reforma"
      },
      {
        title: "Gestion del alquiler e inquilino",
        image: gestionImg,
        subtitle: "Gestion"
      },
]
