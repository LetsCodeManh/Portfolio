import { projectsBackend } from "@/components/constants/projectsBackend";
import { projectsFrontend } from "@/components/constants/projectsFrontend";
import { projectsFullStack } from "@/components/constants/projectsFullStack";
import Footer from "@/components/Footer";
import ProjectContainer from "@/components/projects/ProjectContainer";
import ProjectHeader from "@/components/projects/ProjectHeader";
import HomeButton from "@/components/reuse/HomeButton";
import ScrollUp from "@/components/reuse/ScrollUp";

export default function Page() {
  return (
    <>
      <header className={`sectionContainer bg-primary dark:bg-secondary`}>
        <HomeButton />
        <ProjectHeader />
        <ScrollUp />
      </header>

      <main className="bg-primary dark:bg-secondary">
        <ProjectContainer
          sectionId="frontend"
          sectionTitle="| Frontend Projects"
          projectInfo={projectsFrontend}
          number="2"
        />
        <ProjectContainer
          sectionId="backend"
          sectionTitle="| Backend Projects"
          projectInfo={projectsBackend}
          number="1"
        />
        <ProjectContainer
          sectionId="fullstack"
          sectionTitle="| Full-Stack Projects"
          projectInfo={projectsFullStack}
          number="2"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
