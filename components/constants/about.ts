import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type aboutSectionIcon = {
  link: string;
  icon: IconDefinition;
  label: string;
};

export const aboutSectionIcons: aboutSectionIcon[] = [
  {
    link: "#contact",
    icon: faEnvelope,
    label: "Contact me per this form"
  },
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
    label: "Visit my GitHub Page"
  },
  {
    link: "linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
    label: "Visit and Contact me on LinkedIn"
  },
];