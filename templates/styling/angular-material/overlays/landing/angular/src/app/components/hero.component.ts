import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary" class="hero-toolbar">
      <span class="logo">{{projectName}}</span>
      <span class="spacer"></span>
      <a mat-button href="#features">Features</a>
      <a mat-button href="#cta">Pricing</a>
      <a mat-button href="#contact">Contact</a>
    </mat-toolbar>
    <div class="hero-content">
      <h1>Build Something Amazing</h1>
      <p>A modern landing page template to kickstart your next project.</p>
      <div class="hero-actions">
        <button mat-raised-button color="primary">
          <mat-icon>rocket_launch</mat-icon>
          Get Started
        </button>
        <button mat-stroked-button color="primary">Learn More</button>
      </div>
    </div>
  `,
  styles: [`
    .hero-toolbar {
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .logo { font-size: 1.25rem; font-weight: 700; }
    .spacer { flex: 1 1 auto; }
    .hero-content {
      text-align: center;
      padding: 80px 24px;
      background: linear-gradient(135deg, #3f51b5 0%, #7b1fa2 100%);
      color: #fff;
    }
    .hero-content h1 { font-size: 3rem; font-weight: 700; margin-bottom: 16px; }
    .hero-content p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 32px; }
    .hero-actions { display: flex; gap: 16px; justify-content: center; }
  `]
})
export class HeroComponent {
  projectName = '{{projectName}}';
}
