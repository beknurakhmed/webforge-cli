<script setup lang="ts">
const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];
</script>

<template>
  <div class="kpi-grid">
    <div v-for="kpi in kpis" :key="kpi.label" class="kpi-card">
      <p class="kpi-label">{{ kpi.label }}</p>
      <p class="kpi-value">{{ kpi.value }}</p>
      <p :class="['kpi-change', kpi.positive ? 'positive' : 'negative']">{{ kpi.change }}</p>
    </div>
  </div>
</template>
