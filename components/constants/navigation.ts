import { IconType } from "react-icons";
import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const sections = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

type social = {
  link: string;
  icon: IconType;
  label: string;
};

export const socials: social[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: FaGithub,
    label: "Visit my GitHub profile",
  },
  {
    link: "https://linkedin.com/in/manhngdev",
    icon: FaLinkedinIn,
    label: "Visit my LinkedIn profile",
  },
  {
    link: "https://drive.google.com/file/d/1LJ6G0zifBBe8pJTCO1vu_7eXUszG1jkt/view?usp=sharing",
    icon: FaFileAlt,
    label: "Download my resume",
  },
];
