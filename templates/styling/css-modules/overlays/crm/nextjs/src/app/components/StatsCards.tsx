import styles from './StatsCards.module.css';

interface Stat {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const stats: Stat[] = [
  { title: 'Total Contacts', value: '1,248', change: '+12.5%', trend: 'up', icon: '👥' },
  { title: 'Active Deals', value: '42', change: '+8.3%', trend: 'up', icon: '💼' },
  { title: 'Revenue Pipeline', value: '$284,500', change: '+23.1%', trend: 'up', icon: '💰' },
  { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', trend: 'down', icon: '📈' },
];

export function StatsCards() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat) => (
        <div key={stat.title} className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>{stat.icon}</span>
            <span className={stat.trend === 'up' ? styles.statChangeUp : styles.statChangeDown}>{stat.change}</span>
          </div>
          <p className={styles.statValue}>{stat.value}</p>
          <p className={styles.statTitle}>{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
