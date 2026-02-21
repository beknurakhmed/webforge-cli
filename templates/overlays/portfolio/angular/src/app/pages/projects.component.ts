import { Component } from '@angular/core';
import { ProjectCardComponent, Project } from '../components/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="projects-container">
      <h1 class="projects-page-title">Projects</h1>
      <div class="projects-filter-bar">
        @for (cat of categories; track cat) {
          <button
            class="projects-filter-btn"
            [class.active]="active === cat"
            (click)="active = cat"
          >{{ cat }}</button>
        }
      </div>
      <div class="projects-grid">
        @for (p of filtered; track p.id) {
          <app-project-card [project]="p" />
        }
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    .projects-page-title {
      font-size: 32px;
      font-weight: 800;
      color: #111827;
      margin-bottom: 24px;
      text-align: center;
    }

    .projects-filter-bar {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 32px;
    }

    .projects-filter-btn {
      padding: 8px 18px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #fff;
      font-size: 14px;
      color: #374151;
      cursor: pointer;
      transition: all 0.2s;
    }

    .projects-filter-btn:hover {
      border-color: #4f46e5;
      color: #4f46e5;
    }

    .projects-filter-btn.active {
      background: #4f46e5;
      color: #fff;
      border-color: #4f46e5;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    @media (max-width: 768px) {
      .projects-filter-bar {
        flex-wrap: wrap;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  `]
})
export class ProjectsComponent {
  active = 'All';

  categories: string[] = ['All', 'Web App', 'Dashboard', 'Tool'];

  projects: Project[] = [
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
    {
      id: 4,
      title: 'Chat Application',
      description: 'Real-time messaging with WebSockets',
      image: '💬',
      tags: ['React', 'Socket.io', 'Express'],
      category: 'Web App',
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      description: 'CLI tool for generating portfolios',
      image: '🛠️',
      tags: ['Node.js', 'TypeScript', 'CLI'],
      category: 'Tool',
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard',
      image: '📊',
      tags: ['Angular', 'D3.js', 'PostgreSQL'],
      category: 'Dashboard',
    },
  ];

  get filtered(): Project[] {
    return this.active === 'All'
      ? this.projects
      : this.projects.filter((p) => p.category === this.active);
  }
}
