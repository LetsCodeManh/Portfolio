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

export const projectsBackend: projects[] = [
  {
    id: "1",
    image: "/myFlix-Server.png",
    title: "myFlix Server",
    technology: "MongoDB | Express | Heroku",
    interact: [
      {
        icon: FaGithub,
        link: "https://github.com/LetsCodeManh/myFlix-server",
        live: "https://young-journey-11100.herokuapp.com/",
        labelIcon: "Visit myFlix server Repository",
        labelLive: "Visit myFlex server Live Website",
        caseStudy: "",
      },
    ],
  },
];
