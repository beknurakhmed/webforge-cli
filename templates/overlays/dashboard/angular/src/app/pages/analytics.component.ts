import { Component } from '@angular/core';
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
  imports: [ChartPlaceholderComponent],
  template: `
    <h1 class="analytics-heading">Analytics</h1>
    <div class="analytics-metrics-grid">
      @for (metric of metrics; track metric.label) {
        <div class="analytics-metric-card">
          <p class="analytics-metric-label">{{ metric.label }}</p>
          <p class="analytics-metric-value">{{ metric.value }}</p>
        </div>
      }
    </div>
    <div class="analytics-charts-grid">
      <app-chart-placeholder title="Page Views" [bars]="pageViews" />
      <app-chart-placeholder title="Bounce Rate (%)" [bars]="bounceRate" />
      <app-chart-placeholder
        title="Session Duration (min)"
        [bars]="sessionDuration"
      />
      <app-chart-placeholder title="Conversions" [bars]="conversions" />
    </div>
  `,
  styles: [`
    .analytics-heading {
      font-size: 1.5rem;
      color: #111827;
      margin-bottom: 1.5rem;
    }

    .analytics-metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .analytics-metric-card {
      background: #fff;
      padding: 1rem;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      text-align: center;
    }

    .analytics-metric-label {
      font-size: 0.8rem;
      color: #6b7280;
      text-transform: uppercase;
      font-weight: 600;
    }

    .analytics-metric-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #4f46e5;
      margin-top: 0.25rem;
    }

    .analytics-charts-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .analytics-metrics-grid {
        grid-template-columns: 1fr 1fr;
      }

      .analytics-charts-grid {
        grid-template-columns: 1fr;
      }
    }
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
