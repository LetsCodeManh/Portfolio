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

export const projectsFullStack: projects[] = [
  {
    id: "1",
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
    id: "2",
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
  {
    id: "3",
    image: "/Chucknorris.png",
    title: "Chucknorris Quotes",
    technology: "NextJS 13 | Tailwind | Prisma",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/random-quotes",
        live: "https://random-quotes-rose.vercel.app/",
        labelIcon: "Visit Chucknorris Quotes Repository",
        labelLive: "Visit Chucknorris Quotes Live Website",
        caseStudy: "",
      },
    ],
  },
  {
    id: "4",
    image: "/ChatApp.png",
    title: "ChatApp (mobile)",
    technology: "React Native | Expo | Firebase",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/ChatApp",
        live: "https://snack.expo.dev/@letscodemanh/a27d8d",
        labelIcon: "Visit ChatApp Repository",
        labelLive: "Visit ChatApp Expo Snack",
        caseStudy: "",
      },
    ],
  },
  {
    id: "5",
    image: "/MeetApp.png",
    title: "MeetApp (mobile)",
    technology: "React Native | Expo | Firebase",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/MeetApp",
        live: "https://letscodemanh.github.io/MeetApp/",
        labelIcon: "Visit MeetApp Repository",
        labelLive: "Visit MeetApp Live Website",
        caseStudy: "",
      },
    ],
  },
];
