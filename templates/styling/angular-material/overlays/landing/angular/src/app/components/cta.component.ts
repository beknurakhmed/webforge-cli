import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <section id="cta" class="cta-section">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of developers building amazing products.</p>
      <button mat-fab extended color="primary">
        <mat-icon>arrow_forward</mat-icon>
        Start Free Trial
      </button>
      <p class="note">No credit card required</p>
    </section>
  `,
  styles: [`
    .cta-section {
      background: #fafafa;
      padding: 80px 24px;
      text-align: center;
    }
    .cta-section h2 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; }
    .cta-section p { color: #666; margin-bottom: 24px; }
    .note { font-size: 0.875rem; color: #999; margin-top: 16px; }
  `]
})
export class CtaComponent {}
