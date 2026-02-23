const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
      {kpis.map((kpi, i) => (
        <div key={i} className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
          <span className="text-sm text-gray-500 font-medium">{kpi.label}</span>
          <div className="text-2xl lg:text-3xl font-bold mt-1 text-gray-900">{kpi.value}</div>
          <span className={`text-xs ${kpi.positive ? 'text-emerald-500' : 'text-red-500'}`}>
            {kpi.change} from last month
          </span>
        </div>
      ))}
    </div>
  );
}
