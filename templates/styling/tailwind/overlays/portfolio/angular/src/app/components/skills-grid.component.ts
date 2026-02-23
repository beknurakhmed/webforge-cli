import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      @for (group of skills; track group.category) {
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h3 class="text-base font-bold text-gray-900 mb-3.5">{{ group.category }}</h3>
          <div class="flex flex-col gap-2">
            @for (item of group.items; track item) {
              <span class="px-3.5 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 font-medium">{{ item }}</span>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: []
})
export class SkillsGridComponent {
  skills: SkillGroup[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
    },
    {
      category: 'DevOps',
      items: ['Docker', 'AWS', 'CI/CD', 'Linux'],
    },
    {
      category: 'Tools',
      items: ['Git', 'VS Code', 'Figma', 'Jira'],
    },
  ];
}
