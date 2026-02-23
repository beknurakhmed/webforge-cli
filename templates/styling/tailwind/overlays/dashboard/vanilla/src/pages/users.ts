import { withLayout, users } from '../main';

export function renderUsers(): string {
  const roleCount = {
    Admin: users.filter(u => u.role === 'Admin').length,
    Editor: users.filter(u => u.role === 'Editor').length,
    Viewer: users.filter(u => u.role === 'Viewer').length,
  };

  return withLayout('Users', `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">👥</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
          <h3 class="text-2xl font-bold text-gray-900">${users.length}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">✅</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Active</p>
          <h3 class="text-2xl font-bold text-gray-900">${users.filter(u => u.status === 'Active').length}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">🛡️</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Admins</p>
          <h3 class="text-2xl font-bold text-gray-900">${roleCount.Admin}</h3>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
        <div class="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">✏️</div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider">Editors</p>
          <h3 class="text-2xl font-bold text-gray-900">${roleCount.Editor}</h3>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-lg font-semibold text-gray-900">All Users</h3>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">+ Add User</button>
      </div>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">User</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Email</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Role</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Status</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Joined</th>
            <th class="text-left p-3 text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(u => `
            <tr class="hover:bg-gray-50">
              <td class="p-3 border-b border-gray-200 text-sm">
                <div class="flex items-center gap-3">
                  <span class="text-xl">${u.avatar}</span>
                  <span>${u.name}</span>
                </div>
              </td>
              <td class="p-3 border-b border-gray-200 text-sm">${u.email}</td>
              <td class="p-3 border-b border-gray-200 text-sm"><span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${u.role === 'Admin' ? 'bg-amber-100 text-amber-800' : u.role === 'Editor' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}">${u.role}</span></td>
              <td class="p-3 border-b border-gray-200 text-sm"><span class="inline-block w-2 h-2 rounded-full mr-1 ${u.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'}"></span> ${u.status}</td>
              <td class="p-3 border-b border-gray-200 text-sm">${u.joined}</td>
              <td class="p-3 border-b border-gray-200 text-sm">
                <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg font-semibold text-xs border-none cursor-pointer hover:bg-indigo-700 transition-colors">Edit</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
