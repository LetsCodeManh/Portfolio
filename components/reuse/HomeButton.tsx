"use client";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, borderRadius: "99rem" }}
      whileTap={{ scale: 0.9 }}
      className="fixed navigation__hamburger sm:top-12 sm:left-12 top-6 left-6 z-50 h-12 w-14 rounded-2xl border-2 border-dark shadow-2xl transition-colors duration-300 center hover:bg-secondary dark:hover:bg-primary cursor-pointer bg-primary dark:bg-secondary"
    >
      <Link href="/">
        <FontAwesomeIcon
          icon={faHome}
          className="text-dark dark:text-dark"
          size="xl"
        />
      </Link>
    </motion.div>
  );
};

export default HomeButton;
