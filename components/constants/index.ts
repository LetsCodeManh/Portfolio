import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileAlt,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

export const sections = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

type social = {
  link: string;
  icon: IconDefinition;
};

export const socials: social[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: faGithub,
  },
  {
    link: "https://linkedin.com/in/manh-nguyen-0a094524b",
    icon: faLinkedinIn,
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
  },
];

type heroSectionIcon = {
  link: string;
  icon: IconDefinition;
};

export const heroSectionIcons: heroSectionIcon[] = [
  {
    link: "#projects",
    icon: faFolderOpen,
  },
  {
    link: "https://drive.google.com/file/d/1luJkiiMnfZZZaLVLEhtta0cc3J3OENzZ/view?usp=sharing",
    icon: faFileAlt,
  },
  {
    link: "#contact",
    icon: faEnvelope,
  },
];

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

type Technology = {
  icon: IconDefinition;
  color: string;
};

type projects = {
  id: string;
  image: string;
  title: string;
  technology: Technology[];
  interact: [
    {
      icon: IconDefinition;
      link: string;
      live: string;
      caseStudy: string;
    }
  ];
};

export const projectSectionInfo: projects[] = [
  {
    id: "1",
    image: "/Zelda.png",
    title: "Zelda Hyrule Compendium",
    technology: [
      {
        icon: faHtml5,
        color: "#E44D26",
      },
      {
        icon: faCss3Alt,
        color: "#1572B6",
      },
      {
        icon: faJs,
        color: "#F7DF1E",
      },
    ],
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/Hyrule-Compendium-js-app",
        live: "https://letscodemanh.github.io/Hyrule-Compendium-js-app/",
        caseStudy: "#",
      },
    ],
  },
  {
    id: "2",
    image: "/Olga.png",
    title: "Olga",
    technology: [
      {
        icon: faHtml5,
        color: "#E44D26",
      },
      {
        icon: faCss3,
        color: "#1572B6",
      },
      {
        icon: faJs,
        color: "#F7DF1E",
      },
    ],
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/Hyrule-Compendium-js-app",
        live: "https://letscodemanh.github.io/Hyrule-Compendium-js-app/",
        caseStudy: "#",
      },
    ],
  },
  {
    id: "3",
    image: "/Portfolio.png",
    title: "Portfolio",
    technology: [
      {
        icon: faHtml5,
        color: "#E44D26",
      },
      {
        icon: faCss3,
        color: "#1572B6",
      },
      {
        icon: faJs,
        color: "#F7DF1E",
      },
    ],
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/Hyrule-Compendium-js-app",
        live: "https://letscodemanh.github.io/Hyrule-Compendium-js-app/",
        caseStudy: "#",
      },
    ],
  },
];
