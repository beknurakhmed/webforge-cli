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
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      @for (metric of metrics; track metric.label) {
        <div class="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <p class="text-xs text-gray-500 uppercase font-semibold">{{ metric.label }}</p>
          <p class="text-2xl font-bold text-indigo-600 mt-1">{{ metric.value }}</p>
        </div>
      }
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <app-chart-placeholder title="Page Views" [bars]="pageViews" />
      <app-chart-placeholder title="Bounce Rate (%)" [bars]="bounceRate" />
      <app-chart-placeholder
        title="Session Duration (min)"
        [bars]="sessionDuration"
      />
      <app-chart-placeholder title="Conversions" [bars]="conversions" />
    </div>
  `,
  styles: []
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
