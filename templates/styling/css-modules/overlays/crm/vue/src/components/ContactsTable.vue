<script setup lang="ts">
import { useCssModule } from 'vue'
import type { Contact } from '../data'

defineProps<{ contacts: Contact[] }>()

const style = useCssModule()

const statusClass = (status: string) => {
  const map: Record<string, string> = {
    Lead: style.statusLead,
    Prospect: style.statusProspect,
    Customer: style.statusCustomer,
    Churned: style.statusChurned,
  }
  return map[status] || ''
}
</script>

<template>
  <div :class="$style.tableContainer">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.company }}</td>
          <td>{{ contact.phone }}</td>
          <td><span :class="statusClass(contact.status)">{{ contact.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style module>
.tableContainer {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.tableContainer table {
  width: 100%;
  border-collapse: collapse;
}

.tableContainer th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.tableContainer td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.9rem;
}

.statusLead {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #dbeafe;
  color: #1e40af;
}

.statusProspect {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #fef3c7;
  color: #92400e;
}

.statusCustomer {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #d1fae5;
  color: #065f46;
}

.statusChurned {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #fee2e2;
  color: #991b1b;
}
</style>
