import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent, Project } from '../components/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent],
  template: `
    <section class="bg-gray-900 text-white py-20 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-indigo-500 text-base font-semibold mb-2">Hi, I'm a</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Full-Stack Developer</h1>
        <p class="text-lg text-gray-400 max-w-lg mx-auto mb-8">
          I build modern web applications with clean code and great user experiences.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/projects" class="px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base font-semibold no-underline transition-colors">View Projects</a>
          <a routerLink="/contact" class="px-7 py-3 border border-indigo-600 text-indigo-500 hover:bg-indigo-600 hover:text-white rounded-lg text-base font-semibold no-underline transition-colors">Get in Touch</a>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (p of featured; track p.id) {
            <app-project-card [project]="p" />
          }
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Skills</h2>
        <div class="flex flex-wrap gap-2.5 justify-center">
          @for (s of topSkills; track s) {
            <span class="px-5 py-2 bg-white rounded-lg text-sm text-gray-700 font-medium shadow-sm">{{ s }}</span>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
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
