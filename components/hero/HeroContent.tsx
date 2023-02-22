"use client";
import { motion } from "framer-motion";
import { heroSectionIcons } from "../constants/hero";
import SquareButton from "../reuse/SquareButton";
import { fadeIn } from "../utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="flexDown text-center lg:text-left lg:items-start"
    >
      <motion.h2
        variants={fadeIn("up", "tween", 0, 1)}
        className="subheader text-secondary dark:text-primary"
      >
        &#x1F44B; Hi!
      </motion.h2>
      <motion.h1
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="header text-dark dark:text-dark"
      >
        I&apos;m Manh, a<br />
        Web Developer
      </motion.h1>
      <motion.p
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="text text-secondary dark:text-primary lg:max-w-[750px]"
      >
        with experience in business, design, and coding. I&apos;m passionate
        about using technology to <span>solve complex problems</span> and{" "}
        <span>bring your vision to life</span>. If you&apos;re looking for a
        talented and dedicated developer to help your company succeed and grow,{" "}
        <span>I&apos;m here to help</span>. Take a look at what I can offer and{" "}
        <span>let&apos;s work together</span> to create something great.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.9, 1)} className="flexSide">
        {heroSectionIcons.map((icon, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.5, 1)}
            key={index}
          >
            <SquareButton
              target={icon.link.startsWith("#") ? "_self" : "_blank"}
              stylesButton="border-dark dark:border-dark hover:bg-secondary dark:hover:bg-primary"
              stylesIcon="text-dark dark:text-dark"
              link={icon.link}
              icon={icon.icon}
              label={icon.label}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
