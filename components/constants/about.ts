import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GiGrowth, GiMeditation, GiRiceCooker, GiRocket } from "react-icons/gi";

type aboutSectionIcon = {
  link: string;
  icon: IconType;
  label: string;
};

export const aboutSectionIcons: aboutSectionIcon[] = [
  {
    link: "#contact",
    icon: FaEnvelope,
    label: "Contact me per this form",
  },
  {
    link: "https://github.com/LetsCodeManh",
    icon: FaGithub,
    label: "Visit my GitHub Page",
  },
  {
    link: "https://linkedin.com/in/manhngdev",
    icon: FaLinkedinIn,
    label: "Visit and Contact me on LinkedIn",
  },
];

type Interesse = {
  icon: IconType;
  description: string;
};

export const aboutInteress: Interesse[] = [
  {
    icon: GiRiceCooker,
    description:
      "Cooking is one of my passions - there's nothing better than having good food on the table!",
  },
  {
    icon: GiMeditation,
    description:
      "Meditation is a daily reset for me - it helps me stay focused and centered.",
  },
  {
    icon: GiRocket,
    description:
      "Learning is one of my passions - there's always something new to discover!",
  },
];
