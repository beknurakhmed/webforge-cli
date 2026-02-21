import { Component } from '@angular/core';

interface UserItem {
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <h1 class="users-heading">Users</h1>
    <div class="users-table-card">
      <table class="users-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          @for (user of users; track user.email) {
            <tr>
              <td class="users-table-avatar">{{ user.avatar }}</td>
              <td>{{ user.name }}</td>
              <td class="users-table-email">{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td>
                <span
                  class="users-table-badge"
                  [class]="user.status.toLowerCase()"
                >
                  {{ user.status }}
                </span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .users-heading {
      font-size: 1.5rem;
      color: #111827;
      margin-bottom: 1.5rem;
    }

    .users-table-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.25rem;
      border: 1px solid #e5e7eb;
    }

    .users-table {
      width: 100%;
      border-collapse: collapse;
    }

    .users-table th {
      text-align: left;
      padding: 0.6rem;
      font-size: 0.75rem;
      color: #6b7280;
      text-transform: uppercase;
      border-bottom: 2px solid #e5e7eb;
    }

    .users-table td {
      padding: 0.75rem 0.6rem;
      border-bottom: 1px solid #f3f4f6;
      font-size: 0.875rem;
    }

    .users-table-avatar {
      font-size: 1.5rem;
    }

    .users-table-email {
      color: #6b7280;
    }

    .users-table-badge {
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .active {
      background: #d1fae5;
      color: #059669;
    }

    .inactive {
      background: #fee2e2;
      color: #dc2626;
    }
  `]
})
export class UsersComponent {
  users: UserItem[] = [
    {
      avatar: '👩‍💼',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      avatar: '👨‍💻',
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'Active',
    },
    {
      avatar: '👩‍🎨',
      name: 'Carol Davis',
      email: 'carol@example.com',
      role: 'Viewer',
      status: 'Inactive',
    },
    {
      avatar: '👨‍🔧',
      name: 'Dan Wilson',
      email: 'dan@example.com',
      role: 'Editor',
      status: 'Active',
    },
    {
      avatar: '👩‍🔬',
      name: 'Eve Martinez',
      email: 'eve@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      avatar: '👨‍🏫',
      name: 'Frank Lee',
      email: 'frank@example.com',
      role: 'Viewer',
      status: 'Inactive',
    },
  ];
}
