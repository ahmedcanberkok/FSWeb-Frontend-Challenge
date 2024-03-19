import "../assets/css/lang.css";
//lang icons
import js from "../assets/languageIcons/js-logo 1.png";
import react from "../assets/languageIcons/react.png";
import Nodejs from "../assets/languageIcons/node-logo 1.png";
import java from "../assets/languageIcons/java-res.png";
import docker from "../assets/languageIcons/docker.png";
import git from "../assets/languageIcons/git.png";
import SpringBoot from "../assets/languageIcons/spring-boot.png";
import tailwindcss from "../assets/languageIcons/tailwind-css.png";
import PostgreSql from "../assets/languageIcons/postgresql.png";
import MongoDB from "../assets/languageIcons/mongodb.png";
import figma from "../assets/languageIcons/figma-logo 1.png";
import griLogo from "../assets/symbols/Rectangle 22.png";
import { useContext } from "react";
import { DarkMode } from "../context/mycontext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const skills = [
  { name: "JS", icon: js },
  { name: "REACT", icon: react },
  {name:"TAILWİND",icon:tailwindcss},
  { name: "NODEJS", icon: Nodejs},
  { name: "JAVA", icon: java },
  { name: "SPRING", icon: SpringBoot},
  { name: "POSTGRESQL", icon: PostgreSql},
  {name:"MONGODB",icon:MongoDB},
  {name:"DOCKER",icon:docker},
  { name: "FIGMA", icon: figma },
  {name:"GITHUB", icon: git},
];

const SkillItem = ({ name, icon }) => {
  const { toggleDarkMode } = useContext(DarkMode);
  return (
    <div  className="flex flex-col items-center justify-center p-4">
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95, rotate: "5deg" }}
        className="cursor-pointer"
      >
        <img src={icon} alt={name} className="mb-2 rounded-lg w-20 h-20" />
        <p
          className={
            toggleDarkMode
              ? "text-custom-grey-text text-2xl font-medium"
              : "text-white text-2xl font-medium"
          }
        >
          {name}
        </p>
      </motion.div>
    </div>
  );
};

const LanguageSection = () => {
  const { toggleDarkMode, t } = useContext(DarkMode);
  return (
    <section>
      <div
        className={
          toggleDarkMode
            ? "section-container-2 bg-white"
            : "section-container-2 bg-lightest-bg"
        }
      >
        <div className="text-center mb-10 xs:pt-10 md:pt-16">
          <h2
            className={
              toggleDarkMode
                ? "md:text-5xl xs:text-4xl font-medium text-black"
                : "md:text-5xl xs:text-4xl font-medium text-white"
            }
          >
            {t("skills")}
          </h2>
        </div>
        <Reveal>
          <div className="xs:w-1/2 xs:mx-auto middleC:mx-4 middleC:w-full flex xs:gap-6 md:gap-8 justify-center text-center lang-cont xs:flex-wrap xs:p-0">
            <Swiper
             modules={[Navigation, Autoplay]}
             navigation={true}
             autoplay={{
               delay: 4000,
               disableOnInteraction: false,
               
             }}
             breakpoints={{
               1100: {
                 slidesPerView: 2,
                 spaceBetween: -800,
                 centerInsufficientSlides: true,
               },
               720: {
                 slidesPerView: 2,
                 spaceBetween: -800,
                 centerInsufficientSlides: true,
               },
               540: {
                 slidesPerView: 2,
                 spaceBetween: -800,
                 centerInsufficientSlides: true,
               },
               300: {
                 slidesPerView: 2,
                 spaceBetween: -800,
                  centerInsufficientSlides: true,
               },
             }}
             className="mySwiper">
            {skills.map((skill, index) => (
              <SwiperSlide className="swiper-slide">
              <SkillItem key={index} {...skill} />
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </Reveal>
        <div className="mt-10 gri-logo xs:pb-16  md:pb-16">
          <img src={griLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;