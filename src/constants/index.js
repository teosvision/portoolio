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
  rozafa,
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
    title: "Web Development ",
    icon: mobile,
  },
  {
    title: "Mobile Development",
    icon: creator,
  },
  {
    title: "Content Creator",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    title: "Software Engineer",
    company_name: "Rozafa Consulting",
    icon: rozafa,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Led the development of Linus, a cloud-based CRM built with Next.js, focusing on managing client relationships and implementing key features. This resulted in a client sales increase and successful platform scaling.",
      "Implemented features like complex data tables, user roles, charts, and printing functionalities with React-PDF, ExcelJS, and QuickChart. Improved performance by utilizing memoization, lazy loading, NextJS server components and web workers to handle large document printing.",
      "Maintained the Node.js backend, implementing major updates to improve scalability, support new features, and optimize system performance for growing user demands.",
      "Developed AWS Lambda functions to integrate data from external systems.",
      "Contributed to the architecture and development of a React Native gym app, implementing features such as saving weekly workout plans, progress tracking, saving data in Firebase database, Google authentication for android, and integrating TypeScript to enhance code clarity and ensure long-term maintainability.",
      "Developed a 3D game with physics-driven interactions using React Three Fiber and React Three Cannon, featuring real-time multiplayer functionality powered by Socket.io.1",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Parid Smart Solution",
    icon: parid,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2023",
    points: [
      "Worked on building a financial web application using React.js",
      "Developed several features using Material UI including customizable tables, different types of inputs and calendars.",
      "Created various RESTful APIs and managed data flow between the backend and frontend, ensuring seamless integration and data consistency.",
      "Collaborated with the team to integrate government-issued online certificates into the POS payment system.",
    ],
  },
  {
    title: "YouTuber",
    company_name: "Teos Vision",
    icon: mateo,
    iconBg: "#383E56",
    date: "Aug 2019 ",
    points: ["I created my YouTube channel based on tech-review, which today count 31K subscribers."],
  },
  {
    title: "Videographer",
    company_name: "Freelance",
    icon: videography,
    iconBg: "#E6DEDD",
    date: "Feb 2020 ",
    points: ["I have worked on various projects such as commercial videos for businesses, products, etc."],
  },
];

const projects = [
  {
    name: "Parid Smart Solution",
    description: "This website is still developing!",
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
    description: "E-commerce website where you can buy different products. You can search them by category of its company ,colors, shipping and price.",
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
    web_link: "https://teonline-shop.netlify.app/",
  },
  {
    name: "Parid Consulting",
    description: " A website that present financial consulting services. ",

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
    web_link: "https://www.paridconsulting.al/",
  },
  {
    name: "Portofolio",
    description: "This website is for creating an online portfolio.",
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
    web_link: "https://mateoportofolio.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
