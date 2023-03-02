import { IconType } from "react-icons";
import { FaEnvelope, FaFileAlt, FaFolderOpen } from "react-icons/fa";

type heroSectionIcon = {
  link: string;
  icon: IconType;
  label: string;
  text: string
};

export const heroSectionIcons: heroSectionIcon[] = [
  {
    link: "#projects",
    icon: FaFolderOpen,
    label: "View Projects",
    text: "Projects"
  },
  {
    link: "https://drive.google.com/file/d/1LJ6G0zifBBe8pJTCO1vu_7eXUszG1jkt/view?usp=sharing",
    icon: FaFileAlt,
    label: "Download my resume",
    text: "Resume"
  },
  {
    link: "#contact",
    icon: FaEnvelope,
    label: "Contact Me",
    text: ""
  },
];
