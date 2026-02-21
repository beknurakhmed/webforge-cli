<script setup lang="ts">
const props = defineProps<{
  searchQuery?: string;
}>();

const contacts = [
  { id: 1, name: 'Sarah Connor', email: 'sarah@example.com', company: 'Skynet Corp', status: 'Active', value: '$12,400', avatar: '👩‍💼' },
  { id: 2, name: 'John Doe', email: 'john@example.com', company: 'Acme Inc', status: 'Lead', value: '$8,200', avatar: '👨‍💼' },
  { id: 3, name: 'Jane Smith', email: 'jane@example.com', company: 'Tech Labs', status: 'Active', value: '$24,800', avatar: '👩' },
  { id: 4, name: 'Mike Johnson', email: 'mike@example.com', company: 'StartupXYZ', status: 'Inactive', value: '$5,600', avatar: '👨' },
  { id: 5, name: 'Emily Davis', email: 'emily@example.com', company: 'BigCo', status: 'Lead', value: '$15,000', avatar: '👩‍🔬' },
  { id: 6, name: 'Chris Wilson', email: 'chris@example.com', company: 'DevStudio', status: 'Active', value: '$19,300', avatar: '🧑‍💻' },
];

const filteredContacts = computed(() => {
  const q = (props.searchQuery ?? '').toLowerCase();
  if (!q) return contacts;
  return contacts.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.email.toLowerCase().includes(q) ||
    c.company.toLowerCase().includes(q)
  );
});
</script>

<template>
  <div class="table-card">
    <div class="table-wrapper">
      <table class="contacts-table">
        <thead>
          <tr>
            <th>Contact</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in filteredContacts" :key="contact.id">
            <td class="contact-cell">
              <span class="contact-avatar">{{ contact.avatar }}</span>
              <span class="contact-name">{{ contact.name }}</span>
            </td>
            <td class="email">{{ contact.email }}</td>
            <td>{{ contact.company }}</td>
            <td>
              <span :class="['status-badge', contact.status.toLowerCase()]">
                {{ contact.status }}
              </span>
            </td>
            <td class="value">{{ contact.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
}

.contacts-table {
  width: 100%;
  border-collapse: collapse;
}

.contacts-table th {
  text-align: left;
  padding: 0.875rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #e5e7eb;
}

.contacts-table td {
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #f3f4f6;
}

.contact-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-avatar {
  font-size: 1.5rem;
}

.contact-name {
  font-weight: 600;
  color: #111827;
}

.email {
  color: #6b7280;
}

.value {
  font-weight: 600;
  color: #111827;
}

.status-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.active {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.lead {
  background: #dbeafe;
  color: #1e40af;
}

.status-badge.inactive {
  background: #f3f4f6;
  color: #6b7280;
}
</style>
