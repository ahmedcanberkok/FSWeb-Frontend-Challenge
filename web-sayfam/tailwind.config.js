/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#F4F4F4",
        "pink-text": "#ea2678",
        "custom-grey-text": "#777777",
        "darkest-bg": "#2A262B",
        "lightest-bg": "#484148",
        "box-darkMode": "#525252",
        "slider-bg": "#2D3235",
        "slider-bg2": "#495351",
        "baby-blue": "#DDEEFE",
        Lightgreen: "#D9F6F1",
      },
      fontSize: {
        "header-xxl": "2.8rem",
        "header-xl": "2rem",
      },
      screens: {
        xs: "300px",
        middleC: "768px",
      },
    },
  },
  plugins: [],
};