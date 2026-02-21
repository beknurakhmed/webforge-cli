const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
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
