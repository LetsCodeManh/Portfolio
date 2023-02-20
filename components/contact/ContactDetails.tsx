"use client"
import { motion } from "framer-motion";
import { contactSectionSocials } from "../constants/contact";
import SquareButton from "../reuse/SquareButton";
import { fadeIn } from "../utils/motion";

const ContactDetails = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-6 flex-1"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="subheader text-dark dark:text-dark"
      >
        | Contact
      </motion.h1>
      <motion.h2
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="bigText text-secondary dark:text-primary"
      >
        Thank you for stopping by my website. If you believe I&apos;m the right
        person for the job, let&apos;s work together to achieve your goals.
        I&apos;m excited to bring my skills and expertise to the table and
        create something amazing.
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="flex flex-col text font-semibold text-dark dark:text-dark"
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
              stylesButton="bg-secondary dark:bg-primary"
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

export default ContactDetails;
