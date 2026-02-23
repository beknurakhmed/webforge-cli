import { Component } from '@angular/core';
import { ProjectCardComponent, Project } from '../components/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">Projects</h1>
      <div class="flex flex-wrap gap-2.5 justify-center mb-8">
        @for (cat of categories; track cat) {
          <button
            class="px-5 py-2 border rounded-lg text-sm cursor-pointer transition-all"
            [class.bg-indigo-600]="active === cat"
            [class.text-white]="active === cat"
            [class.border-indigo-600]="active === cat"
            [class.bg-white]="active !== cat"
            [class.text-gray-700]="active !== cat"
            [class.border-gray-300]="active !== cat"
            [class.hover:border-indigo-600]="active !== cat"
            [class.hover:text-indigo-600]="active !== cat"
            (click)="active = cat"
          >{{ cat }}</button>
        }
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        @for (p of filtered; track p.id) {
          <app-project-card [project]="p" />
        }
      </div>
    </div>
  `,
  styles: []
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
