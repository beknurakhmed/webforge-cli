<script setup lang="ts">
const users = [
  { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'Active', badge: 'bg-emerald-100 text-emerald-800', initials: 'SJ' },
  { name: 'Mike Peters', email: 'mike@example.com', role: 'Editor', status: 'Active', badge: 'bg-emerald-100 text-emerald-800', initials: 'MP' },
  { name: 'Emily Chen', email: 'emily@example.com', role: 'Viewer', status: 'Inactive', badge: 'bg-red-100 text-red-800', initials: 'EC' },
  { name: 'James Wilson', email: 'james@example.com', role: 'Editor', status: 'Active', badge: 'bg-emerald-100 text-emerald-800', initials: 'JW' },
  { name: 'Anna Lee', email: 'anna@example.com', role: 'Admin', status: 'Active', badge: 'bg-emerald-100 text-emerald-800', initials: 'AL' },
  { name: 'Tom Davis', email: 'tom@example.com', role: 'Viewer', status: 'Pending', badge: 'bg-amber-100 text-amber-800', initials: 'TD' },
  { name: 'Lisa Brown', email: 'lisa@example.com', role: 'Editor', status: 'Active', badge: 'bg-emerald-100 text-emerald-800', initials: 'LB' },
];
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Users</h1>
      <p class="text-gray-500 mt-1">Manage your team members and their permissions.</p>
    </div>
    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
      <div class="px-6 py-4 border-b border-gray-200 font-semibold text-gray-900">All Users</div>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">User</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Email</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Role</th>
            <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email" class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b border-gray-100 text-sm">
              <div class="flex items-center gap-3">
                <span class="w-9 h-9 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-semibold text-sm">{{ user.initials }}</span>
                {{ user.name }}
              </div>
            </td>
            <td class="px-6 py-3 border-b border-gray-100 text-sm">{{ user.email }}</td>
            <td class="px-6 py-3 border-b border-gray-100 text-sm">{{ user.role }}</td>
            <td class="px-6 py-3 border-b border-gray-100 text-sm"><span :class="['inline-block px-3 py-0.5 rounded-full text-xs font-semibold', user.badge]">{{ user.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
