import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsTableComponent } from '../components/contacts-table.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, ContactsTableComponent],
  template: `
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Contacts</h1>
    <div class="mb-4">
      <input
        class="px-4 py-2.5 border border-gray-300 rounded-lg w-80 text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all"
        [(ngModel)]="search"
        placeholder="Search contacts..."
      />
    </div>
    <app-contacts-table [contacts]="filtered" />
  `,
  styles: []
})
export class ContactsComponent {
  search = '';

  contacts = [
    { id: 1, name: 'John Smith', email: 'john@acme.com', company: 'Acme Corp', status: 'Customer', phone: '+1-555-0101' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@globex.com', company: 'Globex Inc', status: 'Lead', phone: '+1-555-0102' },
    { id: 3, name: 'Mike Brown', email: 'mike@initech.com', company: 'Initech', status: 'Prospect', phone: '+1-555-0103' },
    { id: 4, name: 'Emily Davis', email: 'emily@umbrella.com', company: 'Umbrella Co', status: 'Customer', phone: '+1-555-0104' },
    { id: 5, name: 'James Wilson', email: 'james@stark.com', company: 'Stark Industries', status: 'Lead', phone: '+1-555-0105' },
    { id: 6, name: 'Lisa Anderson', email: 'lisa@wayne.com', company: 'Wayne Enterprises', status: 'Churned', phone: '+1-555-0106' },
  ];

  get filtered() {
    if (!this.search) return this.contacts;

    const query = this.search.toLowerCase();
    return this.contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.email.toLowerCase().includes(query) ||
        c.company.toLowerCase().includes(query)
    );
  }
}
