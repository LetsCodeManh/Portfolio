"use client";
import Image from "next/image";
import Profilpicture from "../../public/Profilbild.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutImage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("right", "tween", 1.5, 0.5)}
      className="hidden 2xl:block relative flex-[1]"
    >
      <div className="absolute w-[400px] h-[80%] top-1/2 -translate-y-1/2 -left-16 bg-dark rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={Profilpicture}
          alt="Manh Nguyen Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default AboutImage;
