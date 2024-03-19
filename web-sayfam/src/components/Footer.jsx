import { useContext } from "react";
import "../assets/css/footer.css";
import { DarkMode } from "../context/mycontext";
import Reveal from "./Reveal";

const Footer = () => {
  const { toggleDarkMode, t } = useContext(DarkMode);
  return (
    <footer
      className={
        toggleDarkMode
          ? "flex justify-center"
          : "flex justify-center  bg-lightest-bg"
      }
    >
      <Reveal>
        <div className="mt-60 xs:mt-20 flex gap-10 mb-20 flex-wrap xs:justify-center xs:flex-col middleC:flex-row">
          <div>
            <h3
              className={
                toggleDarkMode
                  ? "text-black footer-h3 font-medium text-right"
                  : "text-white footer-h3 font-medium text-right"
              }
            >
              {t("lets")} <br /> {t("letsbr")}
            </h3>
          </div>
          <div className="flex flex-col xs:items-center middleC:items-start">
            <a
              href="https://github.com/ahmedcanberkok"
              className={
                toggleDarkMode
                  ? "font-medium text-[#1769FF]"
                  : "font-medium text-[#82BBFF]"
              }
            >
              Github
            </a>
          
            <a
              href="https://www.linkedin.com/in/ahmedcanberkok/"
              className={
                toggleDarkMode
                  ? "font-medium text-[#0077B5]"
                  : "font-medium text-[#419CCB]"
              }
            >
              Linkedin
            </a>
            <a
              href="mailto:canberk.ok@gmail.com"
              className={
                toggleDarkMode
                  ? "font-medium text-[#1a395b]"
                  : "font-medium text-[#1a395b]"
              }
            >
  
              Contact Me
            </a>
          
          </div>
        </div>
      </Reveal>
    </footer>
  );
};
export default Footer;