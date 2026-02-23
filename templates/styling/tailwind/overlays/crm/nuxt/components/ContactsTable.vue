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

function statusClasses(status: string) {
  const base = 'inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold';
  switch (status.toLowerCase()) {
    case 'active': return `${base} bg-emerald-100 text-emerald-800`;
    case 'lead': return `${base} bg-blue-100 text-blue-800`;
    case 'inactive': return `${base} bg-gray-100 text-gray-500`;
    default: return base;
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Contact</th>
            <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Email</th>
            <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Company</th>
            <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Status</th>
            <th class="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in filteredContacts" :key="contact.id">
            <td class="px-4 py-3.5 text-sm border-b border-gray-50">
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ contact.avatar }}</span>
                <span class="font-semibold text-gray-900">{{ contact.name }}</span>
              </div>
            </td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50 text-gray-500">{{ contact.email }}</td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50">{{ contact.company }}</td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50">
              <span :class="statusClasses(contact.status)">{{ contact.status }}</span>
            </td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50 font-semibold text-gray-900">{{ contact.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
