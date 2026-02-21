import { Component } from '@angular/core';

interface OrderItem {
  id: number;
  customer: string;
  amount: string;
  status: 'Completed' | 'Shipped' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  template: `
    <div class="orders-table-card">
      <h3 class="orders-table-title">Recent Orders</h3>
      <table class="orders-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          @for (order of orders; track order.id) {
            <tr>
              <td>#{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.amount }}</td>
              <td>
                <span
                  class="orders-table-badge"
                  [class]="order.status.toLowerCase()"
                >
                  {{ order.status }}
                </span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .orders-table-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.25rem;
      border: 1px solid #e5e7eb;
    }

    .orders-table-title {
      font-size: 1rem;
      color: #111827;
      margin-bottom: 1rem;
    }

    .orders-table {
      width: 100%;
      border-collapse: collapse;
    }

    .orders-table th {
      text-align: left;
      padding: 0.6rem;
      font-size: 0.75rem;
      color: #6b7280;
      text-transform: uppercase;
      border-bottom: 2px solid #e5e7eb;
    }

    .orders-table td {
      padding: 0.75rem 0.6rem;
      border-bottom: 1px solid #f3f4f6;
      font-size: 0.875rem;
    }

    .orders-table-badge {
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .completed {
      background: #d1fae5;
      color: #059669;
    }

    .pending {
      background: #fef3c7;
      color: #d97706;
    }

    .shipped {
      background: #dbeafe;
      color: #2563eb;
    }

    .cancelled {
      background: #fee2e2;
      color: #dc2626;
    }
  `]
})
export class DataTableComponent {
  orders: OrderItem[] = [
    {
      id: 1041,
      customer: 'Alice Johnson',
      amount: '$125.00',
      status: 'Completed',
    },
    {
      id: 1040,
      customer: 'Bob Smith',
      amount: '$89.50',
      status: 'Shipped',
    },
    {
      id: 1039,
      customer: 'Carol Davis',
      amount: '$245.00',
      status: 'Pending',
    },
    {
      id: 1038,
      customer: 'Dan Wilson',
      amount: '$67.25',
      status: 'Completed',
    },
    {
      id: 1037,
      customer: 'Eve Martinez',
      amount: '$312.00',
      status: 'Cancelled',
    },
  ];
}
