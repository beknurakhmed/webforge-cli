<script setup lang="ts">
const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div v-for="kpi in kpis" :key="kpi.label" class="bg-white border border-gray-200 rounded-xl p-6">
      <p class="text-sm text-gray-500 font-medium mb-2">{{ kpi.label }}</p>
      <p class="text-3xl font-bold text-gray-900">{{ kpi.value }}</p>
      <p :class="['text-sm font-semibold mt-1', kpi.positive ? 'text-emerald-600' : 'text-red-600']">{{ kpi.change }}</p>
    </div>
  </div>
</template>
