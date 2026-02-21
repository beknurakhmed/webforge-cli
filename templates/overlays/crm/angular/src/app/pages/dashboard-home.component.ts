import { Component } from '@angular/core';
import { StatsCardsComponent } from '../components/stats-cards.component';
import { ContactsTableComponent } from '../components/contacts-table.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [StatsCardsComponent, ContactsTableComponent],
  template: `
    <h1 class="page-title">Dashboard</h1>
    <app-stats-cards />
    <h2 class="section-title">Recent Contacts</h2>
    <app-contacts-table [contacts]="recentContacts" />
  `,
  styles: [`
    .page-title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 24px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #111827;
      margin: 24px 0 12px;
    }
  `]
})
export class DashboardHomeComponent {
  recentContacts = [
    { id: 1, name: 'John Smith', email: 'john@acme.com', company: 'Acme Corp', status: 'Customer', phone: '+1-555-0101' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@globex.com', company: 'Globex Inc', status: 'Lead', phone: '+1-555-0102' },
    { id: 3, name: 'Mike Brown', email: 'mike@initech.com', company: 'Initech', status: 'Prospect', phone: '+1-555-0103' },
    { id: 4, name: 'Emily Davis', email: 'emily@umbrella.com', company: 'Umbrella Co', status: 'Customer', phone: '+1-555-0104' },
  ];
}
