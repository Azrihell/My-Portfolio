import {
  mobile,
  backend,
  caticon,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  wordpress,
  ZTM,
  linkedin,
  openai,
  tshirt,
  threejs,
  wordpressCert,
  pythonCert,
  pmfCert,
  ztmCert
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Rock Climber + Cat Lover",
    icon: caticon,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
];

const certificates = [
  {
    title: "Zero to Mastery",
    company_name: "Udemy",
    icon: ZTM,
    iconBg: "#383E56",
    date: "July 2023",
    image: ztmCert
  },
  {
    title: "WordPress Essential Training",
    company_name: "Linkedin Learning",
    icon: wordpress,
    iconBg: "#E6DEDD",
    date: "August 2023",
    image: wordpressCert
  },
  {
    title: "Python Essential Learning",
    company_name: "LinkedIn Learning",
    icon: python,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    image: pythonCert
  },
  {
    title: "Project Management Foundations",
    company_name: "LinkedIn Learning, Project Management Institute",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    image: pmfCert
  },
];

const testimonials = [
  {
    testimonial:
      "Az is a beacon of leadership. Their warmth, vision, and dedication uplift us daily. We're truly blessed to have such an exceptional team lead.",
    name: "Ariel Coday",
    designation: "Supervisor",
    company: "Movement (Formerly Summit)",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "In my time collaborating with Azriel, I have witnessed her transform obstacles into opportunities and turn ambitious ideas into reality. Her problem-solving prowess and natural leadership make her an invaluable asset to any endeavor!",
    name: "Maelyn Schramm",
    designation: "Gym Director",
    company: "Movement, Design District",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Even at the outset of her journey, Az exhibits a coding acumen beyond her years. A promising talent, destined to make significant strides in tech.",
    name: "James Maxfield",
    designation: "Senior Full Stack Engineer",
    company: "Nexrage Studios",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ai Image Generator",
    description:
      "An ai image generator app, that allows users to use ai to bring their ideas to life, and share them with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/Azrihell/AI-Image-Generator-Client",
  },
  {
    name: "Quick, Design!",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "3DModeling",
        color: "green-text-gradient",
      },
      {
        name: "Ai",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/Azrihell/Ai-TShirt-App-Client",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ztmCert,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, certificates, testimonials, projects }