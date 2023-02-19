import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faFileAlt,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

type heroSectionIcon = {
  link: string;
  icon: IconDefinition;
  label: string;
};

export const heroSectionIcons: heroSectionIcon[] = [
  {
    link: "#projects",
    icon: faFolderOpen,
    label: "View Projects",
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
    label: "Download my resume",
  },
  {
    link: "#contact",
    icon: faEnvelope,
    label: "Contact Me",
  },
];
