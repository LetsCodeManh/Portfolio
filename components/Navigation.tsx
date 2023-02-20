"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { backgroundNav } from "./utils/motion";
import HamburgerButton from "./navigation/HamburgerButton";
import NavigationMenuList from "./navigation/NavigationMenuList";
import NavigationButton from "./navigation/NavigationButton";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <HamburgerButton isActive={isActive} setIsActive={setIsActive} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? "open" : "close"}
        variants={backgroundNav()}
        className={`fixed sm:top-14 sm:right-14 top-8 right-8 z-10 h-12 w-12 rounded-full bg-secondary dark:bg-primary`}
      />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        className={`fixed z-20 ${
          isActive ? "pointer-events" : "pointer-events-none"
        }`}
      >
        <NavigationMenuList isActive={isActive} setIsActive={setIsActive} />
        <NavigationButton isActive={isActive} />
      </motion.nav>
    </>
  );
};

export default Navigation;
