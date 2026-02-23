import { Component } from '@angular/core';

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
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      @for (kpi of kpis; track kpi.label) {
        <div class="bg-white rounded-xl p-5 border border-gray-200 flex items-center gap-4">
          <span class="text-3xl">{{ kpi.icon }}</span>
          <div>
            <p class="text-xs text-gray-500 uppercase font-semibold">{{ kpi.label }}</p>
            <p class="text-2xl font-bold text-gray-900">{{ kpi.value }}</p>
            <p
              class="text-xs font-semibold"
              [class.text-emerald-600]="kpi.positive"
              [class.text-red-600]="!kpi.positive"
            >
              {{ kpi.change }}
            </p>
          </div>
        </div>
      }
    </div>
  `,
  styles: []
})
export class KpiCardsComponent {
  kpis: KpiItem[] = [
    {
      icon: '💰',
      label: 'Total Revenue',
      value: '$48,250',
      change: '+12%',
      positive: true,
    },
    {
      icon: '👤',
      label: 'Active Users',
      value: '2,420',
      change: '+8%',
      positive: true,
    },
    {
      icon: '📦',
      label: 'Orders',
      value: '1,210',
      change: '-3%',
      positive: false,
    },
    {
      icon: '📊',
      label: 'Conversion',
      value: '3.2%',
      change: '+0.5%',
      positive: true,
    },
  ];
}
