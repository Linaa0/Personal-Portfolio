/**
 * Single source of truth for identity, links and replaceable assets.
 *
 * To add your portrait: put the photo in /public (for example
 * /public/portrait.jpg) and set `portrait.src` below. Every portrait frame on
 * the site reads from here.
 */
export const site = {
  name: "Ishimwe Lina Assoumani",
  shortName: "Lina Assoumani",
  initials: "ILA",
  roles: ["Frontend Developer", "Project Manager", "Creative Technologist"],
  leadership: {
    title: "CEO & Co-Founder",
    company: "QLine Technologies",
  },
  education: {
    school: "Rwanda Coding Academy",
    program: "Software Programming and Embedded Development",
    period: "2024 to 2028",
  },
  location: "Kigali, Rwanda",
  url: "https://personal-portfolio-pqxp.vercel.app",

  email: "ishimwelina06@gmail.com",
  phone: "+250 787 481 615",
  github: { href: "https://github.com/Linaa0", handle: "Linaa0" },
  linkedin: {
    href: "https://www.linkedin.com/in/ishimwe-l-9593bb414/",
    handle: "Ishimwe Lina Assoumani",
  },
  cv: {
    href: "/Ishimwe-Lina-Assoumani-CV.pdf",
    fileName: "Ishimwe-Lina-Assoumani-CV.pdf",
  },

  portrait: {
    /** Set to e.g. "/portrait.jpg" once the new photograph is ready. */
    src: null as string | null,
    alt: "Portrait of Ishimwe Lina Assoumani",
  },

  languages: ["Kinyarwanda", "English", "French", "Kiswahili"],
} as const;

/** Header and footer navigation */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "qline", label: "Leadership" },
  { id: "contact", label: "Contact" },
] as const;
