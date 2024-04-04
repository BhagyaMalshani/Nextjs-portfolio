import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    nameIta: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    nameIta: "Chi sono",
    hash: "#about",
  },
  {
    nameEng: "Services",
    nameIta: "",
    hash: "#Services",
  },
 
  {
    nameEng: "Projects",
    nameIta: "Progetti",
    hash: "#projects",
  },
 
  {
    nameEng: "Skills",
    nameIta: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    nameIta: "Contatti",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Sound Safari",
    description:
      "Sound Safari is a mobile music app developed using TypeScript and React Native.",
    tags: ["React-native","HTML", "Type script" , "css","firebase authentication"],
    imageUrl: "/iphone15.png",
    link: "https://github.com/FHSS-USJ/final-assessment-group-05-sound-safari",
  },
  {
    title: "Chatting app UI",
    description:
      "Using figma and adobe photoshop designed a creative chatting App UI. ",
    tags: ["figma", "photoshop"],
    imageUrl: "/UI.png",
    link: "https://www.behance.net/gallery/194618249/Chatting-App-main-UIS",
  },
  {
    title: "Food Deliver App Home Screen",
    description:
      "Developed a Food deliver App home screen using react native. the language used type script. ",
    tags: ["React-native", "Type Script", "CSS", "HTML"],
    imageUrl: "/pixel.png",
    link: "https://github.com/FHSS-USJ/assignment-02-BhagyaMalshani/commits/main/",
  },
  {
    title: "Next.js Profile",
    description:
      "Crafting personal website on Next.js. Captivating design and dynamic content showcase skills and journey.",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "Framer Motions"],
    imageUrl: "/macbook.png",
    link: "https://github.com/BhagyaMalshani/Nextjs-portfolio",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "Postman",
  "MySQL",
  "React",
  "Next.js",
  "Power BI",
  "Tailwind",
  "Figma",
  "Photoshop",
  "Minitab",
  
];
