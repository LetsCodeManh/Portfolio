"use client";
import { motion } from "framer-motion";
import SkillsIcon from "../reuse/SkillsIcon";
import { fadeIn } from "../utils/motion";

type Props = {
  skillsTitle: string;
  skillsInfo: any;
};

const AboutSkillsSection = ({ skillsTitle, skillsInfo }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-primary rounded-2xl m-4 shadow-2xl"
    >
      <motion.h2
        variants={fadeIn("up", "tween", 0, 1)}
        className="text font-semibold text-dark dark:text-dark"
      >
        {skillsTitle}
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", 0, 1)}
        className="flex gap-4 flex-wrap justify-evenly lg:justify-start"
      >
        {skillsInfo.map((icon: any, index: number) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.25, 1)}
            key={index}
          >
            <SkillsIcon
              key={index}
              stylesButton={`border-primary dark:border-secondary hover:bg-primary dark:hover:bg-secondary`}
              stylesIcon="text-dark dark:text-dark"
              icon={icon.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSkillsSection;
