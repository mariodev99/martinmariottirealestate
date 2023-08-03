import React from 'react'
import { Merriweather,Inter } from 'next/font/google'
import PrimaryButton from '../../Buttons/PrimaryButton'
import SectionWraper from '@/components/Layout/SectionWraper'
const merriweather = Merriweather({ subsets: ['latin'], weight: ["300", "400"] })

// Lista de pasos
const StepList = [ 
  { 
    svg:  
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" viewBox="0 0 200 180" fill="none">
      <path d="M166.779 90C166.779 121.614 140.764 147.243 108.672 147.243C98.2041 147.243 88.3823 144.516 79.8992 139.743L114.743 177.802C157.454 175.006 191.94 142.922 197.281 101.961L152.441 52.3486C161.369 62.4128 166.779 75.5841 166.779 90Z" fill="url(#paint0_linear_102_407)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M109.54 126.738C129.657 126.738 145.964 110.672 145.964 90.8544C145.964 71.0365 129.657 54.9709 109.54 54.9709C89.4228 54.9709 73.1149 71.0365 73.1149 90.8544C73.1149 110.672 89.4228 126.738 109.54 126.738Z" fill="#FDFDFB"/>
      <path d="M145.964 90.8544C145.964 110.672 129.657 126.738 109.54 126.738C89.4228 126.738 73.1149 110.672 73.1149 90.8544C73.1149 71.0365 89.4228 54.9709 109.54 54.9709C129.657 54.9709 145.964 71.0365 145.964 90.8544Z" fill="#112130"/>
      <path d="M69.0085 122.408H55.6068V36.9469H33.8291C28.4684 42.2572 12.6097 46.3505 5.35043 47.7334V65.9873H26.2906V122.408H25.5978H2V146.47H40.1603C56.5462 165.806 81.1053 178 108.673 178C158.007 178 198 138.601 198 90C198 41.3989 158.007 2 108.673 2C83.2071 2 60.2305 12.4976 43.9585 29.3398" stroke="black" strokeWidth="3"/>
      <path d="M111.25 94.625V97.375C111.25 97.7397 111.105 98.0894 110.847 98.3473C110.589 98.6051 110.24 98.75 109.875 98.75H100.25L96.125 102.875V89.125C96.125 88.7603 96.2699 88.4106 96.5277 88.1527C96.7856 87.8949 97.1353 87.75 97.5 87.75H100.25M120.875 93.25L116.75 89.125H107.125C106.76 89.125 106.411 88.9801 106.153 88.7223C105.895 88.4644 105.75 88.1147 105.75 87.75V79.5C105.75 79.1353 105.895 78.7856 106.153 78.5277C106.411 78.2699 106.76 78.125 107.125 78.125H119.5C119.865 78.125 120.214 78.2699 120.472 78.5277C120.73 78.7856 120.875 79.1353 120.875 79.5V93.25Z" stroke="#D6BA4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_102_407" x1="114.743" y1="101.107" x2="166.77" y2="159.978" gradientUnits="userSpaceOnUse">
      <stop stop-color="#282828"/>
      <stop offset="1" stop-color="#ACACAC" stop-opacity="0"/>
      </linearGradient>
      </defs>
    </svg>,
    title: " Entrevista y definición del proyecto",
    text: "Se procede a realizar una entrevista exhaustiva contigo para comprender en detalle tu proyecto de inversión y compra. Se discutirán tus prioridades, la rentabilidad deseada y tu presupuesto, con el objetivo de obtener una comprensión clara y profunda de tus necesidades y objetivos."
  },
  { 
    svg:  
    <svg xmlns="http://www.w3.org/2000/svg" width="201" height="180" viewBox="0 0 201 180" fill="none">
    <path d="M70.5 127.592H46.2613C117.775 68.6408 55.973 4.56311 3 54.9709L19.7748 71.2039C42.183 44.7184 86.8739 71.2039 3.88288 131.864V148.951H45.3784C62.0595 168.287 79.999 178 108.063 178C158.286 178 199 138.601 199 90C199 41.3989 158.286 2 108.063 2C82.1388 2 58.7482 12.4976 42.183 29.3398" stroke="black" strokeWidth="3"/>
    <path d="M167.216 88.2913C167.216 119.906 140.733 145.534 108.063 145.534C97.4062 145.534 87.4075 142.807 78.7716 138.034L114.243 176.093C157.723 173.297 192.831 141.213 198.268 100.252L152.621 50.6399C161.71 60.7041 167.216 73.8754 167.216 88.2913Z" fill="url(#paint0_linear_102_410)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M108.946 125.029C129.425 125.029 146.027 108.964 146.027 89.1456C146.027 69.3277 129.425 53.2621 108.946 53.2621C88.4667 53.2621 71.865 69.3277 71.865 89.1456C71.865 108.964 88.4667 125.029 108.946 125.029Z" fill="#FDFDFB"/>
    <path d="M146.027 89.1456C146.027 108.964 129.425 125.029 108.946 125.029C88.4667 125.029 71.865 108.964 71.865 89.1456C71.865 69.3277 88.4667 53.2621 108.946 53.2621C129.425 53.2621 146.027 69.3277 146.027 89.1456Z" fill="#112130"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M108.063 145.534C140.733 145.534 167.216 119.906 167.216 88.2913C167.216 73.8754 161.71 60.7041 152.621 50.6399L151.889 49.8447C141.067 38.2992 125.44 31.0485 108.063 31.0485C75.3938 31.0485 48.91 56.677 48.91 88.2913C48.91 96.4986 50.6949 104.302 53.9096 111.359C55.7123 115.317 57.9647 119.039 60.6042 122.466C65.4738 128.788 71.6607 134.105 78.7716 138.034C87.4075 142.807 97.4062 145.534 108.063 145.534ZM108.946 125.029C129.425 125.029 146.027 108.964 146.027 89.1456C146.027 69.3277 129.425 53.2621 108.946 53.2621C88.4667 53.2621 71.865 69.3277 71.865 89.1456C71.865 108.964 88.4667 125.029 108.946 125.029Z" fill="#F5F5F5"/>
    <path d="M97.125 77.5H121.875M98.5 77.5V91.25C98.5 91.9793 98.7897 92.6788 99.3055 93.1945C99.8212 93.7103 100.521 94 101.25 94H117.75C118.479 94 119.179 93.7103 119.695 93.1945C120.21 92.6788 120.5 91.9793 120.5 91.25V77.5M109.5 94V99.5M105.375 99.5H113.625M104 88.5L108.125 84.375L110.875 87.125L115 83" stroke="#D6BA4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_102_410" x1="114.243" y1="99.3981" x2="166.147" y2="159.189" gradientUnits="userSpaceOnUse">
    <stop stop-color="#282828"/>
    <stop offset="1" stop-color="#ACACAC" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>,
    title: "Planificación y acción",
    text: "Utilizando mi experiencia y conocimiento del mercado, desarrollaré un plan de acción personalizado que se adapte a tus requisitos. Este plan puede incluir la búsqueda de propiedades, análisis de inversión, visitas a propiedades potenciales y negociaciones, todo diseñado para ayudarte a alcanzar tus metas de inversión."
  },
  { 
    svg:  
    <svg xmlns="http://www.w3.org/2000/svg" width="199" height="180" viewBox="0 0 199 180" fill="none">
    <path d="M41.7081 29.3398C58.1254 12.4976 81.3072 2 107 2C156.775 2 197.125 41.3989 197.125 90C197.125 138.601 156.775 178 107 178C81.992 178 59.4377 168.142 43.125 152.098C42.6202 151.602 42.1214 151.099 41.6287 150.591M40.8765 149.806C41.1256 150.069 41.3763 150.331 41.6287 150.591M41.6287 150.591C24.3316 152.586 8.00244 141.216 2 135.282L16 114.777C53.625 148.097 79 95.9806 27.375 102.816V80.6019C76.375 80.6019 46.625 40.4466 20.375 66.932L4.625 48.9903C14.25 39.877 41.2 25.9223 72 43.0097" stroke="black" strokeWidth="3"/>
    <path d="M166.5 88.2913C166.5 119.906 140.253 145.534 107.875 145.534C97.3132 145.534 87.4038 142.807 78.8449 138.034L114 176.093C157.092 173.297 189.986 140.359 195.375 99.3981L152.035 50.6399C161.042 60.7041 166.5 73.8754 166.5 88.2913Z" fill="url(#paint0_linear_102_413)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M108.75 125.029C129.046 125.029 145.5 108.964 145.5 89.1456C145.5 69.3277 129.046 53.2621 108.75 53.2621C88.4535 53.2621 72 69.3277 72 89.1456C72 108.964 88.4535 125.029 108.75 125.029Z" fill="#FDFDFB"/>
    <path d="M145.5 89.1456C145.5 108.964 129.046 125.029 108.75 125.029C88.4535 125.029 72 108.964 72 89.1456C72 69.3277 88.4535 53.2621 108.75 53.2621C129.046 53.2621 145.5 69.3277 145.5 89.1456Z" fill="#112130"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M107.875 145.534C140.253 145.534 166.5 119.906 166.5 88.2913C166.5 73.8754 161.042 60.7041 152.035 50.6399L151.309 49.8447C140.584 38.2992 125.097 31.0485 107.875 31.0485C75.4973 31.0485 49.25 56.677 49.25 88.2913C49.25 96.4986 51.019 104.302 54.2049 111.359C55.9916 115.317 58.2239 119.039 60.8398 122.466C65.6659 128.788 71.7975 134.105 78.8449 138.034C87.4038 142.807 97.3132 145.534 107.875 145.534ZM108.75 125.029C129.046 125.029 145.5 108.964 145.5 89.1456C145.5 69.3277 129.046 53.2621 108.75 53.2621C88.4535 53.2621 72 69.3277 72 89.1456C72 108.964 88.4535 125.029 108.75 125.029Z" fill="#F5F5F5"/>
    <path d="M104.375 88.5L107.125 91.25L112.625 85.75M108.5 76.125C111.712 78.9665 115.904 80.446 120.187 80.25C120.811 82.3716 121.002 84.597 120.749 86.7939C120.495 88.9907 119.803 91.1142 118.713 93.0382C117.622 94.9622 116.156 96.6474 114.402 97.9937C112.648 99.3399 110.64 100.32 108.5 100.875C106.359 100.32 104.352 99.3399 102.598 97.9937C100.843 96.6474 99.3775 94.9622 98.2872 93.0382C97.197 91.1142 96.5046 88.9907 96.2512 86.7939C95.9979 84.597 96.1887 82.3716 96.8124 80.25C101.096 80.446 105.288 78.9665 108.5 76.125Z" stroke="#D6BA4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_102_413" x1="114" y1="99.3981" x2="165.968" y2="158.728" gradientUnits="userSpaceOnUse">
    <stop stop-color="#282828"/>
    <stop offset="1" stop-color="#ACACAC" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>,
    title: "Seguridad y tranquilidad en la inversión",
    text: "En el último paso, me centraré en garantizar tu seguridad y tranquilidad en la inversión inmobiliaria. Se supervisará todo el proceso de compra, desde la presentación de ofertas hasta el cierre de la transacción, para asegurarse de que tomes decisiones informadas y acertadas, minimizando los riesgos y maximizando los beneficios, brindándote la confianza necesaria durante todo el proceso."
  },
]


interface StepData {
  svg: React.ReactNode;
  title: string;
  text: string;
}

// Componente que muestra un paso
const Step: React.FC<StepData> = ({svg, title, text}) => {
  return (
    <div className='flex flex-col items-center text-center gap-5 px-4'>
      {svg}
      <h3 className={`${merriweather.className} text-xl font-bold `}>{title}</h3>
      <p className='text-md font-medium text-secondary'>{text}</p>
    </div>
  )
}

export default function ThreeStepsSection() {
  return (
    <SectionWraper>
      <div>

      <h2 className={`${merriweather.className} py-10 text-center mb-5 text-3xl font-bold`}>Concreta tu inversión inmobiliaria en 3 simples pasos</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {StepList.map( step => (
        <Step key={step.title} {...step}></Step>
        ))}
      </div>
      <div className='flex justify-center py-10 '>
          <PrimaryButton>
            <p className='text-2xl'>Empecemos</p>
          </PrimaryButton>
      </div>
      </div>

    </SectionWraper>

  )
}
