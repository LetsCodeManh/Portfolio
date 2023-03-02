import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type projects = {
  id: string;
  image: string;
  title: string;
  technology: string;
  interact: [
    {
      icon: IconType;
      link: string;
      live: string;
      labelIcon: string;
      labelLive: string;
      caseStudy: string;
    }
  ];
};

export const projectSectionLink = [
  {
    name: "Frontend",
    href: "#frontend",
  },
  {
    name: "Backend",
    href: "#backend",
  },
  {
    name: "Full-Stack",
    href: "#fullstack",
  },
];

export const projectSectionInfo: projects[] = [
  {
    id: "1",
    image: "/Zelda.png",
    title: "Zelda Hyrule Compendium",
    technology: "HTML | CSS | JavaScript",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/Hyrule-Compendium-js-app",
        live: "https://letscodemanh.github.io/Hyrule-Compendium-js-app/",
        labelIcon: "Visit my Zelda Repository",
        labelLive: "Visit Zelda Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "2",
    image: "/Manh-Nguyen.png",
    title: "Portfolio",
    technology: "NextJS 13 | Tailwind | Framer Motion",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/manh-nguyen",
        live: "https://manhngdev.com/",
        labelIcon: "Visit my latest Portfolio Repository",
        labelLive: "Visit my latest Portfolio Live Website",
        caseStudy: "/casestudy",
      },
    ],
  },
  {
    id: "3",
    image: "/Solar.png",
    title: "Solar Website",
    technology: "React | TypeScript",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/energyspektrum",
        live: "https://letscodemanh.github.io/energyspektrum/",
        labelIcon: "Visit Solar Repository",
        labelLive: "Visit Solar Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "4",
    image: "/Olga.png",
    title: "Consulting Website",
    technology: "React | Tailwind | I18next",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/OlgaWebsite",
        live: "https://olga-agovic.de/",
        labelIcon: "Visit my Consulting Repository",
        labelLive: "Visit Consulting Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "5",
    image: "/myFlix-Angular.png",
    title: "myFlix Angular",
    technology: "Angular | Material | TypeScript",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/myFlix-Angular-Client",
        live: "https://letscodemanh.github.io/myFlix-Angular-Client/",
        labelIcon: "Visit my myFlix Repository",
        labelLive: "Visit myFlix Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "6",
    image: "/myFlix-React.png",
    title: "myFlix React",
    technology: "React | Bootstrap | Redux",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/myFlix-client",
        live: "https://myflix-test-website.netlify.app/login",
        labelIcon: "Visit my myFlix Repository",
        labelLive: "Visit myFlix Live Website",
        caseStudy: "",
      },
    ],
  },
];
