import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

type contact = {
  link: string;
  icon: IconType;
  label: string;
};

export const contactSectionSocials: contact[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: FaGithub,
    label: "Check out my GitHub Page",
  },
  {
    link: "https://linkedin.com/in/manh-nguyen-0a094524b",
    icon: FaLinkedinIn,
    label: "Contact me on LinkedIn",
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: FaFileAlt,
    label: "Download my resume",
  },
  {
    link: "mailto:manhng.dev@gmail.com",
    icon: FaEnvelope,
    label: "Write me an email",
  },
  {
    link: "tel:0176-21437917",
    icon: FaPhone,
    label: "Call me",
  },
];
