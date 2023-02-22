import AboutContact from "@/components/about/AboutContact";
import AboutPerson from "@/components/about/AboutPerson";
import AboutProfile from "@/components/about/AboutProfile";
import AboutSkills from "@/components/about/AboutSkills";
import AboutTimeline from "@/components/about/AboutTimeline";
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
        <AboutPerson />
        <AboutSkills />
        <AboutTimeline />
        <AboutContact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
