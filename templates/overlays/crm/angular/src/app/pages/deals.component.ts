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
    <h1 class="page-title">Deals Pipeline</h1>
    <div class="kanban">
      @for (col of columns; track col.name) {
        <div class="kanban-column">
          <div class="column-header">
            <span>{{ col.name }}</span>
            <span class="deal-count">{{ col.deals.length }}</span>
          </div>
          @for (deal of col.deals; track deal.name) {
            <div class="deal-card">
              <div class="deal-name">{{ deal.name }}</div>
              <div class="deal-company">{{ deal.company }}</div>
              <div class="deal-value">{{ deal.value }}</div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .page-title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 24px;
    }

    .kanban {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .kanban-column {
      background: #f3f4f6;
      border-radius: 12px;
      padding: 16px;
      min-height: 400px;
    }

    .column-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-weight: 600;
      color: #111827;
      font-size: 14px;
    }

    .deal-count {
      background: #e5e7eb;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 12px;
      color: #6b7280;
    }

    .deal-card {
      background: #fff;
      border-radius: 8px;
      padding: 14px;
      margin-bottom: 8px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    }

    .deal-name {
      font-weight: 600;
      color: #111827;
      font-size: 14px;
      margin-bottom: 4px;
    }

    .deal-company {
      color: #6b7280;
      font-size: 13px;
      margin-bottom: 8px;
    }

    .deal-value {
      color: #4f46e5;
      font-weight: 700;
      font-size: 14px;
    }

    @media (max-width: 1024px) {
      .kanban {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .kanban {
        grid-template-columns: 1fr;
      }
    }
  `]
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
