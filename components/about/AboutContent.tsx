"use client";
import { motion } from "framer-motion";
import { aboutSectionIcons } from "../constants/about";
import SquareButton from "../reuse/SquareButton";
import { fadeIn } from "../utils/motion";

const AboutContent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0, .5)}
      className="bg-secondary dark:bg-primary p-8  lg:p-12 xl:p-16 rounded-2xl flex flex-col gap-4 shadow-2xl"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="subheader text-dark dark:text-dark"
      >
        | About Me
      </motion.h1>
      <motion.p
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="text text-primary dark:text-secondary"
      >
        Hi, <span>I&apos;m Manh, a Full-Stack developer</span> looking to make a
        career change. With
        <span> a background in business, design, and coding,</span> my
        experience creating my own business has given me an excellent
        understanding of the consumer perspective and experience with web
        design.
        <span>
          {" "}
          My goal as a developer is to join a dynamic company where I can
          utilize my knowledge and expertise to help the company to succeed and
          grow.
        </span>{" "}
        I am passionate about using technology to create solutions and{" "}
        <span>solve complex problems.</span>
      </motion.p>
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="flex gap-4"
      >
        {aboutSectionIcons.map((icon, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.5, 1)}
            key={index}
          >
            <SquareButton
              key={index}
              target={icon.link.startsWith("#") ? "_self" : "_blank"}
              stylesButton="bg-primary dark:bg-secondary"
              stylesIcon="text-dark dark:text-dark"
              link={icon.link}
              icon={icon.icon}
              label={icon.label}
            />
          </motion.div>
        ))}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 1.2, 1)}
        >
          <motion.a
            whileHover={{ scale: 1.2, borderRadius: "3.5rem" }}
            whileTap={{ scale: 0.9 }}
            href="#nothing"
            className="center h-12 lg:h-14 px-4 text font-extrabold rounded-2xl bg-primary dark:bg-secondary text-dark dark:text-dark  text-lg"
          >
            More!
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
