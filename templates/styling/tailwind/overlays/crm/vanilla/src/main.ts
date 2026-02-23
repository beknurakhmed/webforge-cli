import { createRouter } from './router';
import { renderDashboardHome } from './pages/dashboard-home';
import { renderContacts } from './pages/contacts';
import { renderDeals } from './pages/deals';
import { renderSettings } from './pages/settings';
import './style.css';

export interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Churned';
  avatar: string;
  lastContact: string;
}

export interface Deal {
  id: number;
  title: string;
  company: string;
  value: number;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  probability: number;
  contact: string;
  closeDate: string;
}

export const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp', phone: '(555) 123-4567', status: 'Customer', avatar: '👩', lastContact: '2 days ago' },
  { id: 2, name: 'Mike Johnson', email: 'mike@innovate.io', company: 'Innovate.io', phone: '(555) 234-5678', status: 'Prospect', avatar: '👨', lastContact: '1 week ago' },
  { id: 3, name: 'Emily Davis', email: 'emily@globalsoft.com', company: 'GlobalSoft', phone: '(555) 345-6789', status: 'Lead', avatar: '👩‍💼', lastContact: '3 days ago' },
  { id: 4, name: 'Alex Rivera', email: 'alex@startupco.com', company: 'StartupCo', phone: '(555) 456-7890', status: 'Customer', avatar: '🧑', lastContact: '1 day ago' },
  { id: 5, name: 'Jordan Lee', email: 'jordan@enterprise.com', company: 'Enterprise Inc', phone: '(555) 567-8901', status: 'Prospect', avatar: '👨‍💻', lastContact: '5 days ago' },
  { id: 6, name: 'Taylor Kim', email: 'taylor@designhub.com', company: 'DesignHub', phone: '(555) 678-9012', status: 'Lead', avatar: '🧑‍🎨', lastContact: '2 weeks ago' },
  { id: 7, name: 'Morgan Blake', email: 'morgan@cloudbase.io', company: 'CloudBase', phone: '(555) 789-0123', status: 'Churned', avatar: '👩‍🔬', lastContact: '1 month ago' },
  { id: 8, name: 'Casey Park', email: 'casey@dataflow.co', company: 'DataFlow', phone: '(555) 890-1234', status: 'Customer', avatar: '🧑‍💼', lastContact: '3 days ago' },
];

export const deals: Deal[] = [
  { id: 1, title: 'Enterprise License', company: 'TechCorp', value: 45000, stage: 'Negotiation', probability: 75, contact: 'Sarah Chen', closeDate: 'Mar 15, 2024' },
  { id: 2, title: 'SaaS Implementation', company: 'Innovate.io', value: 28000, stage: 'Proposal', probability: 50, contact: 'Mike Johnson', closeDate: 'Apr 1, 2024' },
  { id: 3, title: 'Consulting Package', company: 'GlobalSoft', value: 15000, stage: 'Discovery', probability: 25, contact: 'Emily Davis', closeDate: 'May 10, 2024' },
  { id: 4, title: 'Annual Renewal', company: 'StartupCo', value: 12000, stage: 'Closed Won', probability: 100, contact: 'Alex Rivera', closeDate: 'Feb 28, 2024' },
  { id: 5, title: 'Platform Migration', company: 'Enterprise Inc', value: 67000, stage: 'Proposal', probability: 40, contact: 'Jordan Lee', closeDate: 'Jun 15, 2024' },
  { id: 6, title: 'Custom Integration', company: 'CloudBase', value: 22000, stage: 'Closed Lost', probability: 0, contact: 'Morgan Blake', closeDate: 'Feb 10, 2024' },
  { id: 7, title: 'Support Contract', company: 'DataFlow', value: 8500, stage: 'Negotiation', probability: 80, contact: 'Casey Park', closeDate: 'Mar 30, 2024' },
];

export function withLayout(title: string, content: string): string {
  const hash = window.location.hash.slice(1) || '/';
  return `
    <div class="flex min-h-screen">
      <aside class="w-[260px] bg-gray-900 text-white flex flex-col fixed top-0 left-0 bottom-0 z-50">
        <div class="p-6 text-xl font-bold border-b border-gray-800">💼 {{projectName}}</div>
        <nav class="py-4 flex-1">
          <a href="#/" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">📊 Dashboard</a>
          <a href="#/contacts" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/contacts' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">👤 Contacts</a>
          <a href="#/deals" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/deals' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">💼 Deals</a>
          <a href="#/settings" class="flex items-center gap-3 px-6 py-3 font-medium transition-all ${hash === '/settings' ? 'text-white bg-indigo-600 border-r-[3px] border-indigo-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}">⚙️ Settings</a>
        </nav>
        <div class="p-4 px-6 border-t border-gray-800">
          <div class="flex items-center gap-3">
            <span class="text-2xl">👤</span>
            <div>
              <div class="text-sm font-semibold">Sales Manager</div>
              <div class="text-xs text-gray-400">manager@crm.com</div>
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
  { path: '/', render: renderDashboardHome },
  { path: '/contacts', render: renderContacts },
  { path: '/deals', render: renderDeals },
  { path: '/settings', render: renderSettings },
], app);
