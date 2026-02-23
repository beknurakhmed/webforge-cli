import { withLayout, stats, activities } from '../main';

export function renderOverview(): string {
  return withLayout('Overview', `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      ${stats.map(s => `
        <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
          <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">${s.icon}</div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider">${s.label}</p>
            <h3 class="text-2xl font-bold text-gray-900">${s.value}</h3>
            <span class="text-xs font-semibold ${s.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}">${s.change}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Revenue Overview</h3>
        <div class="h-64 flex items-end pt-4">
          <div class="flex items-end gap-3 w-full h-full">
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 60%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Jan</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 45%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Feb</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 75%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Mar</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 55%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Apr</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 85%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">May</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 70%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Jun</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 90%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Jul</span></div>
            <div class="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t min-h-[20px] relative transition-all hover:opacity-80" style="height: 65%"><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-500">Aug</span></div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Recent Activity</h3>
        <div class="flex flex-col">
          ${activities.map(a => `
            <div class="flex items-start gap-3 py-3 border-b border-gray-200 last:border-b-0">
              <span class="text-2xl w-9 h-9 flex items-center justify-center bg-indigo-50 rounded-full shrink-0">${a.avatar}</span>
              <div>
                <p class="text-sm text-gray-700"><strong>${a.user}</strong> ${a.action}</p>
                <span class="text-xs text-gray-500">${a.time}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-5">Quick Actions</h3>
      <div class="flex gap-4 flex-wrap">
        <a href="#/analytics" class="px-5 py-3 bg-indigo-50 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-600 hover:text-white transition-all">📈 View Analytics</a>
        <a href="#/users" class="px-5 py-3 bg-indigo-50 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-600 hover:text-white transition-all">👥 Manage Users</a>
        <a href="#/settings" class="px-5 py-3 bg-indigo-50 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-600 hover:text-white transition-all">⚙️ Settings</a>
      </div>
    </div>
  `);
}
