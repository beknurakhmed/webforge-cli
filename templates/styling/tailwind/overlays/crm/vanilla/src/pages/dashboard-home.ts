import { withLayout, contacts, deals } from '../main';

export function renderDashboardHome(): string {
  const totalValue = deals.filter(d => d.stage !== 'Closed Lost').reduce((s, d) => s + d.value, 0);
  const wonValue = deals.filter(d => d.stage === 'Closed Won').reduce((s, d) => s + d.value, 0);
  const activeDeals = deals.filter(d => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost');
  const pipelineValue = activeDeals.reduce((s, d) => s + d.value, 0);

  return withLayout('Dashboard', `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">👥</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Total Contacts</p>
          <h3 class="text-2xl font-bold text-gray-900">${contacts.length}</h3>
          <span class="text-xs font-semibold text-emerald-500">+3 this month</span>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">💼</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Active Deals</p>
          <h3 class="text-2xl font-bold text-gray-900">${activeDeals.length}</h3>
          <span class="text-xs font-semibold text-emerald-500">+2 this week</span>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">📊</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Pipeline Value</p>
          <h3 class="text-2xl font-bold text-gray-900">$${pipelineValue.toLocaleString()}</h3>
          <span class="text-xs font-semibold text-emerald-500">+18.5%</span>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">🏆</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Won Revenue</p>
          <h3 class="text-2xl font-bold text-gray-900">$${wonValue.toLocaleString()}</h3>
          <span class="text-xs font-semibold text-emerald-500">+24.3%</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Deal Pipeline</h3>
        <div class="flex flex-col gap-5">
          ${['Discovery', 'Proposal', 'Negotiation', 'Closed Won'].map(stage => {
            const stageDeals = deals.filter(d => d.stage === stage);
            const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
            return `
              <div class="py-3">
                <div class="flex justify-between mb-1">
                  <span class="font-semibold text-sm text-gray-900">${stage}</span>
                  <span class="text-xs text-gray-500">${stageDeals.length} deals</span>
                </div>
                <div class="text-sm text-indigo-600 font-semibold mb-2">$${stageValue.toLocaleString()}</div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-indigo-600 rounded-full transition-all" style="width: ${(stageValue / totalValue) * 100}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Recent Contacts</h3>
        <div class="flex flex-col">
          ${contacts.slice(0, 5).map(c => `
            <div class="flex items-center gap-3 py-3 border-b border-gray-200 last:border-b-0">
              <span class="text-2xl w-9 h-9 flex items-center justify-center bg-indigo-50 rounded-full">${c.avatar}</span>
              <div class="flex-1">
                <p class="font-semibold text-sm text-gray-900">${c.name}</p>
                <p class="text-xs text-gray-500">${c.company}</p>
              </div>
              <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.status === 'Lead' ? 'bg-emerald-100 text-emerald-800' : c.status === 'Prospect' ? 'bg-blue-100 text-blue-800' : c.status === 'Customer' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}">${c.status}</span>
            </div>
          `).join('')}
        </div>
        <a href="#/contacts" class="block text-center py-3 text-indigo-600 font-semibold text-sm mt-2 hover:underline">View all contacts &rarr;</a>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-5">Upcoming Closes</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Deal</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Company</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Value</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Stage</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Close Date</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Probability</th>
          </tr>
        </thead>
        <tbody>
          ${activeDeals.map(d => `
            <tr class="hover:bg-gray-50">
              <td class="p-3 border-b border-gray-200 text-sm"><strong>${d.title}</strong></td>
              <td class="p-3 border-b border-gray-200 text-sm">${d.company}</td>
              <td class="p-3 border-b border-gray-200 text-sm font-bold text-indigo-600">$${d.value.toLocaleString()}</td>
              <td class="p-3 border-b border-gray-200 text-sm"><span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${d.stage === 'Discovery' ? 'bg-indigo-100 text-indigo-800' : d.stage === 'Proposal' ? 'bg-blue-100 text-blue-800' : d.stage === 'Negotiation' ? 'bg-amber-100 text-amber-800' : d.stage === 'Closed Won' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">${d.stage}</span></td>
              <td class="p-3 border-b border-gray-200 text-sm">${d.closeDate}</td>
              <td class="p-3 border-b border-gray-200 text-sm">
                <div class="flex items-center gap-2">
                  <div class="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-indigo-600 rounded-full" style="width: ${d.probability}%"></div>
                  </div>
                  <span class="text-xs text-gray-500">${d.probability}%</span>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
