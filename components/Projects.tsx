"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectSectionInfo } from "./constants";
import { fadeIn } from "./utils/motion";

const Projects = () => {
  const [active, setActive] = useState("2");

  return (
    <section
      id="projects"
      className="flex flex-col space-y-8 justify-center px-[5%] sm:px-[10%] md:px-[10%] lg:px-[15%] relative"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        className="flex flex-col gap-10"
      >
        <h1 className="header font-semibold text-dark dark:text-dark">
          | Projects
        </h1>
        <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projectSectionInfo.map((project, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={index}
              className={`relative ${
                active === project.id
                  ? "lg:flex-[3.5] flex-[10]"
                  : "lg:flex-[0.5] flex-[2] cursor-pointer"
              } flex items-center justify-center  h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
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
                  <h2 className="font-semibold text text-primary absolute z-0 lg:bottom-20 lg:rotate-[-90deg] ">
                    {project.title}
                  </h2>
                </>
              ) : (
                <div className="absolute bottom-0 p-8 flex flex-col gap-2 w-full  bg-dark bg-opacity-60 rounded-b-3xl">
                  <div className="flex gap-4 items-center">
                    {project.technology.map((technology, index) => (
                      <FontAwesomeIcon
                        icon={technology.icon}
                        key={index}
                        color={technology.color}
                        size="2xl"
                      />
                    ))}
                  </div>
                  <h2 className="font-semibold sm:text-[32px] text-[24px] text-primary">
                    {project.title}
                  </h2>
                  {project.interact.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <a href={item.link}>
                        <FontAwesomeIcon
                          icon={item.icon}
                          color="#FFFFFF"
                          size="2xl"
                        />
                      </a>
                      <a
                        href={item.live}
                        className="text font-semibold px-2 border-2 rounded-md"
                      >
                        Live
                      </a>
                      <a
                        href={item.caseStudy}
                        className="text font-semibold px-2 border-2 rounded-md"
                      >
                        Case Study
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
