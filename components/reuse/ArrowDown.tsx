"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

type Props = {
  href: string;
};

const ArrowDown = ({ href }: Props) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      href={href}
      className={`absolute sm:bottom-12 sm:right-12 bottom-6 right-6 h-16 w-16 rounded-full cursor-pointer border-none shadow-2xl transition-colors duration-250 bg-secondary dark:bg-primary hidden sm:flex justify-center items-center`}
    >
      <FontAwesomeIcon
        icon={faArrowDown}
        className="text-primary dark:text-secondary animate-bounce"
        size="2xl"
      />
    </motion.a>
  );
};

export default ArrowDown;
