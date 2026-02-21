import { ChartPlaceholder } from '../components/ChartPlaceholder';

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
    <div className="page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Track your website performance and user engagement.</p>
      </div>

      <div className="kpi-grid">
        {metrics.map((m) => (
          <div key={m.label} className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-icon">{m.icon}</span>
              <span className={`kpi-change ${m.change.startsWith('+') ? 'up' : 'down'}`}>{m.change}</span>
            </div>
            <p className="kpi-value">{m.value}</p>
            <p className="kpi-title">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <ChartPlaceholder title="Traffic Sources" type="pie" />
        <ChartPlaceholder title="Visitor Trend" type="line" />
      </div>

      <div className="table-card">
        <h3 className="table-title">Top Pages</h3>
        <div className="table-wrapper">
          <table className="data-table">
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
                  <td className="order-id">{page.page}</td>
                  <td>{page.views}</td>
                  <td>{page.percentage}%</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${page.percentage}%` }} />
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
