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
    <div class="project-card">
      <div class="project-card-image">{{ project.image }}</div>
      <div class="project-card-body">
        <h3 class="project-card-title">{{ project.title }}</h3>
        <p class="project-card-description">{{ project.description }}</p>
        <div class="project-card-tags">
          @for (tag of project.tags; track tag) {
            <span class="project-card-tag">{{ tag }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .project-card-image {
      font-size: 48px;
      text-align: center;
      padding: 32px;
      background: #f3f4f6;
    }

    .project-card-body {
      padding: 20px;
    }

    .project-card-title {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 8px;
    }

    .project-card-description {
      font-size: 14px;
      color: #6b7280;
      line-height: 1.5;
      margin-bottom: 14px;
    }

    .project-card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .project-card-tag {
      padding: 4px 10px;
      background: #eef2ff;
      color: #4f46e5;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
