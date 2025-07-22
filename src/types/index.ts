export interface Skill {
  name: string;
  icon?: string; // Optional: for displaying a logo, e.g., a UnoCSS icon class
}

export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string; // The problem this project solves
  value: string; // The value this project brings to users/clients
  longDescription?: string; // For a detailed project page or modal
  imageUrl: string;
  tags: string[];
  skills: Skill[];
  liveUrl?: string; // URL to the live project
  sourceUrl?: string; // URL to the source code
}
