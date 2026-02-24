<script setup lang="ts">
import { useCssModule } from 'vue';

const style = useCssModule();

const users = [
  { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'Active', badge: 'badgeSuccess', initials: 'SJ' },
  { name: 'Mike Peters', email: 'mike@example.com', role: 'Editor', status: 'Active', badge: 'badgeSuccess', initials: 'MP' },
  { name: 'Emily Chen', email: 'emily@example.com', role: 'Viewer', status: 'Inactive', badge: 'badgeDanger', initials: 'EC' },
  { name: 'James Wilson', email: 'james@example.com', role: 'Editor', status: 'Active', badge: 'badgeSuccess', initials: 'JW' },
  { name: 'Anna Lee', email: 'anna@example.com', role: 'Admin', status: 'Active', badge: 'badgeSuccess', initials: 'AL' },
  { name: 'Tom Davis', email: 'tom@example.com', role: 'Viewer', status: 'Pending', badge: 'badgeWarning', initials: 'TD' },
  { name: 'Lisa Brown', email: 'lisa@example.com', role: 'Editor', status: 'Active', badge: 'badgeSuccess', initials: 'LB' },
];

function badgeClass(badge: string) {
  return style[badge] || '';
}
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <h1 :class="$style.pageTitle">Users</h1>
      <p :class="$style.pageSubtitle">Manage your team members and their permissions.</p>
    </div>
    <div :class="$style.dataTableWrapper">
      <div :class="$style.tableHeader">All Users</div>
      <table :class="$style.dataTable">
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
            <td :class="$style.userCell">
              <span :class="$style.userAvatar">{{ user.initials }}</span>
              {{ user.name }}
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td><span :class="badgeClass(user.badge)">{{ user.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 2rem;
}

.pageTitle {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.pageSubtitle {
  color: #6b7280;
  margin-top: 0.25rem;
}

.dataTableWrapper {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.tableHeader {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #111827;
}

.dataTable {
  width: 100%;
  border-collapse: collapse;
}

.dataTable th {
  text-align: left;
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.dataTable td {
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.9rem;
}

.dataTable tr:last-child td {
  border-bottom: none;
}

.dataTable tr:hover {
  background: #f9fafb;
}

.userCell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.userAvatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #4f46e5;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.85rem;
}

.badgeSuccess {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #d1fae5;
  color: #065f46;
}

.badgeWarning {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #fef3c7;
  color: #92400e;
}

.badgeDanger {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #fee2e2;
  color: #991b1b;
}
</style>
