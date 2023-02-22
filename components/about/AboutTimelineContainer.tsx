"use client";
import { timeline } from "../constants/aboutTimeline";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutTimelineContainer = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0, 1)}
      className="flex flex-col gap-8 m-4"
    >
      {timeline.map((stage, index) => (
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.1, 1)}
          key={index}
          className="bg-secondary dark:bg-primary rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4"
        >
          <h3 className="smallText text-primary dark:text-dark">
            {stage.locationDate}
          </h3>
          <h2 className="bigText text-dark dark:text-secondary">
            | {stage.certificate}
          </h2>
          {stage.descriptions.length > 0 && (
            <div className="flex flex-col gap-4">
              {stage.descriptions.map((description, index) => (
                <p key={index} className="smallText text-primary dark:text-dark">
                  {description}
                </p>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutTimelineContainer;
