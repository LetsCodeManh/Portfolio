import { projectsBackend } from "@/components/constants/projectsBackend";
import { projectsFrontend } from "@/components/constants/projectsFrontend";
import { projectsFullStack } from "@/components/constants/projectsFullStack";
import Footer from "@/components/Footer";
import ProjectContainer from "@/components/projects/ProjectContainer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className={`relative`}>
        <Link href="/">Home</Link>
        <h1>My Projects</h1>
      </header>

      <main className="bg-primary dark:bg-secondary">
        <ProjectContainer
          sectionId="frontend"
          sectionTitle="Frontend Projects"
          projectInfo={projectsFrontend}
          number="2"
        />
        <ProjectContainer
          sectionId="backend"
          sectionTitle="Backend Projects"
          projectInfo={projectsBackend}
          number="1"
        />
        <ProjectContainer
          sectionId="fullstack"
          sectionTitle="Full-Stack Projects"
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
