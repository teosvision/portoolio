import {
  mobile,
  backend,
  creator,

  javascript,
  html,
  css,
  reactjs,
  redux,
  zustand,
  tailwind,
  git,
  figma,
  mateo,
  parid,
  videography,
  topshop,
  paridi,
  question,
  threejs,
  portofolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "YouTuber",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
];

const experiences = [
  {
    title: "YouTuber",
    company_name: "Teos Vision",
    icon: mateo,
    iconBg: "#383E56",
    date: "Aug 2019 ",
    points: [
      "I created my YouTube channel based on tech-review, which today count 31K subscribers.",
    ],
  },
  {
    title: "Videographer",
    company_name: "Freelance",
    icon: videography,
    iconBg: "#E6DEDD",
    date: "Feb 2020 ",
    points: [
      "I have worked on various projects such as commercial videos for businesses, products, etc.",
    ],
  },

  {
    title: "React JS Developer",
    company_name: "Parid Smart Solution",
    icon: parid,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Created reusable UI components using libraries such as Material UI and Ant Design etc.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked with state management libraries like Redux and Zustand to manage complex application state.",
    ],
  },
];


const projects = [
    {
    name: "Parid Smart Solution",
    description:
      "This website is still developing!",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
         {
        name: "python",
        color: "pink-text-gradient",
      },
    
    ],
    image: question,
    source_code_link: "https://github.com/",
  },
  {
    name: "Top-Shop",
    description:
      "E-commerce website where you can buy different products. You can search them by category of its company ,colors, shipping and price.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: topshop,
    source_code_link: "https://github.com/teosvision/Online-Shop",
    web_link:'https://teonline-shop.netlify.app/',
  },
  {
    name: "Parid Consulting",
    description:
      " A website that present financial consulting services. " ,
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
   
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: paridi,
    source_code_link: "https://github.com/",
     web_link:'https://www.paridconsulting.al/',
  },
    {
    name: "Portofolio",
    description:
      "This website is for creating an online portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    
    ],
    image: portofolio,
    source_code_link: "https://github.com/teosvision/portoolio",
      web_link:'https://mateoportofolio.netlify.app/',

  },

];

export { services, technologies, experiences, projects };
