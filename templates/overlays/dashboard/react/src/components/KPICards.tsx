const kpis = [
  { label: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true },
  { label: 'Active Users', value: '2,350', change: '+15.3%', positive: true },
  { label: 'New Orders', value: '1,247', change: '-3.2%', positive: false },
  { label: 'Conversion Rate', value: '3.24%', change: '+2.1%', positive: true },
];

export function KPICards() {
  return (
    <div className="kpi-grid">
      {kpis.map((kpi, i) => (
        <div key={i} className="kpi-card">
          <span className="kpi-label">{kpi.label}</span>
          <div className="kpi-value">{kpi.value}</div>
          <span className={`kpi-change ${kpi.positive ? 'positive' : 'negative'}`}>
            {kpi.change} from last month
          </span>
        </div>
      ))}
    </div>
  );
}
