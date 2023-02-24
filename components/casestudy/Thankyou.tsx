"use client";
import Link from "next/link";
import { introductionLinks } from "../constants/casestudy";
import Icon from "../reuse/ReactIconReuse";
import SquareButton from "../reuse/SquareButton";
import { motion } from "framer-motion";
import { GiJourney } from "react-icons/gi";

const Thankyou = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center min-h-screen bg-fixed bg-center bg-cover backgroundImage relative z-30">
      <div className="absolute bg-dark inset-0 opacity-70" />
      <div className="flex flex-col items-center z-10 gap-6 text-primary px-[5%] sm:px-[10%] md:px-[15%] lg:px-[17.5%]">
        <h1 className="header">Thank you...</h1>
        <p className="semibold">
          ...for taking the time to read this case study! I hope it provided you
          with valuable insights into my development process and the skills I
          bring to the table.
        </p>
        <p className="semibold">
          If you&apos;re interested in learning more about my other projects,
          please click the link below to check out my portfolio. And if you have
          any questions or would like to connect, don&apos;t hesitate to reach
          out. I&apos;m always happy to hear from fellow developers and
          potential collaborators.
        </p>
        <div className="flex gap-4">
          <motion.div
            whileHover={{ scale: 1.2, borderRadius: "99rem" }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="projects"
              className="square border-primary dark:border-primary hover:bg-dark dark:hover:bg-dark"
              aria-label="Visit my project pages"
            >
              <Icon
                icon={GiJourney}
                className="text-primary dark:text-primary"
              />
            </Link>
          </motion.div>

          {introductionLinks.map((social, index) => (
            <SquareButton
              key={index}
              target="_blank"
              stylesButton="border-primary dark:border-primary hover:bg-dark dark:hover:bg-dark"
              stylesIcon="text-primary dark:text-primary"
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
