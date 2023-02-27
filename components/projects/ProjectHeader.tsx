"use client";
import React from "react";
import { projectSectionLink } from "../constants/projects";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectHeader = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="min-h-screen downCenter text-center gap-6"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="header text-secondary dark:text-dark"
      >
        🚀
        <br />
        Journey
        <br />
        Through My
        <br />
        Projects Library
      </motion.h1>
      <motion.h2 variants={fadeIn("up", "tween", 0.3, 1)} className="bigText">
        Welcome to my projects page. Take a journey through my completed
        projects. Move between frontend, backend, and fullstack sections by
        clicking on the links below...
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="center gap-2 sm:gap-4 md:gap-8"
      >
        {projectSectionLink.map((project, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.5, 1)}
            key={index}
          >
            <motion.a
              whileHover={{
                scale: 1.2,
                borderRadius: "99rem",
              }}
              whileTap={{ scale: 0.9 }}
              href={project.href}
              className="border-2 p-2 sm:p-4 rounded-2xl border-dark dark:border-dark hover:bg-secondary dark:hover:bg-primary transition-colors duration-500 cursor-pointer text font-semibold text-dark dark:text-dark"
            >
              {project.name}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectHeader;
