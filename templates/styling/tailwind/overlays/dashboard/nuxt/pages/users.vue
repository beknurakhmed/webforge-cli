<script setup lang="ts">
const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2023-06-15', avatar: '👩' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', joined: '2023-08-22', avatar: '👨' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'Viewer', status: 'Inactive', joined: '2023-09-10', avatar: '👩‍💼' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active', joined: '2023-11-05', avatar: '👨‍💻' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'Active', joined: '2024-01-02', avatar: '👩‍🔬' },
  { id: 6, name: 'Frank Lee', email: 'frank@example.com', role: 'Viewer', status: 'Pending', joined: '2024-01-10', avatar: '🧑' },
];

const search = ref('');

const filteredUsers = computed(() =>
  users.filter(u =>
    u.name.toLowerCase().includes(search.value.toLowerCase()) ||
    u.email.toLowerCase().includes(search.value.toLowerCase())
  )
);

function roleClasses(role: string) {
  const base = 'inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold';
  switch (role.toLowerCase()) {
    case 'admin': return `${base} bg-violet-100 text-violet-800`;
    case 'editor': return `${base} bg-blue-100 text-blue-800`;
    case 'viewer': return `${base} bg-gray-100 text-gray-600`;
    default: return base;
  }
}

function statusClasses(status: string) {
  const base = 'inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold';
  switch (status.toLowerCase()) {
    case 'active': return `${base} bg-emerald-100 text-emerald-800`;
    case 'inactive': return `${base} bg-red-100 text-red-800`;
    case 'pending': return `${base} bg-amber-100 text-amber-800`;
    default: return base;
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between items-start mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Users</h1>
        <p class="text-gray-500">Manage user accounts and permissions.</p>
      </div>
      <button class="bg-indigo-600 text-white border-none px-5 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">+ Add User</button>
    </div>

    <div class="mb-5">
      <input
        v-model="search"
        type="text"
        placeholder="Search users..."
        class="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
      />
    </div>

    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">User</th>
              <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Email</th>
              <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Role</th>
              <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Status</th>
              <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td class="px-4 py-3.5 text-sm border-b border-gray-50">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">{{ user.avatar }}</span>
                  <span class="font-semibold text-gray-900">{{ user.name }}</span>
                </div>
              </td>
              <td class="px-4 py-3.5 text-sm border-b border-gray-50 text-gray-500">{{ user.email }}</td>
              <td class="px-4 py-3.5 text-sm border-b border-gray-50">
                <span :class="roleClasses(user.role)">{{ user.role }}</span>
              </td>
              <td class="px-4 py-3.5 text-sm border-b border-gray-50">
                <span :class="statusClasses(user.status)">{{ user.status }}</span>
              </td>
              <td class="px-4 py-3.5 text-sm border-b border-gray-50 text-gray-500">{{ user.joined }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
