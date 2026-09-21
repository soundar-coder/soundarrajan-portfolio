import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor(public portfolio: PortfolioService) {}

  /**
   * This portfolio has no backend, so the form does not send anything itself.
   * Submitting opens the visitor's email client with the message pre-filled.
   */
  get mailtoHref(): string {
    const subject = encodeURIComponent(`Portfolio contact from ${this.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${this.message}\n\n— ${this.name || 'Anonymous'} (${this.email || 'no email provided'})`
    );
    return `mailto:${this.portfolio.email}?subject=${subject}&body=${body}`;
  }
}
