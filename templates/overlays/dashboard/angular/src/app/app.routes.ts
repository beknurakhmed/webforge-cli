import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview.component';
import { AnalyticsComponent } from './pages/analytics.component';
import { UsersComponent } from './pages/users.component';
import { SettingsComponent } from './pages/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
