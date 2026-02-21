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
    <div class="kpi-grid">
      @for (kpi of kpis; track kpi.label) {
        <div class="kpi-grid-card">
          <span class="kpi-grid-icon">{{ kpi.icon }}</span>
          <div class="kpi-grid-info">
            <p class="kpi-grid-label">{{ kpi.label }}</p>
            <p class="kpi-grid-value">{{ kpi.value }}</p>
            <p
              class="kpi-grid-change"
              [class.positive]="kpi.positive"
              [class.negative]="!kpi.positive"
            >
              {{ kpi.change }}
            </p>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .kpi-grid-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.25rem;
      border: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .kpi-grid-icon {
      font-size: 2rem;
    }

    .kpi-grid-label {
      font-size: 0.8rem;
      color: #6b7280;
      text-transform: uppercase;
      font-weight: 600;
    }

    .kpi-grid-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #111827;
    }

    .kpi-grid-change {
      font-size: 0.8rem;
      font-weight: 600;
    }

    .positive {
      color: #059669;
    }

    .negative {
      color: #dc2626;
    }

    @media (max-width: 768px) {
      .kpi-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
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
