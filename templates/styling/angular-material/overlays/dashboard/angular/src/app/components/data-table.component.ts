import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

interface OrderItem {
  id: number;
  customer: string;
  amount: string;
  status: 'Completed' | 'Shipped' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatCardModule],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>Recent Orders</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="orders" class="orders-table">
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef>Order</th>
            <td mat-cell *matCellDef="let order">#{{ order.id }}</td>
          </ng-container>

          <ng-container matColumnDef="customer">
            <th mat-header-cell *matHeaderCellDef>Customer</th>
            <td mat-cell *matCellDef="let order">{{ order.customer }}</td>
          </ng-container>

          <ng-container matColumnDef="amount">
            <th mat-header-cell *matHeaderCellDef>Amount</th>
            <td mat-cell *matCellDef="let order">{{ order.amount }}</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let order">
              <mat-chip [class]="order.status.toLowerCase()">
                {{ order.status }}
              </mat-chip>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .orders-table { width: 100%; }
    .completed { background: #e8f5e9 !important; color: #2e7d32 !important; }
    .pending { background: #fff8e1 !important; color: #f57f17 !important; }
    .shipped { background: #e3f2fd !important; color: #1565c0 !important; }
    .cancelled { background: #ffebee !important; color: #c62828 !important; }
  `]
})
export class DataTableComponent {
  displayedColumns: string[] = ['id', 'customer', 'amount', 'status'];

  orders: OrderItem[] = [
    { id: 1041, customer: 'Alice Johnson', amount: '$125.00', status: 'Completed' },
    { id: 1040, customer: 'Bob Smith', amount: '$89.50', status: 'Shipped' },
    { id: 1039, customer: 'Carol Davis', amount: '$245.00', status: 'Pending' },
    { id: 1038, customer: 'Dan Wilson', amount: '$67.25', status: 'Completed' },
    { id: 1037, customer: 'Eve Martinez', amount: '$312.00', status: 'Cancelled' },
  ];
}
