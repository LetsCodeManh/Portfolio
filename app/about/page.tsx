import AboutContact from "@/components/about/AboutContact";
import AboutProfile from "@/components/about/AboutProfile";
import AboutSkills from "@/components/about/AboutSkills";
import Footer from "@/components/Footer";
import HomeButton from "@/components/reuse/HomeButton";
import ScrollUp from "@/components/reuse/ScrollUp";

export default function AboutMe() {
  return (
    <>
      <header>
        <HomeButton />
        <ScrollUp />
      </header>

      <main className="bg-primary dark:bg-secondary">
        <AboutProfile />
        <AboutSkills />
        <AboutContact/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
