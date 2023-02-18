"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRef } from "react";
import { aboutSectionIcons } from "./constants";
import { fadeIn } from "./utils/motion";

function About() {
  const constraintsRef = useRef(null);

  return (
    <section
      id="about"
      className="flex flex-col space-y-8 justify-center px-[5%] sm:px-[10%] md:px-[10%] lg:px-[15%] relative"
    >
      <div className="display flex flex-col justify-center items-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          src="./Profilbild.jpg"
          className="rounded-2xl w-96 object-cover lg:-translate-x-[150px] translate-y-[25px] xl:translate-y-50px"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-secondary dark:bg-primary -translate-y-[25px] xl:translate-x-[200px] xl:-translate-y-[50px] p-8 rounded-2xl flex flex-col gap-4 max-w-[750px]"
        >
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="header font-semibold text-dark dark:text-dark"
          >
            | About Me
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text font-normal text-primary dark:text-secondary"
          >
            Hi,{" "}
            <span className="font-semibold text-dark">
              I&apos;m Manh, a Full-Stack developer
            </span>{" "}
            looking to make a career change. With{" "}
            <span className="font-semibold text-dark">
              a background in business, design, and coding,
            </span>{" "}
            my experience creating my own business has given me an excellent
            understanding of the consumer perspective and experience with web
            design.{" "}
            <span className="font-semibold text-dark">
              My goal as a developer is to join a dynamic company where I can
              utilize my knowledge and expertise to help the company to succeed
              and grow.
            </span>{" "}
            I am passionate about using technology to create solutions and{" "}
            <span className="font-semibold text-dark">
              solve complex problems.
            </span>
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex gap-4"
          >
            {aboutSectionIcons.map((icon, index) => (
              <motion.a
                initial="hidden"
                whileInView="show"
                variants={fadeIn("up", "tween", index * 0.25, 1)}
                whileHover={{ scale: 1.2, borderRadius: "50%" }}
                whileTap={{ scale: 0.9 }}
                href={icon.link}
                key={index}
                className="flex justify-center items-center h-14 w-14 rounded-2xl bg-primary dark:bg-secondary transition-colors duration-200"
              >
                <FontAwesomeIcon
                  icon={icon.icon}
                  className="text-dark dark:text-dark"
                  size="2xl"
                />
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.2, borderRadius: "3.5rem" }}
              whileTap={{ scale: 0.9 }}
              href="#nothing"
              className="flex justify-center items-center h-14 px-4 rounded-2xl bg-primary dark:bg-secondary transition-colors duration-200 text-dark dark:text-dark font-extrabold text-lg"
            >
              More!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
