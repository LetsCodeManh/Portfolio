"use client";
import { motion } from "framer-motion";
import { contactSectionSocials } from "../constants/contact";
import SquareButton from "../reuse/SquareButton";
import { fadeIn } from "../utils/motion";

const AboutContactLastWord = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-6"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="biggerText text-dark dark:text-primary"
      >
        | Last Word
      </motion.h1>
      <motion.h2
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="text text-secondary dark:text-dark"
      >
        If you&apos;d like to get in touch with me, don&apos;t hesitate to contact me
        through my website or any of my social media profiles. I&apos;m always open
        to new opportunities and connections!
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="flex flex-col text font-semibold text-dark dark:text-primary"
      >
        <a href="tel:0176-21437917">+49 176 21437917 </a>
        <a href="mailto:manhng.dev@gmail.com">manhng.dev@gmail.com</a>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="flex gap-4"
      >
        {contactSectionSocials.map((social, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.25, 1)}
            key={index}
          >
            <SquareButton
              key={index}
              target="_blank"
              stylesButton="border-dark dark:border-dark hover:bg-secondary dark:hover:bg-primary"
              stylesIcon="text-dark dark:text-dark"
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutContactLastWord;
