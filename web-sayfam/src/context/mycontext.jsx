import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const DarkMode = createContext();

export const DarkProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const [toggleDarkMode, setToggleDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || prefersDarkMode
  );

  function handleNight() {
    setToggleDarkMode(!toggleDarkMode);
  }

  //language
  const { t, i18n } = useTranslation();

  const handleLang = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", toggleDarkMode);
  }, [toggleDarkMode]);

  return (
    <DarkMode.Provider
      value={{ toggleDarkMode, handleNight, handleLang, t, i18n }}
    >
      {children}
    </DarkMode.Provider>
  );
};