import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChartPlaceholderComponent } from '../components/chart-placeholder.component';

interface AnalyticsMetric {
  label: string;
  value: string;
}

interface ChartBar {
  label: string;
  value: number;
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [MatCardModule, ChartPlaceholderComponent],
  template: `
    <h1 class="page-title">Analytics</h1>
    <div class="metrics-grid">
      @for (metric of metrics; track metric.label) {
        <mat-card appearance="outlined">
          <mat-card-content class="metric-content">
            <p class="metric-label">{{ metric.label }}</p>
            <p class="metric-value">{{ metric.value }}</p>
          </mat-card-content>
        </mat-card>
      }
    </div>
    <div class="charts-grid">
      <app-chart-placeholder title="Page Views" [bars]="pageViews" />
      <app-chart-placeholder title="Bounce Rate (%)" [bars]="bounceRate" />
      <app-chart-placeholder title="Session Duration (min)" [bars]="sessionDuration" />
      <app-chart-placeholder title="Conversions" [bars]="conversions" />
    </div>
  `,
  styles: [`
    .page-title { font-size: 1.5rem; color: #212121; margin-bottom: 24px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .metric-content { text-align: center; padding: 8px 0; }
    .metric-label { font-size: 0.8rem; color: #666; text-transform: uppercase; font-weight: 600; margin: 0; }
    .metric-value { font-size: 1.5rem; font-weight: 700; color: #3f51b5; margin: 4px 0 0; }
    .charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 768px) { .charts-grid { grid-template-columns: 1fr; } }
  `]
})
export class AnalyticsComponent {
  metrics: AnalyticsMetric[] = [
    { label: 'Avg. Session', value: '4m 32s' },
    { label: 'Bounce Rate', value: '38.2%' },
    { label: 'Page Views', value: '18,420' },
    { label: 'New Users', value: '1,205' },
  ];

  pageViews: ChartBar[] = [
    { label: 'Mon', value: 70 },
    { label: 'Tue', value: 85 },
    { label: 'Wed', value: 60 },
    { label: 'Thu', value: 90 },
    { label: 'Fri', value: 75 },
    { label: 'Sat', value: 50 },
    { label: 'Sun', value: 35 },
  ];

  bounceRate: ChartBar[] = [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 35 },
    { label: 'Wed', value: 50 },
    { label: 'Thu', value: 30 },
    { label: 'Fri', value: 45 },
    { label: 'Sat', value: 55 },
    { label: 'Sun', value: 60 },
  ];

  sessionDuration: ChartBar[] = [
    { label: 'Mon', value: 55 },
    { label: 'Tue', value: 70 },
    { label: 'Wed', value: 45 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 65 },
    { label: 'Sat', value: 40 },
    { label: 'Sun', value: 30 },
  ];

  conversions: ChartBar[] = [
    { label: 'Mon', value: 45 },
    { label: 'Tue', value: 60 },
    { label: 'Wed', value: 55 },
    { label: 'Thu', value: 75 },
    { label: 'Fri', value: 80 },
    { label: 'Sat', value: 35 },
    { label: 'Sun', value: 25 },
  ];
}
