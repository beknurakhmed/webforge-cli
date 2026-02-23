import { withLayout, deals } from '../main';

export function renderDeals(): string {
  const stages = ['Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'] as const;
  const totalPipeline = deals.filter(d => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost').reduce((s, d) => s + d.value, 0);
  const wonDeals = deals.filter(d => d.stage === 'Closed Won');
  const lostDeals = deals.filter(d => d.stage === 'Closed Lost');
  const winRate = wonDeals.length + lostDeals.length > 0
    ? Math.round((wonDeals.length / (wonDeals.length + lostDeals.length)) * 100)
    : 0;

  return withLayout('Deals', `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">💼</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Total Deals</p>
          <h3 class="text-2xl font-bold text-gray-900">${deals.length}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">📊</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Pipeline Value</p>
          <h3 class="text-2xl font-bold text-gray-900">$${totalPipeline.toLocaleString()}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">🏆</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Won Deals</p>
          <h3 class="text-2xl font-bold text-gray-900">${wonDeals.length}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">📈</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Win Rate</p>
          <h3 class="text-2xl font-bold text-gray-900">${winRate}%</h3>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-lg font-semibold text-gray-900">Deal Pipeline Board</h3>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">+ New Deal</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto">
        ${stages.filter(s => s !== 'Closed Lost').map(stage => {
          const stageDeals = deals.filter(d => d.stage === stage);
          const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
          return `
            <div class="bg-gray-50 rounded-lg p-4 min-w-[220px]">
              <div class="flex justify-between items-center mb-1">
                <span class="font-bold text-sm text-gray-900">${stage}</span>
                <span class="bg-gray-200 px-2 py-0.5 rounded-full text-xs text-gray-500">${stageDeals.length}</span>
              </div>
              <div class="text-xs text-indigo-600 font-semibold mb-4">$${stageValue.toLocaleString()}</div>
              <div class="flex flex-col gap-3">
                ${stageDeals.map(d => `
                  <div class="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 class="text-sm font-semibold text-gray-900 mb-1">${d.title}</h4>
                    <p class="text-xs text-gray-500">${d.company}</p>
                    <p class="font-bold text-indigo-600 text-sm my-2">$${d.value.toLocaleString()}</p>
                    <div class="flex justify-between text-[0.7rem] text-gray-500">
                      <span>👤 ${d.contact}</span>
                      <span>📅 ${d.closeDate}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-5">All Deals</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Deal</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Company</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Value</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Stage</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Contact</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Close Date</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Probability</th>
          </tr>
        </thead>
        <tbody>
          ${deals.map(d => `
            <tr class="hover:bg-gray-50">
              <td class="p-3 border-b border-gray-200 text-sm"><strong>${d.title}</strong></td>
              <td class="p-3 border-b border-gray-200 text-sm">${d.company}</td>
              <td class="p-3 border-b border-gray-200 text-sm font-bold text-indigo-600">$${d.value.toLocaleString()}</td>
              <td class="p-3 border-b border-gray-200 text-sm"><span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${d.stage === 'Discovery' ? 'bg-indigo-100 text-indigo-800' : d.stage === 'Proposal' ? 'bg-blue-100 text-blue-800' : d.stage === 'Negotiation' ? 'bg-amber-100 text-amber-800' : d.stage === 'Closed Won' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">${d.stage}</span></td>
              <td class="p-3 border-b border-gray-200 text-sm">${d.contact}</td>
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
