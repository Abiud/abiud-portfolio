export interface NavLink {
  label: string;
  href: string;
}

export interface ExternalLink extends NavLink {
  newTab?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const externalLinks: ExternalLink[] = [
  { label: "Resume", href: "/resume.pdf", newTab: true },
];

// Section IDs for programmatic use
export const SECTION_IDS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  PUBLICATIONS: "publications",
  SKILLS: "skills",
  CONTACT: "contact",
} as const;
