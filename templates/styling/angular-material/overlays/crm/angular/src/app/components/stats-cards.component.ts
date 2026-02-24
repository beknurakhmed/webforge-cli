import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="stats-grid">
      @for (stat of stats; track stat.label) {
        <mat-card appearance="outlined">
          <mat-card-content class="stat-content">
            <mat-icon class="stat-icon" [style.color]="stat.color">{{ stat.icon }}</mat-icon>
            <div class="stat-info">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-content { display: flex; align-items: center; gap: 16px; padding: 8px 0; }
    .stat-icon { font-size: 2rem; width: 40px; height: 40px; }
    .stat-info { display: flex; flex-direction: column; }
    .stat-value { font-size: 1.5rem; font-weight: 700; color: #212121; }
    .stat-label { font-size: 0.8rem; color: #666; }
  `]
})
export class StatsCardsComponent {
  stats = [
    { icon: 'group', value: '2,847', label: 'Total Contacts', color: '#3f51b5' },
    { icon: 'flag', value: '643', label: 'Leads', color: '#ff9800' },
    { icon: 'check_circle', value: '1,924', label: 'Customers', color: '#4caf50' },
    { icon: 'trending_down', value: '280', label: 'Churned', color: '#f44336' },
  ];
}
