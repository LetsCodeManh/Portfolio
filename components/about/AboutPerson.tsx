"use client";
import { motion } from "framer-motion";
import { aboutInteress } from "../constants/about";
import { contactSectionSocials } from "../constants/contact";
import Icon from "../reuse/ReactIconReuse";
import SquareButton from "../reuse/SquareButton";
import { fadeIn } from "../utils/motion";

const AboutPerson = () => {
  return (
    <section className="items-center ">
      <motion.div initial="hidden" whileInView="show" className="flexDown py-6">
        <motion.h2
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="biggerText"
        >
          | A little bit about me...
        </motion.h2>
        <motion.p variants={fadeIn("up", "tween", 0.7, 1)}>
          &mdash; after graduating high school, I completed an{" "}
          <span>apprenticeship</span> as a{" "}
          <span>technical product designer</span> and worked in the same company
          for an additional year.
        </motion.p>
        <motion.p variants={fadeIn("up", "tween", .8, 1)}>
          However, <span>my thirst for more challenges</span> led me to{" "}
          <span>create my own company</span> where I tried out new things and
          businesses.
        </motion.p>
        <motion.p variants={fadeIn("up", "tween", .9, 1)}>
          After a while, I decided to{" "}
          <span>pursue the path of a developer</span> and enrolled in a
          bootcamp. Now, I&apos;ve just <span>finished my bootcamp</span> and am{" "}
          <span>eager to apply</span> my knowledge and grow even further.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" className="flexDown py-6">
        <motion.h2
          variants={fadeIn("up", "tween", 1.2, 1)}
          className="biggerText"
        >
          | Interess
        </motion.h2>
        <motion.p variants={fadeIn("up", "tween", 1.3, 1)}>
          When I&apos;m not coding, I enjoy{" "}
          <span>listening to audiobooks, reading</span> and{" "}
          <span>learning new skills, meditating, and cooking.</span>
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 1.4, 1)}
          className="flexDown"
        >
          {aboutInteress.map((interess, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.25, 1)}
              key={index}
              className="flex gap-4 items-center justify-center border-2 p-4 border-dark rounded-2xl"
            >
              <div className="border-2 border-dark rounded-2xl p-2 center">
                <Icon icon={interess.icon} size="3rem" className="dark:text-dark" />
              </div>
              <p className="flex-1 text font-semibold text-secondary dark:text-primary">
                {interess.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" className="flexDown py-6">
        <motion.h2
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="biggerText"
        >
          | Personality
        </motion.h2>
        <motion.p variants={fadeIn("up", "tween", 0.6, 1)}>
          As an <span>INTJ-A</span> personality type, I&apos;m{" "}
          <span>analytical, strategic,</span> and{" "}
          <span>always seeking knowledge.</span> I&apos;m driven by a{" "}
          <span>desire to understand how things work</span> and{" "}
          <span>find solutions to complex problems.</span>
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" className="flexDown">
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-secondary dark:text-primary"
        >
          Interested in learning more? Feel free to send me a message or connect
          with me on my social media channels listed below.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="flex gap-4"
        >
          {contactSectionSocials.map((social, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.25, 1)}
              key={index}
            >
              <SquareButton
                key={index}
                target="_blank"
                stylesButton="border-dark dark:border-dark hover:bg-secondary dark:hover:bg-primary"
                stylesIcon="text-dark dark:text-dark"
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPerson;
