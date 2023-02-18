import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

type contact = {
  link: string;
  icon: IconDefinition;
};

export const contactSectionSocials: contact[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
  },
  {
    link: "https://linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
  },
  {
    link: "mailto:manhng.dev@gmail.com",
    icon: faEnvelope,
  },
  {
    link: "tel:0176-21437917",
    icon: faPhone,
  },
];
