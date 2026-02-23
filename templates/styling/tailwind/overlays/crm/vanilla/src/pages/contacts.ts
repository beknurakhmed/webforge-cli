import { withLayout, contacts } from '../main';

export function renderContacts(): string {
  const statusCounts = {
    Lead: contacts.filter(c => c.status === 'Lead').length,
    Prospect: contacts.filter(c => c.status === 'Prospect').length,
    Customer: contacts.filter(c => c.status === 'Customer').length,
    Churned: contacts.filter(c => c.status === 'Churned').length,
  };

  return withLayout('Contacts', `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">👥</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">All Contacts</p>
          <h3 class="text-2xl font-bold text-gray-900">${contacts.length}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">🟢</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Leads</p>
          <h3 class="text-2xl font-bold text-gray-900">${statusCounts.Lead}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">🔵</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Prospects</p>
          <h3 class="text-2xl font-bold text-gray-900">${statusCounts.Prospect}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">⭐</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Customers</p>
          <h3 class="text-2xl font-bold text-gray-900">${statusCounts.Customer}</h3>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-lg font-semibold text-gray-900">All Contacts</h3>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">+ Add Contact</button>
      </div>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Name</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Email</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Company</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Phone</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Status</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Last Contact</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${contacts.map(c => `
            <tr class="hover:bg-gray-50">
              <td class="p-3 border-b border-gray-200 text-sm">
                <div class="flex items-center gap-3">
                  <span class="text-xl">${c.avatar}</span>
                  <span>${c.name}</span>
                </div>
              </td>
              <td class="p-3 border-b border-gray-200 text-sm">${c.email}</td>
              <td class="p-3 border-b border-gray-200 text-sm">${c.company}</td>
              <td class="p-3 border-b border-gray-200 text-sm">${c.phone}</td>
              <td class="p-3 border-b border-gray-200 text-sm"><span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.status === 'Lead' ? 'bg-emerald-100 text-emerald-800' : c.status === 'Prospect' ? 'bg-blue-100 text-blue-800' : c.status === 'Customer' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}">${c.status}</span></td>
              <td class="p-3 border-b border-gray-200 text-sm">${c.lastContact}</td>
              <td class="p-3 border-b border-gray-200 text-sm">
                <div class="flex gap-1">
                  <button class="bg-transparent border border-gray-200 rounded-lg px-2 py-1 text-xs cursor-pointer hover:bg-indigo-50 hover:border-indigo-600 transition-all" title="Email">📧</button>
                  <button class="bg-transparent border border-gray-200 rounded-lg px-2 py-1 text-xs cursor-pointer hover:bg-indigo-50 hover:border-indigo-600 transition-all" title="Call">📞</button>
                  <button class="bg-transparent border border-gray-200 rounded-lg px-2 py-1 text-xs cursor-pointer hover:bg-indigo-50 hover:border-indigo-600 transition-all" title="Edit">✏️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
