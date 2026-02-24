import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

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
  imports: [MatCardModule, MatChipsModule],
  template: `
    <mat-card appearance="outlined" class="project-card">
      <div class="project-image">{{ project.image }}</div>
      <mat-card-header>
        <mat-card-title>{{ project.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p class="project-description">{{ project.description }}</p>
        <mat-chip-set>
          @for (tag of project.tags; track tag) {
            <mat-chip>{{ tag }}</mat-chip>
          }
        </mat-chip-set>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .project-card { height: 100%; transition: box-shadow 0.2s, transform 0.2s; }
    .project-card:hover { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); transform: translateY(-4px); }
    .project-image { font-size: 48px; text-align: center; padding: 32px; background: #f5f5f5; }
    .project-description { font-size: 14px; color: #666; line-height: 1.5; margin-bottom: 12px; }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
