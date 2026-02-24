import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatIconModule],
  template: `
    <div class="about-page">
      <mat-card appearance="outlined" class="about-card">
        <div class="about-avatar">👩‍💻</div>
        <mat-card-header>
          <mat-card-subtitle>About the Author</mat-card-subtitle>
          <mat-card-title class="about-name">Jane Developer</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="about-bio">
            Full-stack developer with over 8 years of experience building web applications.
            Passionate about Angular, TypeScript, and creating elegant solutions to complex problems.
            When not coding, you can find me writing tutorials and contributing to open source.
          </p>
          <mat-divider></mat-divider>
          <div class="about-stats">
            <div class="about-stat">
              <mat-icon class="stat-icon" color="primary">article</mat-icon>
              <span class="stat-value">150+</span>
              <span class="stat-label">Articles</span>
            </div>
            <div class="about-stat">
              <mat-icon class="stat-icon" color="primary">group</mat-icon>
              <span class="stat-value">50K+</span>
              <span class="stat-label">Readers</span>
            </div>
            <div class="about-stat">
              <mat-icon class="stat-icon" color="primary">work_history</mat-icon>
              <span class="stat-value">8+</span>
              <span class="stat-label">Years</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .about-page { max-width: 640px; margin: 0 auto; padding: 48px 24px; }
    .about-card { text-align: center; padding: 24px; }
    .about-avatar { font-size: 72px; margin-bottom: 16px; }
    .about-name { font-size: 1.75rem !important; font-weight: 800 !important; }
    .about-bio { font-size: 16px; color: #424242; line-height: 1.7; margin-bottom: 24px; }
    mat-divider { margin: 24px 0; }
    .about-stats { display: flex; justify-content: center; gap: 48px; }
    .about-stat { display: flex; flex-direction: column; align-items: center; }
    .stat-icon { margin-bottom: 4px; }
    .stat-value { font-size: 1.5rem; font-weight: 700; color: #3f51b5; }
    .stat-label { font-size: 0.8rem; color: #666; }
    @media (max-width: 768px) {
      .about-card { padding: 16px; }
      .about-stats { gap: 24px; }
    }
  `]
})
export class AboutComponent {}
