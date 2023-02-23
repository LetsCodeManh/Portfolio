"use client";
import { timeline } from "../constants/aboutTimeline";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutTimelineContainer = () => {
  return (
    <motion.ol
      variants={fadeIn("up", "tween", 0, 1)}
      className="relative border-l border-gray-200 dark:border-gray-700"
    >
      {timeline.map((stage, index) => (
        <motion.li
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.1, 1)}
          key={index}
          className="pb-10 ml-8"
        >
          <div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full mt-[.4rem] border border-secondary dark:border-dark dark:bg-primary" />
          <p className="smallText text-secondary dark:text-primary">
            {stage.locationDate}
          </p>
          <h2 className="bigText text-dark dark:text-dark">
            | {stage.certificate}
          </h2>
          {stage.descriptions.length > 0 && (
            <div className="flex flex-col gap-4">
              {stage.descriptions.map((description, index) => (
                <p
                  key={index}
                  className="smallText text-secondary dark:text-primary"
                >
                  {description}
                </p>
              ))}
            </div>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
};

export default AboutTimelineContainer;
