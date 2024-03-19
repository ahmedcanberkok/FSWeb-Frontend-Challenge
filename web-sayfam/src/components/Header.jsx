import "../assets/css/header.css";
import { useContext } from "react";
import { DarkMode } from "../context/mycontext";

//icons and pictures
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import halfEclipse from "../assets/symbols/Ellipse 10.png";
import canberk1 from "../assets/symbols/canberk1.jpg";
import rectangleRed from "../assets/symbols/Rectangle 18.png";
import Reveal from "./Reveal";

const Header = () => {
  const { toggleDarkMode, handleNight, t, handleLang, i18n } =
    useContext(DarkMode);
  const boolLang = i18n.language === "en";

  window.addEventListener("blur", () => {
    document.title = `${t("tab")}`;
  });
  window.addEventListener("focus", () => {
    document.title = "Ahmed Canberk Ok";
  });

  return (
    <header
      className={
        toggleDarkMode
          ? "bg-custom-grey transition duration-500 ease-in-out"
          : "bg-darkest-bg sm:pb-16 xs:pb-3 transition duration-500 ease-in-out"
      }
    >
      <div className="header-container">
        <div className="eclipse-cont">
          <img src={halfEclipse} alt="halfEclipse" />
        </div>
        <div className="flex justify-end gap-2 items-center sm:mr-20 xs:mr-10">
          <div>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={toggleDarkMode}
                onClick={handleNight}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="cs--headerTexts">
            <p
              className={
                toggleDarkMode
                  ? "text-custom-grey-text border-r-2 border-custom-grey-text pr-2"
                  : "text-white  border-r-2 border-custom-grey-text pr-2"
              }
            >
              {toggleDarkMode ? "DARK" : "LIGHT"} MODE
            </p>
          </div>
          <div className="flex">
            <p
              className="text-pink-text  cursor-pointer span-cs-headers"
              onClick={() => handleLang(boolLang ? "tr" : "en")}
            >
              {boolLang ? "TÜRKÇE" : "ENGLISH"}
            </p>
            {boolLang ? (
              <span className="text-custom-grey-text">'YE GEÇ</span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex xs:mt-5 sm:mt-10 md:mt-16 xs:mb-4 two-sections justify-around header-container">
        <div className="xs:w-[56%] middleC:w-2/4">
          <h3
            className={
              toggleDarkMode
                ? "text-3xl mb-3 text-black"
                : "text-3xl mb-3 text-white"
            }
          >
            <Reveal>{t("hi")} 👋</Reveal>
          </h3>
          <h1
            className={
              toggleDarkMode
                ? "text-black md:text-header-xl lg:text-header-xxl cs-header-h1 font-medium"
                : "text-white md:text-header-xl lg:text-header-xxl cs-header-h1 font-medium"
            }
          >
            <Reveal>{t("welcome")}</Reveal>
          </h1>
          <div
            className={
              toggleDarkMode
                ? "flex icons-linkedin md:text-4xl gap-3 mt-12 text-black"
                : "flex icons-linkedin md:text-4xl gap-3 mt-12 text-white"
            }
          >
            <a href="https://www.linkedin.com/in/ahmedcanberkok/">
              <ImLinkedin2 />
            </a>
            <a href="https://github.com/ahmedcanberkok">
              <AiFillGithub />
            </a>
          </div>
          <Reveal>
            {boolLang ? (
              <div className="mt-6">
                <p
                  className={
                    toggleDarkMode
                      ? "font-light text-black"
                      : "font-light text-white"
                  }
                >
                Invite me to join your team -&gt;{" "}
                  <a className="text-[#AF0C48]" href="">
                    canberk.ok@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <p
                  className={
                    toggleDarkMode
                      ? "font-light text-black"
                      : "font-light text-white"
                  }
                >
                   Beni takımınıza katılmaya
                  davet edin. -&gt;{" "}
                  <a className="text-[#AF0C48]" href="">
                    canberk.ok@gmail.com
                  </a>
                </p>
              </div>
            )}
          </Reveal>
        </div>
        <div className="pink-shadow mt-12">
          <img src={canberk1} alt="canberk1" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex justify-end md:pb-16 xs:pb-10">
        <img
          src={rectangleRed}
          alt="rectangleRed"
          className="rectangle-red xs:mt-0"
        />
      </div>
    </header>
  );
};
export default Header;