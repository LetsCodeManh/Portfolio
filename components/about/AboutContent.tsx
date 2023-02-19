import { motion } from "framer-motion";
import { aboutSectionIcons } from "../constants/about";
import SquareButton from "../reuse/SquareButton";
import { fadeIn } from "../utils/motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-secondary dark:bg-primary xl:translate-x-[200px] sm:-translate-y-[50px] p-8 lg:p-12 xl:p-16 rounded-2xl flex flex-col gap-4 max-w-[750px] z-[1]"
    >
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0, 1)}
        className=" text-dark dark:text-dark"
      >
        | About Me
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.3, 1)}
        className=" text-primary dark:text-secondary"
      >
        Hi, <span>I&apos;m Manh, a Full-Stack developer</span> looking to make a
        career change. With
        <span> a background in business, design, and coding,</span> my
        experience creating my own business has given me an excellent
        understanding of the consumer perspective and experience with web
        design.
        <span>
          {" "}
          My goal as a developer is to join a dynamic company where I can
          utilize my knowledge and expertise to help the company to succeed and
          grow.
        </span>{" "}
        I am passionate about using technology to create solutions and{" "}
        <span>solve complex problems.</span>
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="flex gap-4"
      >
        {aboutSectionIcons.map((icon, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.5, 1)}
            key={index}
          >
            <SquareButton
              key={index}
              target={icon.link.startsWith("#") ? "_self" : "_blank"}
              stylesButton="bg-primary dark:bg-secondary"
              stylesIcon="text-dark dark:text-dark"
              link={icon.link}
              icon={icon.icon}
              label={icon.label}
            />
          </motion.div>
        ))}
        <motion.a
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 1.2, 1)}
          whileHover={{ scale: 1.2, borderRadius: "3.5rem" }}
          whileTap={{ scale: 0.9 }}
          href="#nothing"
          className="center h-12 lg:h-12 px-4 rounded-2xl bg-primary dark:bg-secondary text-dark dark:text-dark font-extrabold text-lg"
        >
          More!
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
