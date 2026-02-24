import { ChartPlaceholder } from '../components/ChartPlaceholder';
import styles from './page.module.css';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14.2%', icon: '👁️' },
  { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', icon: '📉' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8.7%', icon: '⏱️' },
  { label: 'New Visitors', value: '8,432', change: '+18.9%', icon: '🆕' },
];

const topPages = [
  { page: '/home', views: '24,521', percentage: 32 },
  { page: '/products', views: '18,432', percentage: 24 },
  { page: '/about', views: '12,841', percentage: 17 },
  { page: '/blog', views: '9,234', percentage: 12 },
  { page: '/contact', views: '6,128', percentage: 8 },
  { page: '/pricing', views: '5,432', percentage: 7 },
];

export default function AnalyticsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Analytics</h1>
        <p>Track your website performance and user engagement.</p>
      </div>

      <div className={styles.kpiGrid}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiIcon}>{m.icon}</span>
              <span className={m.change.startsWith('+') ? styles.kpiChangeUp : styles.kpiChangeDown}>{m.change}</span>
            </div>
            <p className={styles.kpiValue}>{m.value}</p>
            <p className={styles.kpiTitle}>{m.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.chartsGrid}>
        <ChartPlaceholder title="Traffic Sources" type="pie" />
        <ChartPlaceholder title="Visitor Trend" type="line" />
      </div>

      <div className={styles.tableCard}>
        <h3 className={styles.tableTitle}>Top Pages</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Share</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page) => (
                <tr key={page.page}>
                  <td className={styles.orderId}>{page.page}</td>
                  <td>{page.views}</td>
                  <td>{page.percentage}%</td>
                  <td>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${page.percentage}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
