import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <section id="features" class="features-section">
      <h2>Features</h2>
      <p class="subtitle">Everything you need to build a modern web application</p>
      <div class="features-grid">
        @for (f of features; track f.title) {
          <mat-card appearance="outlined">
            <mat-card-header>
              <mat-icon mat-card-avatar class="feature-icon" [style.color]="f.color">{{ f.icon }}</mat-icon>
              <mat-card-title>{{ f.title }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>{{ f.description }}</p>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </section>
  `,
  styles: [`
    .features-section { padding: 64px 24px; max-width: 1200px; margin: 0 auto; text-align: center; }
    .features-section h2 { font-size: 2rem; font-weight: 700; margin-bottom: 8px; }
    .subtitle { color: #666; margin-bottom: 40px; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; text-align: left; }
    .feature-icon { font-size: 32px; width: 40px; height: 40px; }
  `]
})
export class FeaturesComponent {
  features = [
    { icon: 'bolt', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.', color: '#ff9800' },
    { icon: 'palette', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.', color: '#e91e63' },
    { icon: 'lock', title: 'Secure by Default', description: 'Built with security best practices.', color: '#4caf50' },
    { icon: 'extension', title: 'Modular Architecture', description: 'Component-based structure for easy customization.', color: '#9c27b0' },
    { icon: 'phone_iphone', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.', color: '#2196f3' },
    { icon: 'rocket_launch', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.', color: '#f44336' },
  ];
}
