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
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Overview</h1>
    <app-kpi-cards />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <app-chart-placeholder title="Revenue (Last 7 Days)" />
      <app-chart-placeholder
        title="Orders (Last 7 Days)"
        [bars]="orderBars"
      />
    </div>
    <app-data-table />
  `,
  styles: []
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
