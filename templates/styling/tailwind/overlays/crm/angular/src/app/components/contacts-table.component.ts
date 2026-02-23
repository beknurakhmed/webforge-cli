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
    <div class="overflow-x-auto">
      <table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
        <thead>
          <tr>
            <th class="text-left px-4 py-3 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">Name</th>
            <th class="text-left px-4 py-3 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">Email</th>
            <th class="text-left px-4 py-3 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">Company</th>
            <th class="text-left px-4 py-3 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">Phone</th>
            <th class="text-left px-4 py-3 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          @for (contact of contacts; track contact.id) {
            <tr>
              <td class="px-4 py-3 border-t border-gray-100 text-sm font-semibold text-gray-900">{{ contact.name }}</td>
              <td class="px-4 py-3 border-t border-gray-100 text-sm text-gray-700">{{ contact.email }}</td>
              <td class="px-4 py-3 border-t border-gray-100 text-sm text-gray-700">{{ contact.company }}</td>
              <td class="px-4 py-3 border-t border-gray-100 text-sm text-gray-700">{{ contact.phone }}</td>
              <td class="px-4 py-3 border-t border-gray-100 text-sm">
                <span
                  class="inline-block px-2.5 py-1 rounded-xl text-xs font-medium"
                  [class.bg-emerald-100]="contact.status === 'Customer'"
                  [class.text-emerald-800]="contact.status === 'Customer'"
                  [class.bg-blue-100]="contact.status === 'Lead'"
                  [class.text-blue-800]="contact.status === 'Lead'"
                  [class.bg-amber-100]="contact.status === 'Prospect'"
                  [class.text-amber-800]="contact.status === 'Prospect'"
                  [class.bg-red-100]="contact.status === 'Churned'"
                  [class.text-red-800]="contact.status === 'Churned'"
                >
                  {{ contact.status }}
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
export class ContactsTableComponent {
  @Input() contacts: Contact[] = [];
}
