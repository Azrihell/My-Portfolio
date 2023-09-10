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
  ztmCert,
  seoCert,
  sumz
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
    title: "SEO Foundations",
    company_name: "LinkedIn Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    image: seoCert
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
    name: "AI Image Generator",
    description:
      "An image generator app, that allows users to use AI to bring their ideas to life, and share them with the community.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/Azrihell/AI-Image-Generator-Client",
    live_view_link: "https://ai-image-generator-client-phi.vercel.app/"
  },
  {
    name: "Quick, Design!",
    description:
      "A simple t-shirt designing web app, powered by AI. Enables users to bring their ideas to life, then download them for use!",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "3DModeling",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/Azrihell/Ai-TShirt-App-Client",
    live_view_link: "https://quickdesign.vercel.app"
  },
  {
    name: "AI Article Summerizer",
    description:
      "An open-source article summerizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "comingsoon",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/Azrihell/ai_summerizer_app",
    live_view_link: "https://face-recognition-app-one.vercel.app/"
  },
];

export { services, technologies, certificates, testimonials, projects }