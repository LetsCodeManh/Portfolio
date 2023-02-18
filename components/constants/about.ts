import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type aboutSectionIcon = {
  link: string;
  icon: IconDefinition;
};

export const aboutSectionIcons: aboutSectionIcon[] = [
  {
    link: "#contact",
    icon: faEnvelope,
  },
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
  },
  {
    link: "linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
  },
];