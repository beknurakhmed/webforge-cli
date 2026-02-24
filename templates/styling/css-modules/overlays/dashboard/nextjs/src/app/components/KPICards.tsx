import styles from './KPICards.module.css';

interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const kpis: KPI[] = [
  { title: 'Total Revenue', value: '$48,250', change: '+12.5%', trend: 'up', icon: '💰' },
  { title: 'Active Users', value: '2,340', change: '+8.1%', trend: 'up', icon: '👥' },
  { title: 'Orders', value: '1,120', change: '+23.4%', trend: 'up', icon: '📦' },
  { title: 'Conversion Rate', value: '3.2%', change: '-1.8%', trend: 'down', icon: '📈' },
];

export function KPICards() {
  return (
    <div className={styles.kpiGrid}>
      {kpis.map((kpi) => (
        <div key={kpi.title} className={styles.kpiCard}>
          <div className={styles.kpiHeader}>
            <span className={styles.kpiIcon}>{kpi.icon}</span>
            <span className={kpi.trend === 'up' ? styles.kpiChangeUp : styles.kpiChangeDown}>{kpi.change}</span>
          </div>
          <p className={styles.kpiValue}>{kpi.value}</p>
          <p className={styles.kpiTitle}>{kpi.title}</p>
        </div>
      ))}
    </div>
  );
}
