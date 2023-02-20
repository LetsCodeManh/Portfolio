import { projectsFrontend } from "@/components/constants/projectsFrontend";
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
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
