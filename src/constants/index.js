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
  figma,
  docker,
  unum,
  carrent,
  jobit,
  tripguide,
  threejs,
  dhruva,
  aws,
  gcp,
  java,
  jest,
  junit,
  kubernetes,
  python,
  springboot,
  mysql,
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
    title: "React Node JS",
    icon: web,
  },
  {
    title: "Java Springboot",
    icon: mobile,
  },
  {
    title: "AWS | GCP",
    icon: backend,
  },
  {
    title: "Docker  Kubernetes",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  // {
  //   name: "gcp",
  //   icon: gcp,
  // },
  {
    name: "java",
    icon: java,
  },
  // {
  //   name: "jest",
  //   icon: jest,
  // },
  // {
  //   name: "junit",
  //   icon: junit,
  // },
  // {
  //   name: "kubernetes",
  //   icon: kubernetes,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },
  {
    name: "springboot",
    icon: springboot,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Unum Group",
    icon: unum,
    iconBg: "#fff",
    date: "Jan 2024 - Oct 2024",
    points: [
      "Implementing Agile Scrum methodology for iterative development using Javascript and Node.js to ensure efficient project delivery, enhancing backend and business logistics scalability",
      "Developing AWS Lambda functions utilizing microservice architecture to interface with internal service endpoints via API Gateway, showcasing scalable, secure architecture and proficiency in cloud computing.",
      "Developed front-end screens with React.js and Redux, and RESTful APIs with Node.js, enhancing communication between systems and achieving a 25% boost in user engagement through improved responsiveness and reduced latency.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Dhruva Software",
    icon: dhruva,
    iconBg: "#36454F",
    date: "June 2021 - July 2022",
    points: [
      "Engineering microservices within the Spring Boot REST architecture using AWS Lambda to enhance backend scalability and availability, incorporating Java-based solutions and security best practices.",
      "Increasing API throughput by 25% by refining endpoint logic, implementing asynchronous processing, and optimizing data flow with a data-driven approach, ensuring enhanced system performance in business applications.",
      "Improved data processing efficiency by 40% using optimized algorithms and parallel processing, resulting in faster data handling and reduced processing time for users.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Dhruva Software",
    icon: dhruva,
    iconBg: "#36454F",
    date: "Jan 2020 - June 2021",
    points: [
      "Contributing to all phases of the Software Development Life Cycle (SDLC), from requirements gathering to production, developing scalable and robust applications using Java and Python.",
      "Optimizing endpoint logic and implemented asynchronous processing to increase API throughput, improving system performance through SOLID design principles and continuous integration with GitLab.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
