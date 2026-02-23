import { createRouter } from './router';
import { renderOverview } from './pages/overview';
import { renderAnalytics } from './pages/analytics';
import { renderUsers } from './pages/users';
import { renderSettings } from './pages/settings';
import './style.css';

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

export function withLayout(title: string, content: string): string {
  const hash = window.location.hash.slice(1) || '/';
  return `
    <div class="flex min-h-screen">
      <aside class="w-[260px] bg-gray-900 text-white flex flex-col fixed top-0 left-0 bottom-0 z-50">
        <div class="p-6 text-xl font-bold border-b border-gray-800">📊 {{projectName}}</div>
        <nav class="py-4 flex-1">
          <a href="#/" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">📊 Overview</a>
          <a href="#/analytics" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/analytics' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">📈 Analytics</a>
          <a href="#/users" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/users' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">👥 Users</a>
          <a href="#/settings" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/settings' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">⚙️ Settings</a>
        </nav>
        <div class="p-4 px-6 border-t border-gray-800">
          <div class="flex items-center gap-3">
            <span class="text-2xl">👤</span>
            <div>
              <div class="text-sm font-semibold">Admin User</div>
              <div class="text-xs text-gray-400">admin@example.com</div>
            </div>
          </div>
        </div>
      </aside>
      <main class="flex-1 ml-[260px]">
        <header class="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center sticky top-0 z-40">
          <h1 class="text-2xl font-bold text-gray-900">${title}</h1>
          <div>
            <span class="text-gray-500 text-sm">📅 ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>
        <div class="p-8">
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
