import { IconType } from "react-icons";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiCucumber,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiHeroku,
  SiJest,
  SiMaterialui,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPuppeteer,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type social = {
  color: string;
  icon: IconType;
};

export const frontendSkills: social[] = [
  {
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    icon: FaAngular,
    color: "#",
  },
  {
    icon: FaHtml5,
    color: "#",
  },
  {
    icon: FaCss3,
    color: "#",
  },
  {
    icon: FaSass,
    color: "#",
  },
  {
    icon: FaJs,
    color: "#",
  },
  {
    icon: SiTypescript,
    color: "#",
  },
  {
    icon: SiTailwindcss,
    color: "#",
  },
  {
    icon: FaBootstrap,
    color: "#",
  },
  {
    icon: SiMaterialui,
    color: "#",
  },
  {
    icon: SiFramer,
    color: "#",
  },
];

export const backendSkills: social[] = [
  {
    icon: FaNodeJs,
    color: "#",
  },
  {
    icon: SiExpress,
    color: "#",
  },
  {
    icon: SiFirebase,
    color: "#",
  },
  {
    icon: SiPostgresql,
    color: "#",
  },
  {
    icon: SiMongodb,
    color: "#",
  },
  {
    icon: FaAws,
    color: "#",
  },
];

export const tools: social[] = [
  {
    icon: FaGithub,
    color: "#",
  },
  {
    icon: SiVercel,
    color: "#",
  },
  {
    icon: SiNetlify,
    color: "#",
  },
  {
    icon: SiHeroku,
    color: "#",
  },
  {
    icon: FaGitAlt,
    color: "#",
  },
  {
    icon: FaFigma,
    color: "#",
  },
  {
    icon: SiPostman,
    color: "#",
  },
];

export const testing: social[] = [
  {
    icon: SiJest,
    color: "#",
  },
  {
    icon: SiCucumber,
    color: "#",
  },
  {
    icon: SiPuppeteer,
    color: "#",
  },
];
