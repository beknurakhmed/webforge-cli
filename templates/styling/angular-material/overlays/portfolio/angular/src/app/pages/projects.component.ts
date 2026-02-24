import { Component } from '@angular/core';
import { ProjectCardComponent, Project } from '../components/project-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, MatButtonModule, MatButtonToggleModule],
  template: `
    <div class="projects-container">
      <h1 class="page-title">Projects</h1>
      <div class="filter-bar">
        <mat-button-toggle-group [value]="active" (change)="active = $event.value">
          @for (cat of categories; track cat) {
            <mat-button-toggle [value]="cat">{{ cat }}</mat-button-toggle>
          }
        </mat-button-toggle-group>
      </div>
      <div class="projects-grid">
        @for (p of filtered; track p.id) {
          <app-project-card [project]="p" />
        }
      </div>
    </div>
  `,
  styles: [`
    .projects-container { max-width: 1100px; margin: 0 auto; padding: 48px 24px; }
    .page-title { font-size: 2rem; font-weight: 800; color: #212121; margin-bottom: 24px; text-align: center; }
    .filter-bar { display: flex; justify-content: center; margin-bottom: 32px; }
    .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    @media (max-width: 768px) {
      .projects-grid { grid-template-columns: 1fr; gap: 16px; }
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
