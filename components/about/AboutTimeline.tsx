"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import AboutTimelineContainer from "./AboutTimelineContainer";

const AboutTimeline = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="gap-4 justify-center py-12"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="biggerText text-dark dark:text-primary"
      >
        | Timeline
      </motion.h1>
      <AboutTimelineContainer />
    </motion.section>
  );
};

export default AboutTimeline;
