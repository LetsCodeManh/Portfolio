import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const tailwindIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="h-6 w-6"
  >
    <path
      fill="#38B2AC"
      d="M0 256C0 114.62 114.62 0 256 0s256 114.62 256 256-114.62 256-256 256S0 397.38 0 256z"
    />
    <path
      fill="#F7FAFC"
      d="M384.62 256l-10.12 84.5L256 384.62v-81.24L304 256l-48-46.38v-81.24l118.5 41.12L384.62 256z"
    />
    <path
      fill="#A0AEC0"
      d="M384.62 256l-10.12 84.5h-81.24L304 256zm-80.24 49.38l-41.12 35.75v-71.5zm0-89.25l41.12 35.75v-71.5z"
    />
  </svg>
);

type projects = {
  id: string;
  image: string;
  title: string;
  technology: string;
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
    image: "/Portfolio.png",
    title: "Portfolio V1",
    technology: "React | CSS | Vite",
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/ManhPortfolio",
        live: "https://letscodemanh.github.io/ManhPortfolio/",
        caseStudy: "#",
      },
    ],
  },
  {
    id: "2",
    image: "/Manh-Nguyen.png",
    title: "Portfolio V2",
    technology: "NextJS 13 | Tailwind | Framer Motion | TypeScript",
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/manh-nguyen",
        live: "https://manhngdev.com/",
        caseStudy: "#",
      },
    ],
  },
  {
    id: "3",
    image: "/Zelda.png",
    title: "Zelda Hyrule Compendium",
    technology: "HTML | CSS | JavaScript",
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
    id: "4",
    image: "/Olga.png",
    title: "Consulting Website",
    technology: "React | Tailwind | I18next",
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/OlgaWebsite",
        live: "https://letscodemanh.github.io/OlgaWebsite/",
        caseStudy: "#",
      },
    ],
  },
  {
    id: "5",
    image: "/myFlix-Angular.png",
    title: "myFlix with Angular",
    technology: "Angular | Material | SCSS | TypeScript",
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/myFlix-Angular-Client",
        live: "https://letscodemanh.a.io/myFlix-Angular-Client/welcome",
        caseStudy: "#",
      },
    ],
  },
  {
    id: "6",
    image: "/myFlix-React.png",
    title: "myFlix with React",
    technology: "React | Bootstrap | Redux",
    interact: [
      {
        icon: faGithub,
        link: "https://github.com/LetsCodeManh/myFlix-client",
        live: "https://myflix-test-website.netlify.app/login",
        caseStudy: "#",
      },
    ],
  },
];
