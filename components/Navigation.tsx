"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { sections, socials } from "./constants";
import { backgroundNav, itemNav } from "./utils/motion";
import TextRandomizer from "./TextRandomizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`navigation__hamburger fixed sm:top-12 sm:right-12 top-6 right-6 z-50 h-16 w-16 rounded-full cursor-pointer border-none shadow-2xl transition-colors duration-250 ${
          isActive ? "is-active" : ""
        } ${
          isActive
            ? "bg-primary dark:bg-secondary"
            : "bg-secondary dark:bg-primary"
        }`}
        onClick={() => setIsActive(!isActive)}
        aria-label="Hamburger Menu"
      >
        <svg
          fill="none"
          className={`hamburger duration-250 transition-all mx-auto ${
            isActive
              ? "stroke-secondary dark:stroke-primary"
              : "stroke-primary dark:stroke-secondary"
          }`}
          viewBox="-10 -10 120 120"
          width="50"
        >
          <path
            className="line duration-500 transition-all"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? "open" : "close"}
        variants={backgroundNav()}
        className={`fixed sm:top-14 sm:right-14 top-8 right-8 z-10  h-12 w-12 rounded-full bg-secondary dark:bg-primary`}
      />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        className={`fixed z-20 ${
          isActive ? "pointer-events" : "pointer-events-none"
        }`}
      >
        <ul className="flex flex-col justify-center h-screen w-screen gap-4">
          {sections.map((section, index) => (
            <motion.li
              animate={isActive ? "open" : "close"}
              variants={itemNav(index)}
              whileHover={{ scale: 1.1 }}
              key={index}
              className="navigation__item border-t-4 border-b-4 border-primary dark:border-secondary last:border-b-4"
            >
              <motion.a
                whileTap={{ scale: 0.9 }}
                href={section.href}
                className="navigation__link font-semibold relative block text-primary dark:text-secondary hover:text-dark dark:hover:text-dark"
              >
                <TextRandomizer text={section.label} />
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 justify-center items-center`}
        >
          {socials.map((social, index) => (
            <motion.a
              whileHover={{ scale: 1.2, borderRadius: "50%" }}
              whileTap={{ scale: 0.9 }}
              href={social.link}
              target="_blank"
              key={index}
              className="flex justify-center items-center h-14 w-14 rounded-2xl bg-primary dark:bg-secondary transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="text-secondary dark:text-primary"
                size="2xl"
              />
            </motion.a>
          ))}

          {currentTheme === "dark" ? (
            <motion.button
              whileHover={{ scale: 1.2, borderRadius: "50%" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme("light")}
              className="h-14 w-14  rounded-2xl bg-primary dark:bg-secondary  transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faSun}
                size="2xl"
                className="text-secondary dark:text-primary transition-colors duration-200"
              />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.2, borderRadius: "50%" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme("dark")}
              className="h-14 w-14  rounded-2xl bg-primary dark:bg-secondary transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faMoon}
                size="2xl"
                className="text-secondary dark:text-primary transition-colors duration-200"
              />
            </motion.button>
          )}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;
