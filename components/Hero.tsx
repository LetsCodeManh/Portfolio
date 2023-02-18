"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { heroSectionIcons } from "./constants/hero";
import { fadeIn } from "./utils/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col space-y-8 justify-center px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%] relative h-screen"
    >
      <div className="flex flex-col justify-center gap-4 text-center lg:text-left lg:items-start">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0, 1)}
          className="subheader font-medium text-secondary dark:text-primary"
        >
          &#x1F44B; Hi!
        </motion.h2>
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="header font-semibold text-dark dark:text-dark"
        >
          I&apos;m Manh, a<br />
          Web Developer
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="text font-normal text-secondary dark:text-primary lg:max-w-[750px]"
        >
          with experience in business, design, and coding. I&apos;m passionate about
          using technology to{" "}
          <span className="font-semibold text-dark">
            solve complex problems
          </span>{" "}
          and{" "}
          <span className="font-semibold text-dark">
            bring your vision to life
          </span>{" "}
          .If you&apos;re looking for a talented and dedicated developer to help
          your company succeed and grow,{" "}
          <span className="font-semibold text-dark">I&apos;m here to help</span>.
          Take a look at what I can offer and{" "}
          <span className="font-semibold text-dark">let&apos;s work together</span>{" "}
          to create something great.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.9, 1)}
          className="flex gap-4 justify-center"
        >
          {heroSectionIcons.map((icon, index) => (
            <motion.a
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "tween", index * 0.5, 1)}
              whileHover={{ scale: 1.2, borderRadius: "50%" }}
              whileTap={{ scale: 0.9 }}
              href={icon.link}
              key={index}
              className="flex justify-center items-center h-14 w-14 rounded-2xl bg-secondary dark:bg-primary transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={icon.icon}
                className="text-primary dark:text-secondary"
                size="2xl"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center items-center"
          href="#about"
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className="animate-bounce"
            size="3x"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
