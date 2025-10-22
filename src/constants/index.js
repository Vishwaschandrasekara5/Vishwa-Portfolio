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
  python,
  mysql,
  flutter,
  aws,
  git,
  figma,
  docker,
  meta,
  starbucks,
  sic,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  attendance,
  weather,
  bookweb,
  portfolio,
  quizz,
  educom,
  quote,
  bookapp,
  arrow,
  greenlink,
  library,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IOT Developer",
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
    name: "Python",
    icon: python,
  },
   {
    name: "MySql",
    icon: mysql,
  },
   {
    name: "Flutter",
    icon: flutter,
  },
   {
    name: "AWS",
    icon: aws,
  },
   {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Deputy Subcommittee Head of Volunteering Engagement",
    company_name: "IEEE Computer Society - SLTC Research University",
    icon: sic,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Led volunteering initiatives and engagement activities for the IEEE Computer Society branch.",
      "Managed team of volunteers for various events and projects.",
      "Developed strategies to increase member participation.",
      "Collaborated with other IEEE branches for joint initiatives.",
    ],
  },
  {
    title: "Technical Team Head - Ideanix Generation 01",
    company_name: "IEEE Computer Society - SLTC Research University",
    icon: sic,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [
      "Managed technical infrastructure and requirements.",
      "Coordinated with cross-functional teams",
      "Supervised technical setup and troubleshooting",
      "Ensured successful event execution."
    ],
  },
  {
   title: "Program Team Head - Codemania v4.0",
    company_name: "IEEE Computer Society - SLTC Research University",
    icon: sic,
    iconBg: "#E6DEDD",
    date: "Feb 2024",
    points: [
      "Designed and planned event program structure.",
      "Coordinated with participants and judges.",
      "Managed event timeline and activities.",
      "Ensured smooth execution of the competition."
    ],
  },
  {
    title: "Program Team Member - Career Fest 2023",
    company_name: "IEEE Computer Society - SLTC Research University",
    icon: sic,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Assisted in event planning and coordination.",
      "Supported participant engagement activities.",
      "Helped in program execution and management.",
      "Collaborated with team members for event success.",
    ],
  },
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
    name: "Real Time Attendance System",
    description:
      "Real-time attendance system using React and MongoDB for instant tracking, secure storage, and live updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: attendance,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather App",
    description:
      "Weather app using HTML, CSS, and Weather API to display real-time forecasts with clean, responsive design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "weather api",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/",
  },
  {
    name: "Book Store App",
    description:
      "Bookstore app built with React, TypeScript, Node.js, Express, and Tailwind CSS for smooth browsing and transactions.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: bookweb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "A responsive portfolio website to showcase projects and skills with interactive elements and smooth animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quiz System",
    description:
      "Interactive quiz system using HTML, Bootstrap, and JavaScript for responsive design and dynamic question handling.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: quizz,
    source_code_link: "https://github.com/",
  },
  {
    name: "Library Management System",
    description:
      "A modern Django + Bootstrap library management system with reader tracking, book inventory, borrowing & returns, responsive UI, and easy navigation. Built with Django, Bootstrap 5, SQLite/PostgreSQL, and jQuery. Ideal for small to medium libraries to digitize operations efficiently.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/",
  },
  {
    name: "Edu-Com Site",
    description:
      "Fully responsive educational communication site developed using React and Tailwind CSS for seamless learning and collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: educom,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quotes Generator App",
    description:
      "A mobile app that generates random inspirational quotes with a sleek and user-friendly interface.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: quote,
    source_code_link: "https://github.com/",
  },
  {
    name: "Book Store App",
    description:
      "A mobile app for browsing and purchasing books with a seamless shopping experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: bookapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "GreenLink",
    description:
      "IOT and Blockchain-Powered Vegetable Logistic Solution ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "ESP 32",
        color: "pink-text-gradient",
      },
      {
        name: "Polygon Blockchain",
        color: "blue-text-gradient",
      },
    ],
    image: greenlink,
    source_code_link: "https://github.com/",
  },
  {
    name: "Arrow Following Robot",
    description:
      "An IoT project using Raspberry Pi, Python, and OpenCV to create a robot that follows directional arrows.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "raspberry pi",
        color: "pink-text-gradient",
      },
    ],
    image: arrow,
    source_code_link: "https://github.com/",
  }, 
];

export { services, technologies, experiences, testimonials, projects };
