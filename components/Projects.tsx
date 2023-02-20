"use client"
import Link from "next/link";
import { useState } from "react";
import { projectSectionInfo } from "./constants/projects";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const [active, setActive] = useState("2");

  return (
    <section id="projects" className={`justify-center py-12 min-h-screen`}>
      <div className="flex flex-col gap-10">
        <h1 className="subheader text-dark dark:text-primary">| Projects</h1>
        <div className="flex lg:flex-row flex-col min-h-[70vh] gap-4">
          {projectSectionInfo.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <Link href="/projects" className="text text-dark dark:text-dark">
          Want More? Check out all of my projects!
        </Link>
      </div>
    </section>
  );
};

export default Projects;
