import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

export const introduction = [
  {
    title: "Introduction",
    descriptions: [
      "Welcome to my Portfolio Case Study! This project showcases my skills and experience in web development and design. As a young entrepreneur, designer, and developer, I'm always looking for new challenges and opportunities to learn and grow.",
      "This portfolio serves as a collection of my previous projects, skills, and experience to inspire and encourage potential clients to hire me. I specialize in both front-end and back-end development, and my skills include HTML/CSS, JavaScript, React, NextJs, TailwindCSS, and more.",
      "Don't hesitate to reach out to me if you're interested in working together or want to learn more about my experience and skills.",
    ],
  },
];

type contact = {
  link: string;
  icon: IconType;
  label: string;
};

export const introductionLinks: contact[] = [
  {
    link: "https://github.com/LetsCodeManh",
    icon: FaGithub,
    label: "Check out my GitHub Page",
  },
  {
    link: "https://linkedin.com/in/manhngdev",
    icon: FaLinkedinIn,
    label: "Contact me on LinkedIn",
  },
  {
    link: "mailto:manhng.dev@gmail.com",
    icon: FaEnvelope,
    label: "Write me an email",
  },
  {
    link: "tel:0176-21437917",
    icon: FaPhone,
    label: "Call me",
  },
];

export const goals = [
  {
    title: "Goals",
    descriptions: [
      "The main goal of this project is to create a unique and visually appealing portfolio website that showcases my skills and experience. I aim to learn and incorporate new technologies like Next.js, TailwindCSS, and Framer Motion to improve the user experience and create a more dynamic and interactive website.",
      "Ultimately, I want visitors to my site to be impressed by the design and functionality and feel inspired to work with me. By creating a standout portfolio, I hope to attract new clients and continue to grow as a developer and designer.",
    ],
  },
];

export const roleTimeline = [
  {
    title: "Role & Timeline",
    descriptions: [
      "For this project, I took on the role of both designer and developer. I will be responsible for all aspects of the project, including design, front-end development, and back-end development.",
      "The project is expected to be completed within 1-2 weeks, starting on February 15th. After one week, most of the core features of the portfolio website will be completed, including the main landing page, about me section, project showcase, and contact form.",
      "The second week will be focused on modifying and improving the site, debugging and testing, and refining the user experience.",
    ],
  },
];

export const challenges = [
  {
    title: "Challenges",
    descriptions: [
      "The problem I'm aiming to solve with this project is creating a portfolio that stands out from the rest, while showcasing my skills in a modern and minimalist way. With so many portfolios out there, it can be challenging to create something that is unique and attention-grabbing.",
      "To solve this problem, I'll be incorporating technologies like Next.js and Framer Motion to add dynamic features and animations that will help my portfolio stand out.",
      "Another challenge I'm facing is that I haven't worked with these technologies before, but I see this as an opportunity to expand my skills and show that I'm capable of adapting to new things. By pushing myself to learn and use new technologies, I hope to create a portfolio that not only meets the needs of potential clients but also reflects my personal growth and development as a designer and developer.",
    ],
  },
];

export const approach = [
  {
    title: "Approach",
    descriptions: [
      "To tackle this challenge, I plan to incorporate new technologies, such as Next.js, TailwindCSS, and Framer Motion, and learn them by writing code and reading their documentation. ",
      "Additionally, I will look for design inspiration from other portfolios and websites to create a unique and modern look and feel for my portfolio.",
      "Since the success of the portfolio depends on the visitors' impression, I will gather feedback from friends, colleagues, and potential clients and use their feedback to make necessary changes and improvements to the website. This iterative process will help me to fine-tune the portfolio and create a user-friendly experience for visitors.",
      "By incorporating new technologies and gathering feedback, I hope to create a standout portfolio that showcases my skills and attracts potential clients.",
    ],
  },
];

