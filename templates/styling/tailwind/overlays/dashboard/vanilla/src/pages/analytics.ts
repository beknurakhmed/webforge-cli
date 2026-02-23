import { withLayout } from '../main';

export function renderAnalytics(): string {
  const metrics = [
    { label: 'Page Views', value: '124,892', change: '+14.2%', icon: '👁️' },
    { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', icon: '↩️' },
    { label: 'Session Duration', value: '4m 32s', change: '+18.7%', icon: '⏱️' },
    { label: 'New Visitors', value: '8,432', change: '+5.6%', icon: '🆕' },
  ];

  const topPages = [
    { page: '/home', views: '34,521', unique: '28,103', rate: '2.1%' },
    { page: '/products', views: '22,847', unique: '18,234', rate: '3.4%' },
    { page: '/about', views: '15,632', unique: '12,891', rate: '1.8%' },
    { page: '/blog', views: '12,456', unique: '10,234', rate: '4.2%' },
    { page: '/contact', views: '8,912', unique: '7,543', rate: '5.1%' },
  ];

  const sources = [
    { source: 'Organic Search', visitors: '45,231', percentage: 42 },
    { source: 'Direct', visitors: '28,432', percentage: 26 },
    { source: 'Social Media', visitors: '18,234', percentage: 17 },
    { source: 'Referral', visitors: '10,123', percentage: 9 },
    { source: 'Email', visitors: '6,432', percentage: 6 },
  ];

  return withLayout('Analytics', `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      ${metrics.map(m => `
        <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
          <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">${m.icon}</div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider">${m.label}</p>
            <h3 class="text-2xl font-bold text-gray-900">${m.value}</h3>
            <span class="text-xs font-semibold text-emerald-500">${m.change}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Traffic Overview</h3>
        <div class="h-64 flex items-end pt-4">
          <div class="flex items-end gap-3 w-full h-full">
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 50%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Mon</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 70%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Tue</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 65%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Wed</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 80%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Thu</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 90%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Fri</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 55%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Sat</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 40%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Sun</span></div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Traffic Sources</h3>
        <div class="flex flex-col gap-4">
          ${sources.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex justify-between text-sm">
                <span class="font-medium text-gray-700">${s.source}</span>
                <span class="text-gray-500">${s.visitors}</span>
              </div>
              <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-indigo-600 rounded-full transition-all" style="width: ${s.percentage}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-5">Top Pages</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Page</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Views</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Unique Visitors</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Conversion Rate</th>
          </tr>
        </thead>
        <tbody>
          ${topPages.map(p => `
            <tr class="hover:bg-gray-50">
              <td class="p-3 border-b border-gray-200 text-sm"><code class="bg-indigo-50 px-2 py-0.5 rounded text-xs text-indigo-600">${p.page}</code></td>
              <td class="p-3 border-b border-gray-200 text-sm">${p.views}</td>
              <td class="p-3 border-b border-gray-200 text-sm">${p.unique}</td>
              <td class="p-3 border-b border-gray-200 text-sm">${p.rate}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
