import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsTableComponent } from '../components/contacts-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, ContactsTableComponent, MatFormFieldModule, MatInputModule, MatIconModule],
  template: `
    <h1 class="page-title">Contacts</h1>
    <div class="toolbar">
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>Search contacts</mat-label>
        <input matInput [(ngModel)]="search" placeholder="Search contacts..." />
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
    </div>
    <app-contacts-table [contacts]="filtered" />
  `,
  styles: [`
    .page-title { font-size: 1.5rem; font-weight: 700; color: #212121; margin-bottom: 24px; }
    .toolbar { margin-bottom: 16px; }
    .search-field { width: 320px; }
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
