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
    link: "https://drive.google.com/file/d/1JxykYXprMaDz9uX8n6WtMFK_022pbgS0/view?usp=share_link",
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
