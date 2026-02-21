import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent, Project } from '../components/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent],
  template: `
    <section class="hero-section">
      <div class="home-container">
        <p class="hero-greeting">Hi, I'm a</p>
        <h1 class="hero-headline">Full-Stack Developer</h1>
        <p class="hero-subtext">
          I build modern web applications with clean code and great user experiences.
        </p>
        <div class="hero-actions">
          <a routerLink="/projects" class="hero-btn hero-btn-primary">View Projects</a>
          <a routerLink="/contact" class="hero-btn hero-btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
    <section class="featured-section">
      <div class="home-container">
        <h2 class="home-section-title">Featured Projects</h2>
        <div class="featured-project-grid">
          @for (p of featured; track p.id) {
            <app-project-card [project]="p" />
          }
        </div>
      </div>
    </section>
    <section class="skills-preview-section">
      <div class="home-container">
        <h2 class="home-section-title">Skills</h2>
        <div class="skills-preview-tags">
          @for (s of topSkills; track s) {
            <span class="skills-preview-tag">{{ s }}</span>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .hero-section {
      background: #111827;
      color: #fff;
      padding: 80px 0;
      text-align: center;
    }

    .hero-greeting {
      color: #4f46e5;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .hero-headline {
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .hero-subtext {
      font-size: 18px;
      color: #9ca3af;
      max-width: 520px;
      margin: 0 auto 32px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
    }

    .hero-btn {
      padding: 12px 28px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
    }

    .hero-btn-primary {
      background: #4f46e5;
      color: #fff;
    }

    .hero-btn-primary:hover {
      background: #4338ca;
    }

    .hero-btn-secondary {
      border: 1px solid #4f46e5;
      color: #4f46e5;
    }

    .hero-btn-secondary:hover {
      background: #4f46e5;
      color: #fff;
    }

    .featured-section,
    .skills-preview-section {
      padding: 64px 0;
    }

    .home-section-title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 24px;
      text-align: center;
    }

    .featured-project-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .skills-preview-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .skills-preview-tag {
      padding: 8px 18px;
      background: #fff;
      border-radius: 8px;
      font-size: 14px;
      color: #374151;
      font-weight: 500;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 768px) {
      .hero-headline {
        font-size: 32px;
      }

      .hero-subtext {
        font-size: 16px;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .featured-project-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
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
