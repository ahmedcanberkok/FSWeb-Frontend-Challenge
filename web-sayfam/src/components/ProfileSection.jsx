import { useContext } from "react";
import { DarkMode } from "../context/mycontext";
import "../assets/css/profile.css";
import redCir from "../assets/symbols/Ellipse 12.png";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
const ProfileSection = () => {
  const { toggleDarkMode, t } = useContext(DarkMode);
  return (
    <section className={toggleDarkMode ? "bg-custom-grey" : "bg-darkest-bg"}>
      <Reveal>
        <div className="flex justify-end redCir ">
          <img src={redCir} alt="" className="z-40" />
        </div>
        <div className="text-center">
          <h2
            className={
              toggleDarkMode
                ? "text-black h2-profile mb-8 "
                : "text-white h2-profile mb-8"
            }
          >
            {t("profile")}
          </h2>
        </div>
        <div className="flex justify-center gap-10 pb-20 xs:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap">
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateY(-5deg) rotateX(15deg)",
            }}
          >
            <motion.div
              initial={{
                transform: "translateZ(8px) translateY(-2px)",
              }}
              animate={{
                transform: "translateZ(32px) translateY(-8px)",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
              className={
                toggleDarkMode
                  ? "xs:h-auto middleC:h-[300px] profile-box p-8 leading-10 pr-32 xs:p-6 xs:pr-12 xs:ml-2 bg-white"
                  : "xs:h-auto middleC:h-[300px] profile-box p-8 leading-10 pr-32 xs:p-6 xs:pr-12 xs:ml-2 bg-box-darkMode"
              }
            >
              <h4 className="text-pink-text font-normal mb-5">{t("basic")} </h4>
              <div className="flex justify-between gap-8">
                <div className={toggleDarkMode ? "text-black" : "text-white"}>
                  <p className="font-semibold">{t("birth")} </p>
                  <p className="font-semibold">{t("residence")} </p>
                  <p className="font-semibold">{t("education")} </p>
                  <p className="font-semibold">{t("role")} </p>
                </div>
                <div className={toggleDarkMode ? "text-black" : "text-white"}>
                  <p className="font-light">21.10.1997</p>
                  <p className="font-light">Ankara</p>
                  <p className="font-light">Baskent {t("uni")} </p>
                  <p className="font-light">Back-End,Front-End</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="p-2 second-box-cs-2-black profile2-box-right">
            <div className={toggleDarkMode ? "text-black" : "text-white"}>
              <h4 className="h4-second-box mb-4">{t("about")} </h4>
            </div>
            <div
              className={
                toggleDarkMode
                  ? "text-black leading-7 box-2-p"
                  : "text-white leading-7 box-2-p"
              }
            >
              <p className="mb-8 font-light">{t("aboutDesc1")}</p>
              <p className="font-light">{t("aboutDesc2")}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
export default ProfileSection;