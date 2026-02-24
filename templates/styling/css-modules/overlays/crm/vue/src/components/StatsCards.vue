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
  <div :class="$style.statsGrid">
    <div v-for="stat in stats" :key="stat.label" :class="$style.statCard">
      <div :class="$style.statIcon">{{ stat.icon }}</div>
      <div :class="$style.statLabel">{{ stat.label }}</div>
      <div :class="$style.statValue">{{ stat.value }}</div>
    </div>
  </div>
</template>

<style module>
.statsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.statCard {
  background: #fff;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.statLabel {
  font-size: 0.8rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.statValue {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-top: 0.25rem;
}

.statIcon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
