<script setup lang="ts">
import type { Contact } from '../data'

defineProps<{ contacts: Contact[] }>()

const badgeClass = (status: string) => {
  switch (status) {
    case 'Lead': return 'bg-blue-100 text-blue-800'
    case 'Prospect': return 'bg-amber-100 text-amber-800'
    case 'Customer': return 'bg-emerald-100 text-emerald-800'
    case 'Churned': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th class="text-left px-4 py-3 text-xs uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-200">Name</th>
          <th class="text-left px-4 py-3 text-xs uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-200">Email</th>
          <th class="text-left px-4 py-3 text-xs uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-200">Company</th>
          <th class="text-left px-4 py-3 text-xs uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-200">Phone</th>
          <th class="text-left px-4 py-3 text-xs uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-200">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id" class="hover:bg-gray-50">
          <td class="px-4 py-3 border-b border-gray-100 text-sm">{{ contact.name }}</td>
          <td class="px-4 py-3 border-b border-gray-100 text-sm">{{ contact.email }}</td>
          <td class="px-4 py-3 border-b border-gray-100 text-sm">{{ contact.company }}</td>
          <td class="px-4 py-3 border-b border-gray-100 text-sm">{{ contact.phone }}</td>
          <td class="px-4 py-3 border-b border-gray-100 text-sm"><span :class="['inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold', badgeClass(contact.status)]">{{ contact.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
