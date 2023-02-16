import { Quicksand } from "@next/font/google";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header className={`${quicksand.className} relative`}>
        <Navigation />
      </header>
      <main
        className={`${quicksand.className} z-0 bg-primary dark:bg-secondary`}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className={quicksand.className}>
        <Footer />
      </footer>
    </>
  );
}
