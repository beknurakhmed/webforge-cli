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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl">{stat.icon}</span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-600 bg-red-100'}`}>{stat.change}</span>
          </div>
          <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
