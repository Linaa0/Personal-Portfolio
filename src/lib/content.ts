export const capabilities = [
  { name: "Frontend", icon: "Monitor", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  {
    name: "Project Management",
    icon: "ClipboardList",
    items: ["Planning", "Roadmaps", "Team coordination", "Research", "Delivery"],
  },
  { name: "Backend", icon: "Server", items: ["Node.js", "Express", "NestJS", "FastAPI", "REST APIs", "Auth"] },
  { name: "Databases", icon: "Database", items: ["PostgreSQL", "MongoDB", "SQL", "Mongoose", "SQLAlchemy"] },
  { name: "Languages", icon: "Code", items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "PHP"] },
  { name: "Design", icon: "PenTool", items: ["Figma", "UI/UX", "Prototyping", "Graphic design", "Blender"] },
  { name: "Embedded", icon: "Cpu", items: ["Arduino", "ESP32", "Electronics", "Robotics"] },
  { name: "Workflow", icon: "GitBranch", items: ["Git", "GitHub", "Socket.io", "Responsive design", "AI-assisted dev"] },
] as const;

export const recognition = [
  { title: "EjoLabs AI Camp", note: "Certification" },
  { title: "Physics Olympiad Camp", note: "2025, 2026" },
  { title: "Mathematics Olympiad Camp", note: "2023" },
  { title: "AIMS Mathematics Camp", note: "Participant" },
  { title: "Robotics", note: "Certification" },
] as const;

export const directions = [
  {
    icon: "Target",
    title: "Engineering depth",
    body: "Grow into a frontend engineer trusted with complex, high-impact products.",
  },
  {
    icon: "Users",
    title: "Product leadership",
    body: "Lead teams from research to release, with clear plans and honest delivery.",
  },
  {
    icon: "Globe",
    title: "Impact at scale",
    body: "Build technology that solves real problems in Rwanda, across Africa and beyond.",
  },
] as const;
