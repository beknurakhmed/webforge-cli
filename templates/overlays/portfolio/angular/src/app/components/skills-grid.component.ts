import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  template: `
    <div class="skills-grid">
      @for (group of skills; track group.category) {
        <div class="skills-category-card">
          <h3 class="skills-category-title">{{ group.category }}</h3>
          <div class="skills-item-list">
            @for (item of group.items; track item) {
              <span class="skills-item">{{ item }}</span>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .skills-category-card {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .skills-category-title {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 14px;
    }

    .skills-item-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .skills-item {
      padding: 8px 14px;
      background: #f9fafb;
      border-radius: 8px;
      font-size: 14px;
      color: #374151;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
    }
  `]
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
