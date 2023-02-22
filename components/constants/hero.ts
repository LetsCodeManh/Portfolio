import { IconType } from "react-icons";
import { FaEnvelope, FaFileAlt, FaFolderOpen } from "react-icons/fa";

type heroSectionIcon = {
  link: string;
  icon: IconType;
  label: string;
};

export const heroSectionIcons: heroSectionIcon[] = [
  {
    link: "#projects",
    icon: FaFolderOpen,
    label: "View Projects",
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: FaFileAlt,
    label: "Download my resume",
  },
  {
    link: "#contact",
    icon: FaEnvelope,
    label: "Contact Me",
  },
];
