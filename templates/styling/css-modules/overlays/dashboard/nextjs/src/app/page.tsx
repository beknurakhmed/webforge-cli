import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';
import styles from './page.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Overview</h1>
        <p>Welcome back! Here is what is happening with your business.</p>
      </div>
      <KPICards />
      <div className={styles.chartsGrid}>
        <ChartPlaceholder title="Revenue Over Time" type="bar" />
        <ChartPlaceholder title="Growth Trend" type="line" />
      </div>
      <DataTable title="Recent Orders" limit={5} />
    </div>
  );
}
