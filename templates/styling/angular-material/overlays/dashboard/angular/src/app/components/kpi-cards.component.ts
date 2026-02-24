import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface KpiItem {
  icon: string;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

@Component({
  selector: 'app-kpi-cards',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="kpi-grid">
      @for (kpi of kpis; track kpi.label) {
        <mat-card appearance="outlined">
          <mat-card-content class="kpi-content">
            <mat-icon class="kpi-icon" [style.color]="kpi.positive ? '#4caf50' : '#f44336'">{{ kpi.icon }}</mat-icon>
            <div class="kpi-info">
              <p class="kpi-label">{{ kpi.label }}</p>
              <p class="kpi-value">{{ kpi.value }}</p>
              <p class="kpi-change" [class.positive]="kpi.positive" [class.negative]="!kpi.positive">
                <mat-icon class="change-icon">{{ kpi.positive ? 'trending_up' : 'trending_down' }}</mat-icon>
                {{ kpi.change }}
              </p>
            </div>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .kpi-content { display: flex; align-items: center; gap: 16px; padding: 8px 0; }
    .kpi-icon { font-size: 2rem; width: 40px; height: 40px; }
    .kpi-label { font-size: 0.8rem; color: #666; text-transform: uppercase; font-weight: 600; margin: 0; }
    .kpi-value { font-size: 1.5rem; font-weight: 700; color: #212121; margin: 4px 0; }
    .kpi-change { font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 4px; margin: 0; }
    .change-icon { font-size: 16px; width: 16px; height: 16px; }
    .positive { color: #4caf50; }
    .negative { color: #f44336; }
  `]
})
export class KpiCardsComponent {
  kpis: KpiItem[] = [
    { icon: 'attach_money', label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
    { icon: 'person', label: 'Active Users', value: '2,420', change: '+8%', positive: true },
    { icon: 'inventory_2', label: 'Orders', value: '1,210', change: '-3%', positive: false },
    { icon: 'show_chart', label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
  ];
}
