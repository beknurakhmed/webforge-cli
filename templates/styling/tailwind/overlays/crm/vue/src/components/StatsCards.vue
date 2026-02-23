<script setup lang="ts">
import { computed } from 'vue'
import type { Contact } from '../data'

const props = defineProps<{ contacts: Contact[] }>()

const stats = computed(() => [
  { icon: '\u{1F465}', label: 'Total', value: props.contacts.length },
  { icon: '\u{1F535}', label: 'Leads', value: props.contacts.filter(c => c.status === 'Lead').length },
  { icon: '\u{1F7E2}', label: 'Customers', value: props.contacts.filter(c => c.status === 'Customer').length },
  { icon: '\u{1F534}', label: 'Churned', value: props.contacts.filter(c => c.status === 'Churned').length },
])
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-lg p-5 shadow-sm">
      <div class="text-2xl mb-2">{{ stat.icon }}</div>
      <div class="text-xs text-gray-500 uppercase tracking-wider">{{ stat.label }}</div>
      <div class="text-3xl font-bold text-gray-900 mt-1">{{ stat.value }}</div>
    </div>
  </div>
</template>
