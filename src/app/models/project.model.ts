export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;   // use '[ADD GITHUB URL]' when unavailable
  demoUrl?: string;     // omit entirely when there is no live demo
  category: 'backend' | 'systems' | 'networking';
}
