import { contacts } from '../data/contacts';

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: '#4f46e5' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: '#f59e0b' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: '#10b981' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: '#ef4444' },
];

function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card">
          <div className="stat-indicator" style={{ background: stat.color }} />
          <span className="stat-label">{stat.label}</span>
          <div className="stat-value">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
