"use client"
import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Props = {
  sectionId: string;
  sectionTitle: string;
  projectInfo: any;
};

const ProjectContainer = ({ sectionId, sectionTitle, projectInfo }: Props) => {
  const [active, setActive] = useState("2");

  return (
    <section id={sectionId} className={`justify-center py-12 min-h-screen`}>
      <div className="flex flex-col gap-10">
        <h1 className="subheader text-dark dark:text-primary">
          {sectionTitle}
        </h1>
        <div className="flex lg:flex-row flex-col min-h-[70vh] gap-4">
          {projectInfo.map((project: any, index: number) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
