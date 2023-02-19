"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectSectionInfo } from "../constants/projects";
import { fadeIn } from "../utils/motion";

const ProjectContainer = () => {
  const [active, setActive] = useState("2");

  return (
    <div className="flex lg:flex-row flex-col min-h-[70vh] gap-4">
      {projectSectionInfo.map((project, index) => (
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "spring", index * 0.25, 0.75)}
          key={index}
          className={`relative ${
            active === project.id
              ? "lg:flex-[3.5] flex-[10]"
              : "lg:flex-[0.5] flex-[2] cursor-pointer"
          } center transition-[flex] duration-[0.7s] ease-out-flex`}
          onClick={() => setActive(project.id)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute w-full h-full object-cover rounded-3xl"
          />

          {active !== project.id ? (
            <>
              <div className="absolute w-full h-full bg-dark rounded-3xl bg-opacity-60" />
              <h4 className="text-primary absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
                {project.title}
              </h4>
            </>
          ) : (
            <div className="absolute bottom-0 p-6 flex flex-col gap-2 w-full bg-dark bg-opacity-70 rounded-b-3xl text-primary dark:text-primary">
              <p>{project.technology}</p>
              <h3>{project.title}</h3>
              {project.interact.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <a href={item.link}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      color="#FFFFFF"
                      size="xl"
                    />
                  </a>
                  <a href={item.live} className="text projectLink">
                    Live
                  </a>
                  <a href={item.caseStudy} className="text projectLink">
                    Case Study
                  </a>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectContainer;
