import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill, SkillCategory } from '../../models/skill.model';

type FilterValue = SkillCategory | 'all';

interface Filter {
  label: string;
  value: FilterValue;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  readonly filters: Filter[] = [
    { label: 'All', value: 'all' },
    { label: 'Backend', value: 'backend' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Tools', value: 'tools' },
  ];

  activeFilter: FilterValue = 'all';

  constructor(private portfolio: PortfolioService) {}

  get skills(): Skill[] {
    const all = this.portfolio.skills;
    return this.activeFilter === 'all'
      ? all
      : all.filter((skill) => skill.category === this.activeFilter);
  }

  setFilter(value: FilterValue): void {
    this.activeFilter = value;
  }
}
