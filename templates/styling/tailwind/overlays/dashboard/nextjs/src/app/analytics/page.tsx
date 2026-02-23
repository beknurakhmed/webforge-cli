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
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">Track your website performance and user engagement.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl">{m.icon}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${m.change.startsWith('+') ? 'text-green-700 bg-green-100' : 'text-red-600 bg-red-100'}`}>{m.change}</span>
            </div>
            <p className="text-2xl font-extrabold text-gray-900">{m.value}</p>
            <p className="text-sm text-gray-500 mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <ChartPlaceholder title="Traffic Sources" type="pie" />
        <ChartPlaceholder title="Visitor Trend" type="line" />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <h3 className="text-base font-semibold text-gray-900 px-6 pt-5 mb-4">Top Pages</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Page</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Views</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Share</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Progress</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page) => (
                <tr key={page.page} className="hover:bg-gray-50">
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200 font-semibold text-indigo-600">{page.page}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">{page.views}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">{page.percentage}%</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">
                    <div className="w-full h-2 bg-gray-100 rounded overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded transition-all" style={{ width: `${page.percentage}%` }} />
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
