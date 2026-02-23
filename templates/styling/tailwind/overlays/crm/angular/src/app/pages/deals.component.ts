import { Component } from '@angular/core';

interface Deal {
  name: string;
  company: string;
  value: string;
}

interface PipelineColumn {
  name: string;
  deals: Deal[];
}

@Component({
  selector: 'app-deals',
  standalone: true,
  template: `
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Deals Pipeline</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      @for (col of columns; track col.name) {
        <div class="bg-gray-100 rounded-xl p-4 min-h-[400px]">
          <div class="flex justify-between items-center mb-3">
            <span class="text-sm font-semibold text-gray-900">{{ col.name }}</span>
            <span class="bg-gray-200 px-2 py-0.5 rounded-full text-xs text-gray-500">{{ col.deals.length }}</span>
          </div>
          @for (deal of col.deals; track deal.name) {
            <div class="bg-white rounded-lg p-3.5 mb-2 shadow-sm">
              <div class="font-semibold text-gray-900 text-sm mb-1">{{ deal.name }}</div>
              <div class="text-gray-500 text-sm mb-2">{{ deal.company }}</div>
              <div class="text-indigo-600 font-bold text-sm">{{ deal.value }}</div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: []
})
export class DealsComponent {
  columns: PipelineColumn[] = [
    {
      name: 'Prospect',
      deals: [
        { name: 'Website Redesign', company: 'Acme Corp', value: '$12,000' },
        { name: 'Mobile App', company: 'Globex Inc', value: '$28,000' },
      ],
    },
    {
      name: 'Qualified',
      deals: [
        { name: 'CRM Integration', company: 'Initech', value: '$18,500' },
      ],
    },
    {
      name: 'Proposal',
      deals: [
        { name: 'Cloud Migration', company: 'Umbrella Co', value: '$45,000' },
        { name: 'API Development', company: 'Stark Industries', value: '$22,000' },
      ],
    },
    {
      name: 'Won',
      deals: [
        { name: 'SEO Campaign', company: 'Wayne Enterprises', value: '$8,500' },
      ],
    },
  ];
}
