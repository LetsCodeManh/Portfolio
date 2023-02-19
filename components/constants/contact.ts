import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

type contact = {
  link: string;
  icon: IconDefinition;
  label: string;
};

export const contactSectionSocials: contact[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
    label: "Check out my GitHub Page",
  },
  {
    link: "https://linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
    label: "Contact me on LinkedIn",
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
    label: "Download my resume",
  },
  {
    link: "mailto:manhng.dev@gmail.com",
    icon: faEnvelope,
    label: "Write me an email",
  },
  {
    link: "tel:0176-21437917",
    icon: faPhone,
    label: "Call me",
  },
];
