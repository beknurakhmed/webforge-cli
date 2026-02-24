import styles from './ChartPlaceholder.module.css';

interface ChartPlaceholderProps {
  title: string;
  data?: number[];
}

export function ChartPlaceholder({ title, data }: ChartPlaceholderProps) {
  const bars = data || [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

  return (
    <div className={styles.chartCard}>
      <h3>{title}</h3>
      <div className={styles.chartPlaceholder}>
        <div className={styles.chartBars}>
          {bars.map((h, i) => (
            <div key={i} className={styles.chartBar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
