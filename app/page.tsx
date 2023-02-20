import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <header className={`relative`}>
        <Navigation />
      </header>
      <main className={`z-0 bg-primary dark:bg-secondary`}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
