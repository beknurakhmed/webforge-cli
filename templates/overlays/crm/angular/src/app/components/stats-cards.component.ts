import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  template: `
    <div class="stats-grid">
      @for (stat of stats; track stat.label) {
        <div class="stat-card">
          <span class="stat-icon">{{ stat.icon }}</span>
          <div class="stat-info">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }

    .stat-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .stat-icon { font-size: 32px; }

    .stat-info {
      display: flex;
      flex-direction: column;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
    }

    .stat-label {
      font-size: 13px;
      color: #6b7280;
    }
  `]
})
export class StatsCardsComponent {
  stats = [
    { icon: '👥', value: '2,847', label: 'Total Contacts' },
    { icon: '🎯', value: '643', label: 'Leads' },
    { icon: '✅', value: '1,924', label: 'Customers' },
    { icon: '📉', value: '280', label: 'Churned' },
  ];
}
