export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categoryBadge: string;
  description: string;
  tags: string[];
  image: string;
  hotlinkImage: string;
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  metrics?: string[];
  overview: string;
}

export interface Milestone {
  year: string;
  tag: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  code: string;
  icon: string;
  color: string;
  description: string;
  skills: string[];
}
