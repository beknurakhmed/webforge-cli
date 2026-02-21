import { Component, Input } from '@angular/core';

interface ChartBar {
  label: string;
  value: number;
}

@Component({
  selector: 'app-chart-placeholder',
  standalone: true,
  template: `
    <div class="chart-card">
      <h3 class="chart-card-title">{{ title }}</h3>
      <div class="chart-card-bars">
        @for (bar of bars; track $index) {
          <div class="chart-card-bar-col">
            <div
              class="chart-card-bar"
              [style.height.%]="bar.value"
            ></div>
            <span class="chart-card-bar-label">{{ bar.label }}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .chart-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.25rem;
      border: 1px solid #e5e7eb;
    }

    .chart-card-title {
      font-size: 1rem;
      color: #111827;
      margin-bottom: 1rem;
    }

    .chart-card-bars {
      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
      height: 160px;
      padding-top: 0.5rem;
    }

    .chart-card-bar-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: flex-end;
    }

    .chart-card-bar {
      width: 100%;
      max-width: 40px;
      background: #4f46e5;
      border-radius: 4px 4px 0 0;
      transition: height 0.3s;
      min-height: 4px;
    }

    .chart-card-bar-label {
      font-size: 0.7rem;
      color: #6b7280;
      margin-top: 0.35rem;
    }
  `]
})
export class ChartPlaceholderComponent {
  @Input() title = 'Chart';

  @Input() bars: ChartBar[] = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 80 },
    { label: 'Wed', value: 45 },
    { label: 'Thu', value: 90 },
    { label: 'Fri', value: 70 },
    { label: 'Sat', value: 55 },
    { label: 'Sun', value: 40 },
  ];
}
