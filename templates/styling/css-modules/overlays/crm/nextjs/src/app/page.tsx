import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';
import styles from './page.module.css';

const recentActivities = [
  { action: 'New deal created', detail: 'TechCorp Inc. - Enterprise Plan', time: '2 hours ago', icon: '💼' },
  { action: 'Contact updated', detail: 'Sarah Chen - Status changed to Customer', time: '4 hours ago', icon: '👤' },
  { action: 'Deal closed', detail: 'GlobalNet Ltd. - Premium Package', time: '1 day ago', icon: '🎉' },
  { action: 'New contact added', detail: 'Emily Brown - StartupXYZ', time: '1 day ago', icon: '➕' },
  { action: 'Meeting scheduled', detail: 'James Wilson - Product Demo', time: '2 days ago', icon: '📅' },
];

export default function CRMDashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Dashboard</h1>
        <p>Welcome back! Here is your sales overview.</p>
      </div>

      <StatsCards />

      <div className={styles.dashboardGrid}>
        <ContactsTable limit={4} />

        <div className={styles.activityCard}>
          <h3 className={styles.activityTitle}>Recent Activity</h3>
          <div className={styles.activityList}>
            {recentActivities.map((activity, i) => (
              <div key={i} className={styles.activityItem}>
                <span className={styles.activityIcon}>{activity.icon}</span>
                <div>
                  <p className={styles.activityAction}>{activity.action}</p>
                  <p className={styles.activityDetail}>{activity.detail}</p>
                  <p className={styles.activityTime}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
