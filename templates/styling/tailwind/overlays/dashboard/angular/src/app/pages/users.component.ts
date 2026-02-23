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
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Users</h1>
    <div class="bg-white rounded-xl p-5 border border-gray-200">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Avatar</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Name</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Email</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Role</th>
            <th class="text-left px-3 py-2 text-xs text-gray-500 uppercase font-semibold border-b-2 border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          @for (user of users; track user.email) {
            <tr>
              <td class="px-3 py-3 border-b border-gray-100 text-2xl">{{ user.avatar }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">{{ user.name }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm text-gray-500">{{ user.email }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">{{ user.role }}</td>
              <td class="px-3 py-3 border-b border-gray-100 text-sm">
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-semibold"
                  [class.bg-emerald-100]="user.status === 'Active'"
                  [class.text-emerald-600]="user.status === 'Active'"
                  [class.bg-red-100]="user.status === 'Inactive'"
                  [class.text-red-600]="user.status === 'Inactive'"
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
  styles: []
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
