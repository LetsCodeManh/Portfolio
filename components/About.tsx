import AboutContent from "./about/AboutContent";
import AboutImage from "./about/AboutImage";

const About = () => {
  return (
    <section id="about" className={`justify-center py-12 2xl:flex-row-reverse 2xl:gap-4`}>
      <AboutImage />
      <AboutContent />
    </section>
  );
};

export default About;
