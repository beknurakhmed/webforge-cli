import { contacts } from '../data/contacts';
import styles from './StatsCards.module.css';

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: '#4f46e5' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: '#f59e0b' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: '#10b981' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: '#ef4444' },
];

function StatsCards() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.statCard}>
          <div className={styles.statIndicator} style={{ background: stat.color }} />
          <span className={styles.statLabel}>{stat.label}</span>
          <div className={styles.statValue}>{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
