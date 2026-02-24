import { Component } from '@angular/core';
import { KpiCardsComponent } from '../components/kpi-cards.component';
import { ChartPlaceholderComponent } from '../components/chart-placeholder.component';
import { DataTableComponent } from '../components/data-table.component';

interface ChartBar {
  label: string;
  value: number;
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [KpiCardsComponent, ChartPlaceholderComponent, DataTableComponent],
  template: `
    <h1 class="page-title">Overview</h1>
    <app-kpi-cards />
    <div class="charts-row">
      <app-chart-placeholder title="Revenue (Last 7 Days)" />
      <app-chart-placeholder title="Orders (Last 7 Days)" [bars]="orderBars" />
    </div>
    <app-data-table />
  `,
  styles: [`
    .page-title { font-size: 1.5rem; color: #212121; margin-bottom: 24px; }
    .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
    @media (max-width: 768px) { .charts-row { grid-template-columns: 1fr; } }
  `]
})
export class OverviewComponent {
  orderBars: ChartBar[] = [
    { label: 'Mon', value: 50 },
    { label: 'Tue', value: 75 },
    { label: 'Wed', value: 60 },
    { label: 'Thu', value: 85 },
    { label: 'Fri', value: 95 },
    { label: 'Sat', value: 40 },
    { label: 'Sun', value: 30 },
  ];
}
