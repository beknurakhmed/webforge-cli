import { createRouter } from './router';
import { renderOverview } from './pages/overview';
import { renderAnalytics } from './pages/analytics';
import { renderUsers } from './pages/users';
import { renderSettings } from './pages/settings';
import styles from './style.module.css';

export interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: string;
  trend: 'up' | 'down';
}

export interface Activity {
  user: string;
  action: string;
  time: string;
  avatar: string;
}

export interface UserRecord {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  avatar: string;
  joined: string;
}

export const stats: StatCard[] = [
  { label: 'Total Revenue', value: '$54,230', change: '+12.5%', icon: '💰', trend: 'up' },
  { label: 'Active Users', value: '2,345', change: '+8.1%', icon: '👥', trend: 'up' },
  { label: 'Orders', value: '1,247', change: '+23.4%', icon: '📦', trend: 'up' },
  { label: 'Conversion Rate', value: '3.2%', change: '-1.8%', icon: '📈', trend: 'down' },
];

export const activities: Activity[] = [
  { user: 'Sarah Chen', action: 'completed a purchase of $142.00', time: '2 minutes ago', avatar: '👩' },
  { user: 'Mike Johnson', action: 'signed up for a new account', time: '15 minutes ago', avatar: '👨' },
  { user: 'Emily Davis', action: 'submitted a support ticket', time: '1 hour ago', avatar: '👩‍💼' },
  { user: 'Alex Rivera', action: 'updated their profile settings', time: '2 hours ago', avatar: '🧑' },
  { user: 'Jordan Lee', action: 'left a 5-star review', time: '3 hours ago', avatar: '👨‍💻' },
];

export const users: UserRecord[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@example.com', role: 'Admin', status: 'Active', avatar: '👩', joined: 'Jan 15, 2024' },
  { id: 2, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', status: 'Active', avatar: '👨', joined: 'Feb 3, 2024' },
  { id: 3, name: 'Emily Davis', email: 'emily@example.com', role: 'Viewer', status: 'Inactive', avatar: '👩‍💼', joined: 'Mar 22, 2024' },
  { id: 4, name: 'Alex Rivera', email: 'alex@example.com', role: 'Editor', status: 'Active', avatar: '🧑', joined: 'Apr 10, 2024' },
  { id: 5, name: 'Jordan Lee', email: 'jordan@example.com', role: 'Admin', status: 'Active', avatar: '👨‍💻', joined: 'May 5, 2024' },
  { id: 6, name: 'Taylor Kim', email: 'taylor@example.com', role: 'Viewer', status: 'Inactive', avatar: '🧑‍🎨', joined: 'Jun 18, 2024' },
];

export { styles };

export function withLayout(title: string, content: string): string {
  const hash = window.location.hash.slice(1) || '/';
  return `
    <div class="${styles.dashboardLayout}">
      <aside class="${styles.sidebar}">
        <div class="${styles.sidebarLogo}">📊 {{projectName}}</div>
        <nav class="${styles.sidebarNav}">
          <a href="#/" class="${hash === '/' ? 'active' : ''}">📊 Overview</a>
          <a href="#/analytics" class="${hash === '/analytics' ? 'active' : ''}">📈 Analytics</a>
          <a href="#/users" class="${hash === '/users' ? 'active' : ''}">👥 Users</a>
          <a href="#/settings" class="${hash === '/settings' ? 'active' : ''}">⚙️ Settings</a>
        </nav>
        <div class="${styles.sidebarFooter}">
          <div class="${styles.sidebarUser}">
            <span class="${styles.sidebarUserAvatar}">👤</span>
            <div>
              <div class="${styles.sidebarUserName}">Admin User</div>
              <div class="${styles.sidebarUserEmail}">admin@example.com</div>
            </div>
          </div>
        </div>
      </aside>
      <main class="${styles.dashboardMain}">
        <header class="${styles.dashboardHeader}">
          <h1>${title}</h1>
          <div class="${styles.headerActions}">
            <span class="${styles.headerDate}">📅 ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>
        <div class="${styles.dashboardContent}">
          ${content}
        </div>
      </main>
    </div>
  `;
}

const app = document.querySelector<HTMLElement>('#app')!;

createRouter([
  { path: '/', render: renderOverview },
  { path: '/analytics', render: renderAnalytics },
  { path: '/users', render: renderUsers },
  { path: '/settings', render: renderSettings },
], app);
