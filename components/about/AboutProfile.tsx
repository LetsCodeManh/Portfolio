"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutProfile = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="flexDown text-center lg:text-left lg:items-start justify-center pt-[20vh] pb-6"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="header text-dark dark:text-dark"
      >
        👋 I&apos;m Manh!
      </motion.h1>
      <motion.p variants={fadeIn("up", "tween", 0.2, 1)}>
        I&apos;m a young <span>entrepreneur, designer,</span> and{" "}
        <span>developer</span> always looking for new challenges and
        opportunities to learn and grow.
      </motion.p>
    </motion.section>
  );
};

export default AboutProfile;
