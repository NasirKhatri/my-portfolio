export const profile = {
  name: "Muhammad Nasir",
  shortName: "Nasir",
  role: "Front-End Developer",
  location: "Karachi, Pakistan",
  email: "engrnasir73@gmail.com",
  phone: "+92 334 2824412",
  phoneHref: "+923342824412",
  resume: "/static/MuhammadNasir.pdf",
  github: "https://github.com/NasirKhatri",
  linkedin: "https://www.linkedin.com/in/muhammad-nasir-9565a75b/",
  currentCompany: "VeeOne Health",
};

export const stats = [
  { value: "2019", label: "Writing code since" },
  { value: "10 yrs", label: "In procurement & supply chain" },
  { value: "5", label: "Full-stack projects built" },
  { value: "M.E.M.", label: "Engineering Management, NED" },
];

export const about = [
  "I took the long way into software. After an industrial engineering degree, I spent ten years in procurement at Pak Suzuki Motors, negotiating with suppliers, keeping production lines fed and serving as a power user on the company’s SAP rollout. That work taught me how real businesses run, and how much good software matters to them.",
  "In 2019 I started teaching myself to code. Codecademy came first, then LinkedIn Learning, Pluralsight and a lot of late-night side projects. Today I’m a front-end developer at VeeOne Health, building Angular interfaces for a US-based healthcare product.",
  "I care about interfaces that are clear, fast and easy to maintain, and I bring an engineer’s habit of understanding the problem before writing the code.",
];

export type Job = {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    role: "Front-End Developer",
    company: "VeeOne Health",
    period: "Oct 2023 — Present",
    summary: "US-based product company building innovative healthcare solutions.",
    points: [
      "Design and build reusable Angular components from scratch.",
      "Diagnose and fix bugs to keep the user experience seamless.",
      "Work with cross-functional teams to ship interfaces that meet business goals.",
    ],
    tech: ["Angular", "RxJS", "Angular Material", "Bootstrap", "Azure", "Git"],
  },
  {
    role: "Front-End Developer (Part-time)",
    company: "Tradeway",
    period: "Apr 2022 — Sep 2022",
    summary: "React-based supply chain application covering warehousing, inventory and accounting.",
    points: [
      "Built reusable components using modern React patterns and hooks.",
      "Developed validated forms with Formik and Yup, wired to REST APIs.",
      "Tracked down and fixed bugs across the application.",
    ],
    tech: ["React", "Material UI", "Formik", "Yup", "React Query", "React Router"],
  },
  {
    role: "Deputy Manager, Procurement",
    company: "Pak Suzuki Motors",
    period: "Mar 2013 — Sep 2023",
    summary: "Pakistan’s leading automobile manufacturer.",
    points: [
      "Sourced direct materials from 20+ local suppliers to meet daily production needs.",
      "Led cost assessments, RFQs and negotiations for product localization.",
      "SAP (MM) power user: requirements gathering, fit-gap analysis, SIT/UAT, data migration and end-user training.",
    ],
    tech: ["SAP MM", "Negotiation", "Supply Chain", "Data Migration"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Zakwan Health Care",
    tagline: "Equipment issuance & tracking for an NGO",
    description:
      "Zakwan lends wheelchairs, patient beds and other medical equipment to patients against a security deposit. This app replaced their manual records with one place to track what’s issued, what’s due and what’s in stock.",
    highlights: [
      "Issuance and return tracking with due dates",
      "System-generated receipts and CSV exports",
      "Reports and dashboard across all master data",
      "JWT auth with bcrypt-hashed passwords",
    ],
    tech: ["Next.js", "MongoDB", "Mongoose", "Material UI", "JWT"],
    links: [{ label: "Live site", href: "https://ngo-welfare.vercel.app/" }],
    featured: true,
  },
  {
    title: "In-Store Ordering",
    tagline: "Restaurant POS, dine-in ordering & kitchen display",
    description:
      "A mobile app that helps small restaurants record sales and move orders from waiters and counters to the kitchen, without a big upfront investment.",
    highlights: [
      "POS, dine-in ordering and kitchen display system",
      "Express REST API secured with JWT middleware",
      "Image uploads with Multer, forms validated with Formik and Yup",
    ],
    tech: ["React Native", "Expo", "Node.js", "Express", "MySQL", "React Query"],
    links: [
      { label: "Frontend", href: "https://github.com/NasirKhatri/InStoreOrderFrontEnd" },
      { label: "Backend", href: "https://github.com/NasirKhatri/InStoreBackend" },
    ],
  },
  {
    title: "My Blogs",
    tagline: "MERN blogging platform",
    description:
      "An admin publishes posts and registered readers comment and upvote. Firebase handles sign-up and login, and MongoDB tracks engagement per post.",
    highlights: ["Firebase authentication", "Comments and upvotes per post"],
    tech: ["React", "React Router", "Node.js", "Express", "MongoDB", "Firebase"],
    links: [],
  },
  {
    title: "Mini Point of Sale",
    tagline: "Sales dashboard & POS for the web",
    description:
      "A responsive POS with a dashboard that shows daily sales and 12-month trends at a glance, plus forms for items, categories and customers.",
    highlights: ["Daily and 12-month sales trends", "Express REST API on SQLite"],
    tech: ["React", "Bootstrap", "Node.js", "Express", "SQLite"],
    links: [],
  },
  {
    title: "This Portfolio",
    tagline: "The page you’re looking at",
    description:
      "A single-page portfolio built with the Next.js App Router. It’s server-rendered, has no UI framework, supports light and dark themes, and respects reduced-motion preferences.",
    highlights: ["Server-rendered", "Accessible and responsive"],
    tech: ["Next.js", "TypeScript", "CSS"],
    links: [{ label: "Source", href: "https://github.com/NasirKhatri/my-portfolio" }],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["Angular", "React", "Next.js", "React Native", "TypeScript", "JavaScript", "RxJS", "HTML & CSS"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "MySQL", "SQLite", "REST APIs", "JWT Auth"],
  },
  {
    group: "Libraries & Tools",
    items: ["Material UI", "Angular Material", "Bootstrap", "React Query", "Formik & Yup", "Git & GitHub", "Azure", "Firebase"],
  },
];

export const education = [
  { title: "Master of Engineering Management", place: "NED University", detail: "Supply Chain", period: "2019 — 2021" },
  { title: "Bachelor of Engineering", place: "NED University", detail: "Industrial Engineering", period: "2008 — 2012" },
];

export const courses = [
  { title: "Full Stack Development", place: "Codecademy", period: "2018" },
  { title: "Web Development", place: "National Freelancer Training Program", period: "2022" },
  { title: "Continuous learning", place: "LinkedIn Learning · Pluralsight · YouTube", period: "Ongoing" },
];
