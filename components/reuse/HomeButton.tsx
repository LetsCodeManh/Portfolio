"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "./ReactIconReuse";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, borderRadius: "99rem" }}
      whileTap={{ scale: 0.9 }}
      className="fixed navigation__hamburger sm:top-12 sm:left-12 top-6 left-6 overflow-hidden border-2 border-dark rounded-2xl z-50"
    >
      <Link
        href="/"
        className="h-12 w-14 shadow-2xl transition-colors duration-300 center hover:bg-secondary dark:hover:bg-primary cursor-pointer bg-primary dark:bg-secondary"
        aria-label="Back to home page"
      >
        <Icon icon={FaHome} className="text-dark dark:text-dark" size="2rem" />
      </Link>
    </motion.div>
  );
};

export default HomeButton;
