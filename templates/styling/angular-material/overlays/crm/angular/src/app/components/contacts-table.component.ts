import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  status: string;
  phone: string;
}

@Component({
  selector: 'app-contacts-table',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatCardModule],
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>
        <table mat-table [dataSource]="contacts" class="contacts-table">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let contact" class="name-cell">{{ contact.name }}</td>
          </ng-container>

          <ng-container matColumnDef="email">
            <th mat-header-cell *matHeaderCellDef>Email</th>
            <td mat-cell *matCellDef="let contact">{{ contact.email }}</td>
          </ng-container>

          <ng-container matColumnDef="company">
            <th mat-header-cell *matHeaderCellDef>Company</th>
            <td mat-cell *matCellDef="let contact">{{ contact.company }}</td>
          </ng-container>

          <ng-container matColumnDef="phone">
            <th mat-header-cell *matHeaderCellDef>Phone</th>
            <td mat-cell *matCellDef="let contact">{{ contact.phone }}</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let contact">
              <mat-chip [class]="contact.status.toLowerCase()">
                {{ contact.status }}
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
    .contacts-table { width: 100%; }
    .name-cell { font-weight: 600; }
    .customer { background: #e8f5e9 !important; color: #2e7d32 !important; }
    .lead { background: #e3f2fd !important; color: #1565c0 !important; }
    .prospect { background: #fff8e1 !important; color: #f57f17 !important; }
    .churned { background: #ffebee !important; color: #c62828 !important; }
  `]
})
export class ContactsTableComponent {
  @Input() contacts: Contact[] = [];
  displayedColumns: string[] = ['name', 'email', 'company', 'phone', 'status'];
}
