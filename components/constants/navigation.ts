import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

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
  icon: IconDefinition;
  label: string;
};

export const socials: social[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
    label: "Visit my GitHub profile",
  },
  {
    link: "https://linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
    label: "Visit my LinkedIn profile",
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
    label: "Download my resume",
  },
];
