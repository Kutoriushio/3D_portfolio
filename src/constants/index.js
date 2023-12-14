import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  postgre,
  react,
  tensorflow,
  melongram,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "academic",
    title: "Academic",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Deep learning for on-demand design of photonic device",
    company_name: "Shanghai Maritime University",
    icon: tensorflow,
    iconBg: "#383E56",
    date: "November 2021 - April 2022",
    points: [
      "Designed photonic device structure and calculated their transmission and spectrums by using FDTD.",
      "Changed the parameters of the structure to establish a data set containing 10000 sets of spectrums by using TensorFlow.",
      "Built a forward neural network to predict the optical efforts of different photonic device structures by using TensorFlow.",
      "Built a backward neural network to achieve on-demand design of photonic devices.",
    ],
  },

  {
    title: "Data Management and Analysis",
    company_name: "Western University",
    icon: postgre,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      "Cleaned up the original data set with over 10000 rows of data.",
      "Collaborated as a team of 4 to create an operational database system based on the relational model by using PostgreSQL.",
      "Engineered a data warehouse solution leveraging Apache Druid, integrating it seamlessly with the operational database system, resulting in a 40% reduction in data retrieval time and enabling real-time analytics capabilities.",
      "Predicted the rating of apps based on the category of apps, the number of installations and other factors by using Data Bricks Machine Learning with 85% accuracy rate.",
    ],
  },

  {
    title: "Full Stack Website",
    company_name: "Western University",
    icon: react,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developed seamless frontend components using React.js to ensure a smooth user experience and managed state with Redux, simplifying development complexity.",
      "Integrated Spring Boot as the backend framework, handling API requests and data processing efficiently.",
      "Developed strong user authentication functionality using Spring Security to ensure secure access to website features and protecting sensitive user data from unauthorized access.",
      "Utilized MySQL to establish a robust database, storing user information, product data, and shopping cart details.",
      "Effectively deployed the server infrastructure on Amazon Web Services (AWS) platform, ensuring robust and scalable performance.",
    ],
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Melongram",
    description:
      "Social media platform empowering users to create and explore posts, connect with others, and customize their feed. Users can share updates, browse content, follow others, and manage their posts with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: melongram,
    github_code_link:
      "https://github.com/Kutoriushio/Full-Stack-Social-Media-App",
    source_code_link: "https://melongram.vercel.app/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
