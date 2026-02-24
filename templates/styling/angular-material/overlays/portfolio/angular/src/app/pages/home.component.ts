import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent, Project } from '../components/project-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <section class="hero-section">
      <div class="hero-container">
        <p class="hero-greeting">Hi, I'm a</p>
        <h1 class="hero-headline">Full-Stack Developer</h1>
        <p class="hero-subtext">
          I build modern web applications with clean code and great user experiences.
        </p>
        <div class="hero-actions">
          <a mat-raised-button routerLink="/projects" color="primary">
            <mat-icon>code</mat-icon> View Projects
          </a>
          <a mat-stroked-button routerLink="/contact" color="primary">
            <mat-icon>mail</mat-icon> Get in Touch
          </a>
        </div>
      </div>
    </section>
    <section class="featured-section">
      <div class="section-container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="project-grid">
          @for (p of featured; track p.id) {
            <app-project-card [project]="p" />
          }
        </div>
      </div>
    </section>
    <section class="skills-section">
      <div class="section-container">
        <h2 class="section-title">Skills</h2>
        <div class="skills-tags">
          <mat-chip-set>
            @for (s of topSkills; track s) {
              <mat-chip highlighted>{{ s }}</mat-chip>
            }
          </mat-chip-set>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section { background: #1a237e; color: #fff; padding: 80px 24px; text-align: center; }
    .hero-container { max-width: 1100px; margin: 0 auto; }
    .hero-greeting { color: #7c4dff; font-size: 16px; font-weight: 600; margin-bottom: 8px; }
    .hero-headline { font-size: 3rem; font-weight: 800; margin-bottom: 16px; }
    .hero-subtext { font-size: 18px; color: #b0bec5; max-width: 520px; margin: 0 auto 32px; }
    .hero-actions { display: flex; gap: 16px; justify-content: center; }
    .section-container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    .featured-section, .skills-section { padding: 64px 0; }
    .section-title { font-size: 1.5rem; font-weight: 700; color: #212121; margin-bottom: 24px; text-align: center; }
    .project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .skills-tags { display: flex; justify-content: center; }
    @media (max-width: 768px) {
      .hero-headline { font-size: 2rem; }
      .hero-actions { flex-direction: column; align-items: center; }
      .project-grid { grid-template-columns: 1fr; gap: 16px; }
    }
  `]
})
export class HomeComponent {
  featured: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with payments',
      image: '🛒',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      category: 'Web App',
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Collaborative project management tool',
      image: '📋',
      tags: ['React', 'Firebase', 'TypeScript'],
      category: 'Web App',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather visualization',
      image: '🌤️',
      tags: ['Vue', 'D3.js', 'API'],
      category: 'Dashboard',
    },
  ];

  topSkills: string[] = [
    'Angular',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Docker',
    'AWS',
    'PostgreSQL',
  ];
}
