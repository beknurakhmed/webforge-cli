import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      @for (stat of stats; track stat.label) {
        <div class="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
          <span class="text-3xl">{{ stat.icon }}</span>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-gray-900">{{ stat.value }}</span>
            <span class="text-sm text-gray-500">{{ stat.label }}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: []
})
export class StatsCardsComponent {
  stats = [
    { icon: '👥', value: '2,847', label: 'Total Contacts' },
    { icon: '🎯', value: '643', label: 'Leads' },
    { icon: '✅', value: '1,924', label: 'Customers' },
    { icon: '📉', value: '280', label: 'Churned' },
  ];
}
