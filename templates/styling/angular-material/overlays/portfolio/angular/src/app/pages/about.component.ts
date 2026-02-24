import { Component } from '@angular/core';
import { SkillsGridComponent } from '../components/skills-grid.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Experience {
  role: string;
  company: string;
  period: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsGridComponent, MatCardModule, MatDividerModule, MatIconModule, MatProgressBarModule],
  template: `
    <div class="about-container">
      <div class="about-profile">
        <div class="about-avatar">👨‍💻</div>
        <h1 class="page-title">About Me</h1>
        <p class="about-bio">
          I'm a passionate full-stack developer with 6+ years of experience building scalable
          web applications. I specialize in Angular, React, and Node.js, and love turning complex
          problems into simple, beautiful solutions.
        </p>
      </div>

      <div class="experience-section">
        <h2 class="section-title">Experience</h2>
        @for (exp of experiences; track exp.role) {
          <mat-card appearance="outlined" class="experience-card">
            <mat-card-content class="experience-content">
              <mat-icon class="exp-icon" color="primary">work</mat-icon>
              <div>
                <div class="experience-role">{{ exp.role }}</div>
                <div class="experience-company">{{ exp.company }} &middot; {{ exp.period }}</div>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      <h2 class="section-title">Skills</h2>
      <app-skills-grid />
    </div>
  `,
  styles: [`
    .about-container { max-width: 1100px; margin: 0 auto; padding: 48px 24px; }
    .about-profile { text-align: center; margin-bottom: 48px; }
    .about-avatar { font-size: 72px; margin-bottom: 16px; }
    .page-title { font-size: 2rem; font-weight: 800; color: #212121; margin-bottom: 16px; }
    .about-bio { font-size: 16px; color: #424242; line-height: 1.7; max-width: 600px; margin: 0 auto; }
    .section-title { font-size: 1.375rem; font-weight: 700; color: #212121; margin-bottom: 20px; }
    .experience-section { margin-bottom: 48px; }
    .experience-card { margin-bottom: 10px; }
    .experience-content { display: flex; align-items: center; gap: 16px; padding: 8px 0; }
    .exp-icon { font-size: 24px; width: 24px; height: 24px; }
    .experience-role { font-weight: 600; color: #212121; font-size: 15px; }
    .experience-company { color: #666; font-size: 14px; margin-top: 2px; }
  `]
})
export class AboutComponent {
  experiences: Experience[] = [
    { role: 'Senior Frontend Developer', company: 'Tech Corp', period: '2022 - Present' },
    { role: 'Full-Stack Developer', company: 'StartupXYZ', period: '2020 - 2022' },
    { role: 'Junior Developer', company: 'WebAgency', period: '2018 - 2020' },
  ];
}
