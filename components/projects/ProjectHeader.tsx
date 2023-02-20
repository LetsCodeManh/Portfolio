"use client";
import React from "react";
import { projectSectionLink } from "../constants/projects";
import TextRandomizer from "../reuse/TextRandomizer";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectHeader = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="min-h-screen downCenter text-center gap-8"
    >
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        className="header text-secondary dark:text-dark"
      >
        Journey 🚀
        <br />
        Through <br />
        <TextRandomizer text="My Projects" />
      </motion.h1>
      <motion.h2 variants={fadeIn("up", "tween", 0.3, 1)} className="bigText">
        Welcome to my projects page. Take a journey through my completed
        projects. Move between frontend, backend, and fullstack sections by
        clicking on the links below...
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="center gap-6 flex-col sm:flex-row"
      >
        {projectSectionLink.map((project, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.5, 1)}
            key={index}
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                borderRadius: "99rem",
              }}
              whileTap={{ scale: 0.9 }}
              className="border-2 p-4 rounded-2xl border-dark dark:border-dark hover:bg-secondary dark:hover:bg-primary transition-colors duration-500"
            >
              <a
                href={project.href}
                className="text font-semibold text-dark dark:text-dark"
              >
                {project.name}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectHeader;
