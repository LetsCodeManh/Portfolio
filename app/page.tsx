import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AboutSkills from "@/components/about/AboutSkills";
import Cursor from "@/components/reuse/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <header className={`relative`}>
        <Navigation />
      </header>
      <main className={`z-0 bg-primary dark:bg-secondary`}>
        <Hero />
        <About />
        <AboutSkills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
