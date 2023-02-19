import ProjectContainer from "./projects/ProjectContainer";
import ArrowDown from "./reuse/ArrowDown";


const Projects = () => {

  return (
    <section
      id="projects"
      className={`justify-center py-12`}
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-dark dark:text-primary">
          | Projects
        </h2>
        <ProjectContainer />
        <ArrowDown href="#contact"/>
      </div>
    </section>
  );
};

export default Projects;
