"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { fadeIn } from "../utils/motion";

type Props = {
  project: any;
  index: number;
};

const ProjectCard = ({ project, index }: Props) => {
  const [active, setActive] = useState("2");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      key={index}
      className={`relative ${
        active === project.id
          ? "lg:flex-[2.5] flex-[10]"
          : "lg:flex-[0.5] flex-[2] cursor-pointer"
      } center transition-[flex] duration-[0.7s]`}
      onClick={() => setActive(project.id)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={false}
        sizes="max-width: 700px"
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
          {project.interact.map((item: any, index: number) => (
            <div key={index} className="flex gap-4 items-center">
              <a href={item.link} aria-label={item.labelIcon}>
                <FontAwesomeIcon icon={item.icon} color="#FFFFFF" size="xl" />
              </a>
              <a
                href={item.live}
                className="text projectLink"
                aria-label={item.labelLive}
              >
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
  );
};

export default ProjectCard;
