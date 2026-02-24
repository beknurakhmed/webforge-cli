import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  template: `
    <div class="skills-grid">
      @for (group of skills; track group.category) {
        <mat-card appearance="outlined">
          <mat-card-header>
            <mat-card-title>{{ group.category }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <mat-chip-set>
              @for (item of group.items; track item) {
                <mat-chip highlighted>{{ item }}</mat-chip>
              }
            </mat-chip-set>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    @media (max-width: 768px) { .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
  `]
})
export class SkillsGridComponent {
  skills: SkillGroup[] = [
    { category: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira'] },
  ];
}
