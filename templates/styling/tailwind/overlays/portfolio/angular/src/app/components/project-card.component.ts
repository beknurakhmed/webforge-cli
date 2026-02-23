import { Component, Input } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div class="text-5xl text-center py-8 bg-gray-100">{{ project.image }}</div>
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-900 mb-2">{{ project.title }}</h3>
        <p class="text-sm text-gray-500 leading-relaxed mb-3.5">{{ project.description }}</p>
        <div class="flex flex-wrap gap-1.5">
          @for (tag of project.tags; track tag) {
            <span class="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-medium">{{ tag }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
