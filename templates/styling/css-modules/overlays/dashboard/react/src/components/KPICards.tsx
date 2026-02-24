import styles from './KPICards.module.css';

const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export function KPICards() {
  return (
    <div className={styles.kpiGrid}>
      {kpis.map((kpi, i) => (
        <div key={i} className={styles.kpiCard}>
          <span className={styles.kpiLabel}>{kpi.label}</span>
          <div className={styles.kpiValue}>{kpi.value}</div>
          <span className={`${styles.kpiChange} ${kpi.positive ? styles.positive : styles.negative}`}>
            {kpi.change} from last month
          </span>
        </div>
      ))}
    </div>
  );
}
