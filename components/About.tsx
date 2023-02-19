"use client";
import { motion } from "framer-motion";
import AboutContent from "./about/AboutContent";

const About = () => {
  return (
    <section id="about" className={`justify-center py-12 `}>
      <div className="downCenter">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src="./Profilbild.jpg"
          className="rounded-2xl w-72 lg:w-96 object-cover -translate-x-[200px] translate-y-[50px] xl:translate-y-50px hidden md:block"
        />
        <AboutContent />
      </div>
    </section>
  );
}

export default About;
