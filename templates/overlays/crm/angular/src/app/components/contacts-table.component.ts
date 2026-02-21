import { Component, Input } from '@angular/core';

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
  template: `
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          @for (contact of contacts; track contact.id) {
            <tr>
              <td class="name-cell">{{ contact.name }}</td>
              <td>{{ contact.email }}</td>
              <td>{{ contact.company }}</td>
              <td>{{ contact.phone }}</td>
              <td>
                <span class="badge" [class]="contact.status.toLowerCase()">
                  {{ contact.status }}
                </span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .table-wrapper {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    th {
      text-align: left;
      padding: 12px 16px;
      background: #f9fafb;
      color: #6b7280;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    td {
      padding: 12px 16px;
      border-top: 1px solid #f3f4f6;
      font-size: 14px;
      color: #374151;
    }

    .name-cell {
      font-weight: 600;
      color: #111827;
    }

    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
    }

    .customer { background: #d1fae5; color: #065f46; }
    .lead { background: #dbeafe; color: #1e40af; }
    .prospect { background: #fef3c7; color: #92400e; }
    .churned { background: #fee2e2; color: #991b1b; }
  `]
})
export class ContactsTableComponent {
  @Input() contacts: Contact[] = [];
}
