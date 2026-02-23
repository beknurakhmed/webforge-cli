interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const kpis: KPI[] = [
  { title: 'Total Revenue', value: '$48,250', change: '+12.5%', trend: 'up', icon: '💰' },
  { title: 'Active Users', value: '2,340', change: '+8.1%', trend: 'up', icon: '👥' },
  { title: 'Orders', value: '1,120', change: '+23.4%', trend: 'up', icon: '📦' },
  { title: 'Conversion Rate', value: '3.2%', change: '-1.8%', trend: 'down', icon: '📈' },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {kpis.map((kpi) => (
        <div key={kpi.title} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl">{kpi.icon}</span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-600 bg-red-100'}`}>{kpi.change}</span>
          </div>
          <p className="text-2xl font-extrabold text-gray-900">{kpi.value}</p>
          <p className="text-sm text-gray-500 mt-1">{kpi.title}</p>
        </div>
      ))}
    </div>
  );
}
