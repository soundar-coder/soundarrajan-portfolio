import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SocialLink } from '../../models/social-link.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(public portfolio: PortfolioService) {}

  get stackComment(): string {
    return `// stack: ${this.portfolio.heroStack.join(', ')}`;
  }

  get socialLinks(): SocialLink[] {
    return this.portfolio.socialLinks;
  }
}
