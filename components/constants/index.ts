import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

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
};

export const socials: social[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
  },
  {
    link: "https://linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
  },
];

type heroSectionIcon = {
  link: string;
  icon: IconDefinition;
};

export const heroSectionIcons: heroSectionIcon[] = [
  {
    link: "#projects",
    icon: faFolderOpen,
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
  },
  {
    link: "#contact",
    icon: faEnvelope,
  },
];

