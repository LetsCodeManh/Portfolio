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
      <header className={quicksand.className}>
        <Navigation />
      </header>
      <main className={quicksand.className}>
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
