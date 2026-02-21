import { ChartPlaceholder } from '../components/ChartPlaceholder';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14%' },
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8%' },
  { label: 'Conversions', value: '1,847', change: '+5.3%' },
];

export function Analytics() {
  return (
    <div className="page-analytics">
      <h1>Analytics</h1>
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <span className="metric-label">{m.label}</span>
            <div className="metric-value">{m.value}</div>
            <span className="metric-change">{m.change}</span>
          </div>
        ))}
      </div>
      <div className="dashboard-grid">
        <ChartPlaceholder title="Traffic Sources" data={[30, 55, 80, 45, 70, 60, 85, 50, 65, 75, 90, 40]} />
        <ChartPlaceholder title="Conversion Funnel" data={[95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5]} />
      </div>
      <div className="dashboard-grid">
        <ChartPlaceholder title="Revenue by Channel" data={[70, 50, 85, 40, 60, 75, 55, 90, 45, 65, 80, 70]} />
        <ChartPlaceholder title="User Engagement" data={[20, 35, 50, 65, 45, 70, 55, 80, 60, 75, 85, 90]} />
      </div>
    </div>
  );
}
