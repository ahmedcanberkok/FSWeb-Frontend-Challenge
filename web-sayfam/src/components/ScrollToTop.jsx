import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 850);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className="text-right">
      <button
        className="animate-bounce m-4"
        style={{
          display: visible ? "block" : "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          transition: "opacity 0.5s ease-in-out",
          zIndex: 9999,
        }}
      >
        <FaArrowCircleUp
          onClick={scrollToTop}
          className="text-pink-text text-5xl"
        />
      </button>
    </div>
  );
};

export default ScrollButton;