import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home.component';
import { ContactsComponent } from './pages/contacts.component';
import { DealsComponent } from './pages/deals.component';
import { SettingsComponent } from './pages/settings.component';

export const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'settings', component: SettingsComponent },
];
