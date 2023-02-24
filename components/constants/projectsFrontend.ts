import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

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

export const projectsFrontend: projects[] = [
  {
    id: "1",
    image: "/Portfolio.png",
    title: "Portfolio V1",
    technology: "React | CSS | Vite",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/ManhPortfolio",
        live: "https://letscodemanh.github.io/ManhPortfolio/",
        labelIcon: "Visit my past Portfolio Repository",
        labelLive: "Visit my past Portfolio Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "2",
    image: "/Manh-Nguyen.png",
    title: "Portfolio V2",
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
    id: "4",
    image: "/Olga.png",
    title: "Consulting Website",
    technology: "React | Tailwind | I18next",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/OlgaWebsite",
        live: "https://letscodemanh.github.io/OlgaWebsite/",
        labelIcon: "Visit my Consulting Repository",
        labelLive: "Visit Consulting Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "5",
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
    id: "6",
    image: "/Cocktail.png",
    title: "Cocktail Website",
    technology: "HMTL | CSS",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/Cocktail-Website",
        live: "https://letscodemanh.github.io/Cocktail-Website/",
        labelIcon: "Visit my Cocktail Website Repository",
        labelLive: "Visit my Cocktail Live Website",
        caseStudy: "",
      },
    ],
  },
];
