"use client";
import { useState, useEffect } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user has scrolled down 200 pixels or more
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed navigation__hamburger sm:bottom-12 sm:right-12 bottom-6 right-6 z-50 h-12 px-4 rounded-2xl border-2 border-dark dark:border-dark text-dark dark:text-dark shadow-2xl font-semibold text transition-colors duration-300 hover:bg-secondary dark:hover:bg-primary bg-primary dark:bg-secondary cursor-pointer ${
        isVisible ? "block" : "hidden"
      }`}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollUp;
