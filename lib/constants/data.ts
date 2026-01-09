export interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  images?: { src: string; alt: string; clickable?: boolean }[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string | null;
  image?: string;
  video?: string;
}

export interface Skills {
  advanced: string[];
  intermediate: string[];
  beginner: string[];
}

export const experiences: Experience[] = [
  {
    title: "Research Technician",
    company: "Children's Hospital of Philadelphia",
    period: "Oct 2021 – Present",
    highlights: [
      "Multiomics data analysis (RNA-seq, single cell RNA-sequencing, spatial transcriptomics)",
      "Statistical analysis and visualization using R and Python",
      "Built reproducible pipelines with Docker",
      "Created interactive Shiny web apps for data communication",
      "Developed FileMaker databases with custom UI/UX",
    ],
  },
  {
    title: "Software Engineer/Data Analyst",
    company: "Baylor College of Medicine",
    period: "",
    highlights: [
      "Developed relational SQL model for FishNET database using FileMaker",
      "Created 100+ custom scripts and integrated Google Charts API",
      "Automated NGS analysis with Bash scripts",
      "Built shared Unix environment saving costs for BCM labs",
    ],
    images: [
      { src: "/fishnet_logo.png", alt: "FishNET Logo", clickable: false },
      { src: "/fishnet.png", alt: "FishNET Application Screenshot" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "UTRGV Assistant",
    subtitle: "Senior Project",
    description:
      "Facebook Messenger chatbot assisting students with class and professor inquiries using Wit.ai for NLP, Express and MongoDB backend.",
    tech: ["Wit.ai", "Express", "MongoDB", "JavaScript"],
    link: null,
    image: "/seniorPoster.png",
  },
  {
    title: "Lingappan Lab Website",
    subtitle: "Lab Website",
    description:
      "Redesigned laboratory online presence with Next.js, featuring team profiles, project showcases, and interactive R Shiny apps.",
    tech: ["Next.js", "React", "R Shiny"],
    link: "https://www.lingappanlab.com/",
    image: "/lingappanlab_website.png",
  },
  {
    title: "TravelCost Scout",
    subtitle: "Hackathon Project",
    description:
      "Web app finding affordable airfare between destinations, displaying results on animated maps with multi-flight savings suggestions.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
    video: "https://www.youtube.com/embed/YEmyNHrnmeY?si=JuAzjKrokAvhs_0H",
  },
];

export const skills: Skills = {
  advanced: ["R", "C++", "JavaScript", "Python"],
  intermediate: ["Bash", "PHP", "C#", "SQL"],
  beginner: ["Perl", "Dart"],
};

// Flat array for JSON-LD structured data
export const skillsFlat = [
  ...skills.advanced,
  ...skills.intermediate,
  ...skills.beginner,
];
