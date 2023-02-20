import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

type Props = {
  project: any;
  index: number;
  active: string;
  setActive: (active: string) => void;
};

const ProjectCard = ({ project, index, active, setActive }: Props) => {
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
      } center transition-[flex] duration-[0.7s] rounded-3xl overflow-hidden shadow-2xl`}
      onClick={() => setActive(project.id)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={false}
        sizes="max-width: 700px"
        className="absolute w-full h-full object-cover"
      />

      {active !== project.id ? (
        <>
          <div className="absolute w-full h-full bg-dark bg-opacity-60" />
          <h2 className="bigText text-primary absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
            {project.title}
          </h2>
        </>
      ) : (
        <div className="absolute bottom-0 p-6 flex flex-col gap-2 w-full bg-dark bg-opacity-70 text-primary dark:text-primary">
          <p className="text">{project.technology}</p>
          <h2 className="biggerText">{project.title}</h2>
          {project.interact.map((item: any, index: number) => (
            <div key={index} className="flex gap-4 items-center">
              <a
                href={item.link}
                aria-label={item.labelIcon}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={item.icon} className="text-primary hover:text-secondary dark:hover:text-secondary transition-colors duration-300" size="xl" />
              </a>
              <a
                href={item.live}
                className="text projectLink"
                aria-label={item.labelLive}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a href={item.caseStudy} className="text projectLink">
                CaseStudy
              </a>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
