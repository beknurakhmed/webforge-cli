<script setup lang="ts">
import { computed } from 'vue'
import type { Contact } from '../data'

const props = defineProps<{ contacts: Contact[] }>()

const stats = computed(() => [
  { icon: '👥', label: 'Total', value: props.contacts.length },
  { icon: '🔵', label: 'Leads', value: props.contacts.filter(c => c.status === 'Lead').length },
  { icon: '🟢', label: 'Customers', value: props.contacts.filter(c => c.status === 'Customer').length },
  { icon: '🔴', label: 'Churned', value: props.contacts.filter(c => c.status === 'Churned').length },
])
</script>

<template>
  <div class="stats-grid">
    <div v-for="stat in stats" :key="stat.label" class="stat-card">
      <div class="stat-icon">{{ stat.icon }}</div>
      <div class="stat-label">{{ stat.label }}</div>
      <div class="stat-value">{{ stat.value }}</div>
    </div>
  </div>
</template>
