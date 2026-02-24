import { createRouter } from './router';
import { renderDashboardHome } from './pages/dashboard-home';
import { renderContacts } from './pages/contacts';
import { renderDeals } from './pages/deals';
import { renderSettings } from './pages/settings';
import styles from './style.module.css';

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

export { styles };

export function getStageClass(stage: string): string {
  const map: Record<string, string> = {
    'Discovery': styles.stageDiscovery,
    'Proposal': styles.stageProposal,
    'Negotiation': styles.stageNegotiation,
    'Closed Won': styles.stageClosedWon,
    'Closed Lost': styles.stageClosedLost,
  };
  return map[stage] || '';
}

export function getStatusClass(status: string): string {
  const map: Record<string, string> = {
    'Lead': styles.statusLead,
    'Prospect': styles.statusProspect,
    'Customer': styles.statusCustomer,
    'Churned': styles.statusChurned,
  };
  return map[status] || '';
}

export function withLayout(title: string, content: string): string {
  const hash = window.location.hash.slice(1) || '/';
  return `
    <div class="${styles.crmLayout}">
      <aside class="${styles.sidebar}">
        <div class="${styles.sidebarLogo}">💼 {{projectName}}</div>
        <nav class="${styles.sidebarNav}">
          <a href="#/" class="${hash === '/' ? 'active' : ''}">📊 Dashboard</a>
          <a href="#/contacts" class="${hash === '/contacts' ? 'active' : ''}">👤 Contacts</a>
          <a href="#/deals" class="${hash === '/deals' ? 'active' : ''}">💼 Deals</a>
          <a href="#/settings" class="${hash === '/settings' ? 'active' : ''}">⚙️ Settings</a>
        </nav>
        <div class="${styles.sidebarFooter}">
          <div class="${styles.sidebarUser}">
            <span class="${styles.sidebarUserAvatar}">👤</span>
            <div>
              <div class="${styles.sidebarUserName}">Sales Manager</div>
              <div class="${styles.sidebarUserEmail}">manager@crm.com</div>
            </div>
          </div>
        </div>
      </aside>
      <main class="${styles.crmMain}">
        <header class="${styles.crmHeader}">
          <h1>${title}</h1>
          <div class="${styles.headerActions}">
            <span class="${styles.headerDate}">📅 ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>
        <div class="${styles.crmContent}">
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
