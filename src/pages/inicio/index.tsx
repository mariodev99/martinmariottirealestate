import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BlogSection from "@/components/Sections/BlogSection";
import HeaderSection from "@/components/Sections/HeaderSection";
import SectionWraper from "@/components/Layout/SectionWraper";
import Footer from "@/components/Layout/Footer";
import AboutSection from "@/components/Sections/About";
import ServicesSection from "@/components/Sections/ServicesSection";
import ContactSection from "@/components/Sections/ContactSection";
import { useRouter } from "next/router";
import Slider from "@/components/Common/Slider";
import { CashIcon, TimeIcon, SmileIcon } from "@/components/Icons";

// const advantagesIcons = [<CashIcon />, <SmileIcon />, <TimeIcon />];

export default function HomePage(props: any) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#section_about_me")) {
      const targetElement = document.getElementById("section_about_me");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  return (
    <motion.div
      className={` min-h-screen overflow-y-hidden scroll-smooth	`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderSection data={props.homeData} />
      <div id="section_services">
        <SectionWraper>
          <ServicesSection data={props.servicesData} />
        </SectionWraper>
      </div>
      <div className="py-10 mt-20 rotate-3">
        <Slider text="¿WHY ME?" />
      </div>

      <div id="section_about_me" className="bg-black rounded-t-4xl">
        <SectionWraper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-16">
            {props.servicesData.advantages.map((item: any, index: number) => (
              <div key={index} className="rounded-3xl bg-[#161616] py-6 px-4">
                {/* <div className="pl-3">{advantagesIcons[index]}</div> */}
                <div className="flex justify-between items-center text-lg md:text-2xl font-medium text-white p-4">
                  <h3 className="">{item.title}</h3>
                </div>
                <div className="px-4 text-sm md:text-lg text-[#cbcbcb]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <AboutSection data={props.aboutData} />
        </SectionWraper>
      </div>
      <div className="bg-black ">
        <SectionWraper>
          <BlogSection data={props.blogData} />
        </SectionWraper>
        <SectionWraper>
          <ContactSection data={props.contactData} />
        </SectionWraper>
      </div>
      <Footer data={props.footerData} />
    </motion.div>
  );
}

export async function getStaticProps({ locale }: any) {
  const response = await import(`../../lang/${locale}.json`);

  return {
    props: {
      homeData: response.default.home,
      servicesData: response.default.services,
      aboutData: response.default.about,
      blogData: response.default.blog,
      contactData: response.default.contact,
      footerData: response.default.footer,
    },
  };
}
