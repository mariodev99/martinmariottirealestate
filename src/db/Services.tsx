import { CashIcon, SmileIcon, TimeIcon } from "@/components/Icons"
import React from "react"
import busquedaImg from "../../public/images/busqueda_image.jpg"
import negociacionImg from "../../public/images/negociacion_image.jpg"
import reformaImg from "../../public/images/reforma_image.jpg"
import gestionImg from "../../public/images/gestion_image.jpg"

import { StaticImageData } from "next/image"

export interface Service {
    title: string
    description: string
    icon: React.ReactNode
    image: StaticImageData
    index?: number
    subtitle: string
}

export const ServiceList:Service[] = [
    {
        title: "Busqueda del inmueble",
        description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
        icon:  <TimeIcon/>,
        image: busquedaImg,
        subtitle: "busqueda"
      },
      {
        title: "Negociacion al mejor precio ",
        description: "Mi enfoque es claro: tu satisfacción y seguridad son mi máxima prioridad. Trabajo arduamente para que encuentres la propiedad que se adapte a tus sueños y metas de inversión.",
        icon:  <TimeIcon/>,
        image: negociacionImg,
        subtitle: "Ahorro"
      },
      {
        title: "Reforma del inmueble",
        description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
        icon:  <TimeIcon/>,
        image: reformaImg,
        subtitle: "Reforma"
      },
      {
        title: "Gestion del alquiler e inquilino",
        description: "Buscamos superar las expectativas de nuestros clientes al ofrecerles una experiencia inigualable en la búsqueda de propiedades. Nuestro objetivo es ayudarles a tomar decisiones informadas y acertadas, maximizando su rentabilidad y brindándoles tranquilidad en cada inversión",
        icon:  <TimeIcon/>,
        image: gestionImg,
        subtitle: "Gestion"
      },
]
