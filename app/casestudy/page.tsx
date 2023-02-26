import Background from "@/components/casestudy/Background";
import HeroCase from "@/components/casestudy/HeroCase";
import Thankyou from "@/components/casestudy/Thankyou";
import Cursor from "@/components/reuse/Cursor";
import HomeButton from "@/components/reuse/HomeButton";
import ScrollUp from "@/components/reuse/ScrollUp";

export default function CaseStudy() {
  return (
    <>
      <Cursor />
      <header>
        <HomeButton />
        <ScrollUp />
      </header>
      <main className="bg-primary dark:bg-secondary">
        <HeroCase />
        <Background />
        <Thankyou />
      </main>
    </>
  );
}
