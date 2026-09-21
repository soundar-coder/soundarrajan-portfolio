export type SkillCategory = 'backend' | 'frontend' | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string; // devicon class name, see tech-stack component
}
