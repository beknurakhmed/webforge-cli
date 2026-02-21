import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsTableComponent } from '../components/contacts-table.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, ContactsTableComponent],
  template: `
    <h1 class="page-title">Contacts</h1>
    <div class="toolbar">
      <input
        class="search-input"
        [(ngModel)]="search"
        placeholder="Search contacts..."
      />
    </div>
    <app-contacts-table [contacts]="filtered" />
  `,
  styles: [`
    .page-title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 24px;
    }

    .toolbar {
      margin-bottom: 16px;
    }

    .search-input {
      padding: 10px 16px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      width: 320px;
      font-size: 14px;
      outline: none;
    }

    .search-input:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
  `]
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
