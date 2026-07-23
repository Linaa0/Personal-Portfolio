export const personalInfo = {
  name: "ISHIMWE Lina Assoumani",
  shortName: "Lina Assoumani",
  title: "Software Engineer | Full-Stack Developer | Builder",
  tagline:
    "Building real products for real impact — from Rwanda to the world.",
  location: "Kabuga, Rwanda",
  email: "ishimwelina06@gmail.com",
  phone: "+250 787 481 615",
  github: "https://github.com/Linaa0",
  githubUsername: "Linaa0",
};

export const about = {
  summary: `A software engineering student at Rwanda Coding Academy with a strong foundation in full-stack development, UI/UX design, and embedded systems/robotics. I build complete, production-style applications end-to-end — from database to interface — and I care about designing solutions that are genuinely useful in the Rwandan and East African context. I'm equally comfortable writing backend logic, designing interfaces in Figma, and prototyping in 3D with Blender. Currently expanding into modern full-stack frameworks like Next.js, NestJS, and TypeScript.`,
  education: [
    {
      institution: "Rwanda Coding Academy",
      role: "Software Engineering Student",
      period: "Expected graduation: 2027–2028",
      details:
        "Relevant coursework: Database Systems (MongoDB, SQL), Web Development (Frontend & Backend), Software Engineering Principles, Computer Networks",
    },
  ],
};

export const skillGroups = [
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
      "Mobile app to reduce distraction in young adults by managing screen time and encouraging focused work sessions. Includes AI-powered usage analysis for personalized productivity recommendations.",
    tech: ["React Native", "Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/Linaa0/AttenTra",
    featured: true,
  },
  {
    id: "rca-archive",
    title: "RCA Archive+",
    hook: "Institutional knowledge, digitized and secure.",
    description:
      "A full digital archive system for storing, organizing, and retrieving institutional records, with secure authentication and a clean document-management interface.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Linaa0/RCA_ARCHIVE",
    featured: true,
  },
  {
    id: "safezone",
    title: "SafeZone",
    hook: "Safety and emergency response, when seconds matter.",
    description:
      "Safety application for reporting incidents and reaching emergency support quickly, with real-time notifications and IoT-based alerting via Arduino hardware integration.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Socket.io", "Arduino"],
    featured: true,
  },
  {
    id: "flowbot",
    title: "Flowbot",
    hook: "Intelligent automation that never sleeps.",
    description:
      "Chatbot system automating responses with AI/NLP integration for context-aware, 24/7 user interaction handling.",
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
      "Embedded systems, Arduino programming, hardware-software integration",
  },
  {
    title: "Writing Club Member",
    organization: "Rwanda Coding Academy",
    description: "Technical and creative writing",
  },
  {
    title: "Academic Olympiads",
    organization: "National Programs",
    description:
      "Mathematics Olympiad Camp 2023; Physics Olympiad Camp 2025/2026 (attended twice)",
  },
  {
    title: "Head Girl, Grade 5–6",
    organization: "School Leadership",
    description: "Early leadership and organizational experience",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Kinyarwanda", level: "Native" },
  { name: "French", level: "Intermediate" },
  { name: "Kiswahili", level: "Conversational" },
];

export const interests =
  "Building innovative solutions to unsolved problems, exploring emerging technologies, robotics and IoT, AI/ML applications, and contributing to open-source projects.";

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
