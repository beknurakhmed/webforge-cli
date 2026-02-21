interface Stat {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const stats: Stat[] = [
  { title: 'Total Contacts', value: '1,248', change: '+12.5%', trend: 'up', icon: '👥' },
  { title: 'Active Deals', value: '42', change: '+8.3%', trend: 'up', icon: '💼' },
  { title: 'Revenue Pipeline', value: '$284,500', change: '+23.1%', trend: 'up', icon: '💰' },
  { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', trend: 'down', icon: '📈' },
];

export function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.title} className="stat-card">
          <div className="stat-header">
            <span className="stat-icon">{stat.icon}</span>
            <span className={`stat-change ${stat.trend}`}>{stat.change}</span>
          </div>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-title">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
