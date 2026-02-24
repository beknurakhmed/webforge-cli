import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface ChartBar {
  label: string;
  value: number;
}

@Component({
  selector: 'app-chart-placeholder',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="chart-bars">
          @for (bar of bars; track $index) {
            <div class="chart-bar-col">
              <div class="chart-bar" [style.height.%]="bar.value"></div>
              <span class="chart-bar-label">{{ bar.label }}</span>
            </div>
          }
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .chart-bars { display: flex; align-items: flex-end; gap: 8px; height: 160px; padding-top: 8px; }
    .chart-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; }
    .chart-bar { width: 100%; max-width: 40px; background: #3f51b5; border-radius: 4px 4px 0 0; transition: height 0.3s; min-height: 4px; }
    .chart-bar-label { font-size: 0.7rem; color: #666; margin-top: 6px; }
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
