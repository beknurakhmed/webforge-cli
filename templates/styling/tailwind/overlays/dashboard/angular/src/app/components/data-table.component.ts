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
    <div class="bg-white rounded-xl p-5 border border-gray-200">
      <h3 class="text-base font-semibold text-gray-900 mb-4">Recent Orders</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Order</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Customer</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Amount</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          @for (order of orders; track order.id) {
            <tr>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">#{{ order.id }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">{{ order.customer }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">{{ order.amount }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-semibold"
                  [class.bg-emerald-100]="order.status === 'Completed'"
                  [class.text-emerald-600]="order.status === 'Completed'"
                  [class.bg-amber-100]="order.status === 'Pending'"
                  [class.text-amber-600]="order.status === 'Pending'"
                  [class.bg-blue-100]="order.status === 'Shipped'"
                  [class.text-blue-600]="order.status === 'Shipped'"
                  [class.bg-red-100]="order.status === 'Cancelled'"
                  [class.text-red-600]="order.status === 'Cancelled'"
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
  styles: []
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
