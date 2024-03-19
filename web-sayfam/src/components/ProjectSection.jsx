import "../assets/css/project.css";
import comp1 from "../assets/computerImg/Group 103.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { DarkMode } from "../context/mycontext";
import { useContext } from "react";

const ProjectSection = () => {
  const { toggleDarkMode, t } = useContext(DarkMode);
  return (
    <section
      className={
        toggleDarkMode
          ? "pt-20 pb-10 xs:pt-10 xs:pb-10 bg-white"
          : "pt-20 pb-10 xs:pt-10 xs:pb-10 bg-lightest-bg text-white"
      }
    >
      <div className="text-center">
        <h2
          className={
            toggleDarkMode
              ? "text-black projects-h2 font-medium"
              : "text-white projects-h2 font-medium"
          }
        >
          {t("projects")}
        </h2>
      </div>
      <div className="xs:mt-0 md:mt-10 swiper-cont middleC:p-5 xs:p-0 max-w-[1350px] w-full mx-auto">
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
              spaceBetween: 1,
            },
            720: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            540: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center p-6 xs:p-[4rem]">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects bg-baby-blue"
                    : "project-2 p-10 second-box-projects bg-slider-bg"
                }
              >
                <h4 className="font-bold mb-5">Reducer Calculator </h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">
                    {t("calculator")}
                  </p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    React
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    React Router
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Tailwind CSS
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Redux
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Javascript
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a
                    href="https://github.com/ahmedcanberkok/fsweb-s10g1-reducer-calculator"
                    className="font-medium"
                    target="_blank"
                  >
                    {t("git")}
                  </a>
                  <a
                    href="https://canberkok-fsweb-s10g1-reducer-calculator.vercel.app/ "
                    className="font-medium"
                    target="_blank"
                  >
                    {t("app")} -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center p-6 xs:p-[4rem]">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects bg-Lightgreen"
                    : "project-2 p-10 second-box-projects bg-slider-bg2"
                }
              >
                <h4 className="font-bold mb-5">PIZZA {t("project")} </h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">{t("pizza")}</p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    React
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    React Router
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Tailwind CSS
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Axios
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a
                    href="https://github.com/ahmedcanberkok/fsweb-s7-challenge-pizza"
                    className="font-medium"
                    target="_blank"
                  >
                    {t("git")}
                  </a>
                  <a
                    href="https://canberk-ok-fsweb-s7-challenge-pizza.vercel.app//"
                    className="font-medium"
                    target="_blank"
                  >
                    {t("app")} -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center p-6 xs:p-[4rem]">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects bg-baby-blue"
                    : "project-2 p-10 second-box-projects bg-slider-bg"
                }
              >
                <h4 className="font-bold mb-5">REDUX {t("movies")} </h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">
                    {t("moviesDesc")}
                  </p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    React
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Redux
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Tailwind CSS
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Axios
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a
                    href="https://github.com/ahmedcanberkok/fsweb-s10g2-redux-filmler"
                    className="font-medium"
                    target="_blank"
                  >
                    {t("git")}
                  </a>
                  <a
                    href="https://canberkok-fsweb-s10g2-redux-filmler.vercel.app/movies"
                    className="font-medium"
                    target="_blank"
                  >
                    {t("app")} -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center p-6 xs:p-[4rem]">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects bg-Lightgreen"
                    : "project-2 p-10 second-box-projects bg-slider-bg2"
                }
              >
                <h4 className="font-bold mb-5">{t("javadb")} </h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">
                    {t("javadbDesc")}
                  </p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Spring Framework
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    Java
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    PostgreSQL
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a
                    href="https://github.com/ahmedcanberkok/Java-Local-Db"
                    className="font-medium"
                    target="_blank"
                  >
                    {t("git")}
                  </a>
                  <a
                    href=""
                    className="font-medium"
                    target="_blank"
                  >
                    {t("app")} -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default ProjectSection;