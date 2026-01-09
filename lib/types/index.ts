// Shared types for the portfolio

export interface ImageData {
  src: string;
  alt: string;
}

export interface LightboxState {
  image: ImageData | null;
  setImage: (image: ImageData | null) => void;
}

// Re-export types from other modules
export type { Publication, Author } from "@/lib/semantic-scholar";
export type { Experience, Project, Skills } from "@/lib/constants/data";
export type { NavLink, ExternalLink } from "@/lib/constants/navigation";
