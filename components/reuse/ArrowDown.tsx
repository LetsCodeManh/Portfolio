"use client"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

type Props = {
  href: string
}

const ArrowDown = ({href}: Props) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex justify-center items-center"
        href={href}
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          className="animate-bounce"
          size="2xl"
        />
      </motion.a>
    </div>
  );
}

export default ArrowDown;