export const processMilestone = [
  {
    title: "Process",
    description:
      "Setting up dependencies: Install Next.js, TailwindCSS, Framer Motion, Next-themes, and React-icons.",
  },
  {
    title: "Design and planning",
    description:
      "Gather design inspiration and decide on the layout and structure of the portfolio.",
  },
  {
    title: "Create sections",
    description:
      "Start creating each section of the portfolio, beginning with a mockup without any styling, focusing on the desktop layout. The portfolio will include a hero section/landing page, an about me section, a project showcase section, contact section, navbar, and footer.",
  },
  {
    title: "Reusability and optimization",
    description:
      "Look for common classes to reduce the line of code and time spent on development, find components to reuse, test every function, and test for responsive design.",
  },
  {
    title: "Deployment",
    description:
      "Deploy the portfolio to Vercel with a custom domain name, set up the domain name in GoDaddy, and ensure everything is working as expected.",
  },
  {
    title: "Gather feedback",
    description:
      "Gather feedback from friends, colleagues, and potential clients on the portfolio and apply changes if necessary.",
  },
];

export const unexpectedChallenges = [
  {
    title: "Unexpected Challenges",
    descriptions: [
      "Throughout the development process, a few unexpected challenges arose that required some creative problem-solving.",
      "One such hurdle involved the implementation of icons on the site. Initially, I attempted to use the Fontawesome library, but quickly discovered it lacked the necessary icons for my needs. ",
      "Thankfully, I was able to switch to the react-icons library, which provided a much more robust selection of icons to choose from.",
      "Another challenge that presented itself was the need to create additional pages for the website. Originally, I had planned to create a single-page application. However, as the design and content evolved, it became clear that additional pages were necessary.",
      "This included pages for showcasing my projects and providing visitors with more information about myself. While this required more time than initially anticipated, I ultimately believe it was the right decision for the overall user experience.",
      "Lastly, as with any project, there were moments of ambition that led to some missteps. While attempting to build a particularly ambitious feature, I encountered a few roadblocks that required some patience and perseverance.",
      "However, I refused to let these setbacks defeat me and was able to ultimately create a working feature that I'm quite proud of.",
      "In the end, these challenges served as valuable learning experiences that tested my skills and problem-solving abilities.",
    ],
  },
];

export const result = [
  {
    title: "Result",
    descriptions: [
      "After overcoming unexpected challenges and roadblocks, I'm thrilled with the final product - a modern, responsive, and visually stunning portfolio that showcases my skills and experience.",
      "Despite these challenges, the use of Next.js, TailwindCSS, and Framer Motion allowed for efficient and fast development, and added dynamic animations to the website.",
      "I also took feedback from others into consideration, which helped me improve the design and functionality of the portfolio.",
      "Overall, this project taught me to be adaptable, resourceful, and to persevere when faced with unexpected challenges. I'm excited to apply these skills to future projects.",
    ],
  },
];

export const lessonsLearned = [
  {
    title: "Lessons Learned",
    descriptions: [
      "Through the development of this portfolio, I gained valuable technical skills in front-end web development using Next.js, TailwindCSS, and Framer Motion.",
      "I also learned the importance of planning and setting realistic goals at the beginning of the project. Unexpected challenges, such as limited icon availability and the need for additional pages, taught me to be adaptable and flexible in my approach.", "In the end of the day, this project provided a great learning experience for both technical skills and project management. It has prepared me for future projects by teaching me the importance of planning, adaptability, and continuous improvement."
    ],
  },
];

export const nextSteps = [
  {
    title: "Next Steps",
    descriptions: [
      "While the current version of my portfolio is complete, there are always ways to improve it.  ",
      "Some potential next steps include adding more content, such as a blog or additional projects, and optimizing the website for search engines.",
      "Additionally, I may consider implementing additional features, such as a animate cursor or language switcher, to further improve the user experience.",
    ],
  },
];

export const thankyouLinks: contact[] = [
  {
    link: "https://linkedin.com/in/manhngdev",
    icon: FaLinkedinIn,
    label: "Contact me on LinkedIn",
  },
  {
    link: "mailto:manhng.dev@gmail.com",
    icon: FaEnvelope,
    label: "Write me an email",
  },
  {
    link: "tel:0176-21437917",
    icon: FaPhone,
    label: "Call me",
  },
];