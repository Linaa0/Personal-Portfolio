export const personalInfo = {
  name: "ISHIMWE Lina Assoumani",
  shortName: "Lina Assoumani",
  title: "Software Engineer | Full-Stack Developer | Builder",
  tagline:
    "I take ideas from sketch to shipped product. Full-stack, fast learner, ready to build wherever the work is worth doing.",
  location: "Kabuga, Rwanda · Open to remote & global teams",
  email: "ishimwelina06@gmail.com",
  phone: "+250 787 481 615",
  github: "https://github.com/Linaa0",
  githubUsername: "Linaa0",
};

export const highlights = [
  { value: "4+", label: "Projects shipped" },
  { value: "Full-stack", label: "Database to deployment" },
  { value: "Remote-ready", label: "Fluent in English" },
  { value: "Fast learner", label: "AI & Python in progress" },
];

export const about = {
  summary: `I'm a software engineering student at Rwanda Coding Academy who builds like I'm already on the job. I've shipped mobile apps, web platforms, IoT safety systems, and AI-powered chatbots. I own the full stack: database design, API logic, frontend interfaces, and hardware integration when the project needs it. I design in Figma, code in TypeScript and JavaScript, and I'm leveling up with Next.js and NestJS. I'm also studying AI and machine learning with Python. No standalone AI project yet, but I'm building the foundation and already applying what I learn in live apps. I work well independently, communicate clearly, and I'm looking for a team where I can grow while delivering real value from day one.`,
  education: [
    {
      institution: "Rwanda Coding Academy",
      role: "Software Engineering Student",
      period: "Expected graduation: 2027 to 2028",
      details:
        "Coursework in database systems (MongoDB, SQL), full-stack web development, software engineering principles, and computer networks.",
    },
  ],
};

export interface SkillGroup {
  category: string;
  skills: string[];
  highlight?: string[];
  learning?: boolean;
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C"],
    highlight: ["TypeScript", "Python"],
  },
  {
    category: "Frameworks & Runtime",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "React Native",
    ],
    highlight: ["Next.js", "NestJS"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL/PostgreSQL"],
  },
  {
    category: "Other Technologies",
    skills: ["Arduino", "Socket.io", "Git & GitHub"],
  },
  {
    category: "Design & 3D",
    skills: ["Figma (UI/UX design)", "Blender (3D modeling & rendering)"],
  },
  {
    category: "Areas of Focus",
    skills: [
      "Full-Stack Web Development",
      "Embedded Systems & Robotics",
      "AI/NLP Integration",
      "IoT",
    ],
  },
  {
    category: "Currently Learning",
    skills: ["Python", "AI & Machine Learning"],
    highlight: ["Python", "AI & Machine Learning"],
    learning: true,
    note: "Studying AI with Python now. No standalone project yet, but actively building the foundation for what's next.",
  },
];

export interface Project {
  id: string;
  title: string;
  hook: string;
  description: string;
  tech: string[];
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "attentra",
    title: "Attentra",
    hook: "Helping young minds focus in a distracted world.",
    description:
      "A mobile app that tracks screen time and runs focused work sessions. Uses AI to analyze usage patterns and recommend productivity habits that stick. Built end to end: React Native frontend, Express/Node backend, MongoDB data layer.",
    tech: ["React Native", "Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/Linaa0/AttenTra",
    featured: true,
  },
  {
    id: "rca-archive",
    title: "RCA Archive+",
    hook: "Institutional knowledge, digitized and secure.",
    description:
      "A production-grade digital archive for storing, organizing, and retrieving institutional records. Secure authentication, clean document management, and a MERN stack built to handle real data at scale.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Linaa0/RCA_ARCHIVE",
    featured: true,
  },
  {
    id: "safezone",
    title: "SafeZone",
    hook: "Safety and emergency response, when seconds matter.",
    description:
      "A safety platform for reporting incidents and reaching help fast. Real-time notifications via Socket.io, plus IoT alerts through Arduino hardware. Software and hardware working together under one system.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Socket.io", "Arduino"],
    featured: true,
  },
  {
    id: "flowbot",
    title: "Flowbot",
    hook: "Intelligent automation that never sleeps.",
    description:
      "A chatbot that handles user conversations around the clock. AI/NLP integration keeps responses context-aware instead of feeling like canned replies. Built for teams that need 24/7 interaction without 24/7 staff.",
    tech: ["Node.js", "Express.js", "MongoDB", "React"],
    github: "https://github.com/Linaa0/FlowBot",
    featured: true,
  },
];

export const experiences = [
  {
    title: "Robotics Club Member",
    organization: "Rwanda Coding Academy",
    description:
      "Arduino, embedded systems, and hardware-software integration. This is where I learned to make code do something in the physical world.",
  },
  {
    title: "Writing Club Member",
    organization: "Rwanda Coding Academy",
    description:
      "Technical and creative writing. I know how to explain complex work to teammates, stakeholders, and users.",
  },
  {
    title: "Academic Olympiads",
    organization: "National Programs",
    description:
      "Mathematics Olympiad Camp (2023) and Physics Olympiad Camp (2025/2026, attended twice). Trained to solve hard problems under pressure.",
  },
  {
    title: "Head Girl, Grades 5 and 6",
    organization: "School Leadership",
    description:
      "Led classmates and organized events. Leadership taught me early that great software starts with listening to the people it serves.",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Kinyarwanda", level: "Native" },
  { name: "French", level: "Intermediate" },
  { name: "Kiswahili", level: "Conversational" },
];

export const interests =
  "Hard problems, emerging tech, and software that holds up in production. Robotics, IoT, open source, and AI with Python keep me learning. I'm looking for teams building something worth the effort, anywhere in the world.";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const allProjectTech = [
  ...new Set(projects.flatMap((p) => p.tech)),
].sort();
