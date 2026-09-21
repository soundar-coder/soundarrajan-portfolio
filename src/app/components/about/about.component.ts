import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

interface InfoTag {
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly infoTags: InfoTag[] = [
    { label: 'MCA' },
    { label: 'Java Backend' },
    { label: 'Spring Boot' },
    { label: 'REST APIs' },
    { label: 'MySQL' },
    { label: 'Angular' },
  ];

  constructor(public portfolio: PortfolioService) {}
}
