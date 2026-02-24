<script setup lang="ts">
const style = useCssModule();

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

const roleMap: Record<string, string> = {
  Admin: 'roleAdmin',
  Editor: 'roleEditor',
  Viewer: 'roleViewer',
};

const statusMap: Record<string, string> = {
  Active: 'statusActive',
  Inactive: 'statusInactive',
  Pending: 'statusPending',
};

function roleClass(role: string) { return style[roleMap[role]] || ''; }
function statusClass(status: string) { return style[statusMap[status]] || ''; }
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <div>
        <h1>Users</h1>
        <p :class="$style.subtitle">Manage user accounts and permissions.</p>
      </div>
      <button :class="$style.addBtn">+ Add User</button>
    </div>

    <div :class="$style.searchBar">
      <input
        v-model="search"
        type="text"
        placeholder="Search users..."
        :class="$style.searchInput"
      />
    </div>

    <div :class="$style.tableCard">
      <div :class="$style.tableWrapper">
        <table :class="$style.usersTable">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td :class="$style.userCell">
                <span :class="$style.userAvatar">{{ user.avatar }}</span>
                <span :class="$style.userName">{{ user.name }}</span>
              </td>
              <td :class="$style.email">{{ user.email }}</td>
              <td>
                <span :class="roleClass(user.role)">{{ user.role }}</span>
              </td>
              <td>
                <span :class="statusClass(user.status)">{{ user.status }}</span>
              </td>
              <td :class="$style.date">{{ user.joined }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style module>
.pageHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.pageHeader h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle { color: #6b7280; }

.addBtn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.addBtn:hover { background: #4338ca; }

.searchBar { margin-bottom: 1.25rem; }

.searchInput {
  width: 100%;
  max-width: 400px;
  padding: 0.65rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
}

.searchInput:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.tableCard {
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.tableWrapper { overflow-x: auto; }

.usersTable { width: 100%; border-collapse: collapse; }

.usersTable th {
  text-align: left;
  padding: 0.875rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #e5e7eb;
}

.usersTable td {
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #f3f4f6;
}

.userCell { display: flex; align-items: center; gap: 0.75rem; }
.userAvatar { font-size: 1.5rem; }
.userName { font-weight: 600; color: #111827; }
.email { color: #6b7280; }
.date { color: #6b7280; }

.roleAdmin { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #ede9fe; color: #5b21b6; }
.roleEditor { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #dbeafe; color: #1e40af; }
.roleViewer { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #f3f4f6; color: #374151; }

.statusActive { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #d1fae5; color: #065f46; }
.statusInactive { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #fee2e2; color: #991b1b; }
.statusPending { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #fef3c7; color: #92400e; }
</style>
