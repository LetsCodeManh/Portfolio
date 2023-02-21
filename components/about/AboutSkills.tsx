"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import AboutSkillsSection from "./AboutSkillsSection";
import {
  backendSkills,
  frontendSkills,
  testing,
  tools,
} from "../constants/aboutSkills";

const AboutSkills = () => {
  return (
    <motion.section initial="hidden" whileInView="show" className="gap-4">
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="biggerText text-dark dark:text-primary"
      >
        | Technology
      </motion.h1>
      <AboutSkillsSection
        skillsTitle="| Frontend Development"
        skillsInfo={frontendSkills}
      />
      <AboutSkillsSection
        skillsTitle="| Backend Development"
        skillsInfo={backendSkills}
      />
      <AboutSkillsSection skillsTitle="| Tools" skillsInfo={tools} />
      <AboutSkillsSection skillsTitle="| Testing" skillsInfo={testing} />
    </motion.section>
  );
};

export default AboutSkills;
