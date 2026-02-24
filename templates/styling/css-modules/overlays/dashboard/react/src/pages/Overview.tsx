import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';
import styles from './Overview.module.css';

export function Overview() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>Dashboard</h1>
        <div className={styles.headerActions}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <div className={styles.userAvatar}>B</div>
        </div>
      </div>
      <KPICards />
      <div className={styles.dashboardGrid}>
        <ChartPlaceholder title="Revenue Overview" />
        <ChartPlaceholder title="User Growth" />
      </div>
      <DataTable />
    </div>
  );
}
