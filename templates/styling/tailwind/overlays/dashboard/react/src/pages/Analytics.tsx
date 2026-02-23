import { ChartPlaceholder } from '../components/ChartPlaceholder';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14%' },
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8%' },
  { label: 'Conversions', value: '1,847', change: '+5.3%' },
];

export function Analytics() {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white rounded-xl p-4 lg:p-5 border border-gray-200">
            <span className="text-xs lg:text-sm text-gray-500 font-medium">{m.label}</span>
            <div className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">{m.value}</div>
            <span className="text-xs text-emerald-500 font-medium">{m.change}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <ChartPlaceholder title="Traffic Sources" data={[30, 55, 80, 45, 70, 60, 85, 50, 65, 75, 90, 40]} />
        <ChartPlaceholder title="Conversion Funnel" data={[95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5]} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ChartPlaceholder title="Revenue by Channel" data={[70, 50, 85, 40, 60, 75, 55, 90, 45, 65, 80, 70]} />
        <ChartPlaceholder title="User Engagement" data={[20, 35, 50, 65, 45, 70, 55, 80, 60, 75, 85, 90]} />
      </div>
    </div>
  );
}
