/**
 * The six featured projects. This list is the complete showcase.
 *
 * Content comes from each project's repository, README, design files or
 * proposal. `status` says plainly where each one stands; summaries never
 * describe planned work as finished.
 */

export type ProjectVisualKey =
  | "schoolarchive"
  | "instantly"
  | "zubaka"
  | "izere"
  | "lineup"
  | "aquatrace";

export type ProjectStage = "Built" | "In development" | "Designed" | "Concept" | "Proposal";

export interface Project {
  slug: ProjectVisualKey;
  number: string;
  name: string;
  category: string;
  line: string;
  summary: string;
  stage: ProjectStage;
  status: string;
  role: string;
  stack: string[];
  link?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    slug: "schoolarchive",
    number: "01",
    name: "SchoolArchive",
    category: "Education",
    line: "Every school resource, in one place.",
    summary:
      "A resource hub for notes, past papers and assignments, with separate access for students, teachers and admins. Built for one school, designed to serve many.",
    stage: "Built",
    status: "Built · Team project",
    role: "Contributor",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: { label: "View on GitHub", href: "https://github.com/Linaa0/RCA_ARCHIVE" },
  },
  {
    slug: "instantly",
    number: "02",
    name: "Instantly",
    category: "AI Productivity",
    line: "Less time reading about work.",
    summary:
      "Gmail and Slack in one inbox. Messages are sorted by urgency and summarised, with reply drafts you edit before anything is sent.",
    stage: "In development",
    status: "In development · Independent",
    role: "Design and full-stack",
    stack: ["Next.js", "FastAPI", "SQLAlchemy", "PostgreSQL", "AI APIs"],
    link: { label: "View on GitHub", href: "https://github.com/Linaa0/Instantly-" },
  },
  {
    slug: "zubaka",
    number: "03",
    name: "ZUBAKA",
    category: "Civic Technology",
    line: "Know the place. Build with confidence.",
    summary:
      "Choose a site and see its flood exposure, slope and road access explained in plain language, in English, Kinyarwanda and French. A decision aid, not an official land registry.",
    stage: "Concept",
    status: "Concept and research",
    role: "Concept and research",
    stack: [],
  },
  {
    slug: "izere",
    number: "04",
    name: "IZERE",
    category: "Legal Technology",
    line: "Clear agreements. Accountable work.",
    summary:
      "Work agreements that both sides confirm and track in one timestamped record, with USSD and OTP access planned for basic phones. It does not handle payments.",
    stage: "Proposal",
    status: "Proposal · Team concept",
    role: "Project team",
    stack: [],
  },
  {
    slug: "lineup",
    number: "05",
    name: "Line-Up",
    category: "Mobility",
    line: "Kigali's buses in one app.",
    summary:
      "Routes, stops, fares, QR tickets and live bus tracking for passengers in Kigali. The full experience is designed in Figma; building the screens comes next.",
    stage: "Designed",
    status: "Designed · Build in progress",
    role: "Design and development",
    stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "Figma"],
    link: { label: "View on GitHub", href: "https://github.com/Linaa0/Line-UP" },
  },
  {
    slug: "aquatrace",
    number: "06",
    name: "AquaTrace",
    category: "Embedded Systems",
    line: "Find pollution where it starts.",
    summary:
      "Sensor stations along city drains watch turbidity, conductivity, temperature and flow, then trace an abnormal reading back to the section it came from. A school prototype is planned.",
    stage: "Proposal",
    status: "Proposal · Prototype planned",
    role: "Concept and system design",
    stack: ["Microcontroller", "Water sensors", "Dashboard"],
  },
];
