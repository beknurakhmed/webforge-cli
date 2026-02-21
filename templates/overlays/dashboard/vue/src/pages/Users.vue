<script setup lang="ts">
const users = [
  { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'Active', badge: 'badge-success', initials: 'SJ' },
  { name: 'Mike Peters', email: 'mike@example.com', role: 'Editor', status: 'Active', badge: 'badge-success', initials: 'MP' },
  { name: 'Emily Chen', email: 'emily@example.com', role: 'Viewer', status: 'Inactive', badge: 'badge-danger', initials: 'EC' },
  { name: 'James Wilson', email: 'james@example.com', role: 'Editor', status: 'Active', badge: 'badge-success', initials: 'JW' },
  { name: 'Anna Lee', email: 'anna@example.com', role: 'Admin', status: 'Active', badge: 'badge-success', initials: 'AL' },
  { name: 'Tom Davis', email: 'tom@example.com', role: 'Viewer', status: 'Pending', badge: 'badge-warning', initials: 'TD' },
  { name: 'Lisa Brown', email: 'lisa@example.com', role: 'Editor', status: 'Active', badge: 'badge-success', initials: 'LB' },
];
</script>

<template>
  <div>
    <div class="page-header">
      <h1 class="page-title">Users</h1>
      <p class="page-subtitle">Manage your team members and their permissions.</p>
    </div>
    <div class="data-table-wrapper">
      <div class="table-header">All Users</div>
      <table class="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email">
            <td style="display:flex;align-items:center;gap:0.75rem;">
              <span class="user-avatar">{{ user.initials }}</span>
              {{ user.name }}
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td><span :class="['badge', user.badge]">{{ user.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
