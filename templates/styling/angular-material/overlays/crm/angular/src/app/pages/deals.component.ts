import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Deal {
  name: string;
  company: string;
  value: string;
}

interface PipelineColumn {
  name: string;
  icon: string;
  deals: Deal[];
}

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  template: `
    <h1 class="page-title">Deals Pipeline</h1>
    <div class="kanban">
      @for (col of columns; track col.name) {
        <div class="kanban-column">
          <div class="column-header">
            <mat-icon class="column-icon">{{ col.icon }}</mat-icon>
            <span>{{ col.name }}</span>
            <mat-chip class="deal-count">{{ col.deals.length }}</mat-chip>
          </div>
          @for (deal of col.deals; track deal.name) {
            <mat-card appearance="outlined" class="deal-card">
              <mat-card-content>
                <div class="deal-name">{{ deal.name }}</div>
                <div class="deal-company">{{ deal.company }}</div>
                <div class="deal-value">{{ deal.value }}</div>
              </mat-card-content>
            </mat-card>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .page-title { font-size: 1.5rem; font-weight: 700; color: #212121; margin-bottom: 24px; }
    .kanban { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .kanban-column { background: #f5f5f5; border-radius: 12px; padding: 16px; min-height: 400px; }
    .column-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-weight: 600; color: #212121; font-size: 14px; }
    .column-icon { font-size: 20px; width: 20px; height: 20px; color: #3f51b5; }
    .deal-count { min-height: 24px; font-size: 12px; }
    .deal-card { margin-bottom: 8px; }
    .deal-name { font-weight: 600; color: #212121; font-size: 14px; margin-bottom: 4px; }
    .deal-company { color: #666; font-size: 13px; margin-bottom: 8px; }
    .deal-value { color: #3f51b5; font-weight: 700; font-size: 14px; }
    @media (max-width: 1024px) { .kanban { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .kanban { grid-template-columns: 1fr; } }
  `]
})
export class DealsComponent {
  columns: PipelineColumn[] = [
    {
      name: 'Prospect',
      icon: 'person_search',
      deals: [
        { name: 'Website Redesign', company: 'Acme Corp', value: '$12,000' },
        { name: 'Mobile App', company: 'Globex Inc', value: '$28,000' },
      ],
    },
    {
      name: 'Qualified',
      icon: 'verified',
      deals: [
        { name: 'CRM Integration', company: 'Initech', value: '$18,500' },
      ],
    },
    {
      name: 'Proposal',
      icon: 'description',
      deals: [
        { name: 'Cloud Migration', company: 'Umbrella Co', value: '$45,000' },
        { name: 'API Development', company: 'Stark Industries', value: '$22,000' },
      ],
    },
    {
      name: 'Won',
      icon: 'emoji_events',
      deals: [
        { name: 'SEO Campaign', company: 'Wayne Enterprises', value: '$8,500' },
      ],
    },
  ];
}
