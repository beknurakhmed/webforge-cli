<script setup lang="ts">
const kpis = [
  { label: 'Total Revenue', value: '$54,230', change: '+12.5%', icon: '💰', positive: true },
  { label: 'Active Users', value: '2,345', change: '+8.1%', icon: '👥', positive: true },
  { label: 'Orders', value: '1,247', change: '+23.4%', icon: '📦', positive: true },
  { label: 'Conversion', value: '3.24%', change: '-0.8%', icon: '📈', positive: false },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
    <div v-for="kpi in kpis" :key="kpi.label" class="bg-white rounded-lg p-6 shadow-sm">
      <div class="flex justify-between items-center mb-3">
        <span class="text-sm text-gray-500 font-medium">{{ kpi.label }}</span>
        <span class="text-2xl">{{ kpi.icon }}</span>
      </div>
      <p class="text-2xl font-bold text-gray-900 mb-1">{{ kpi.value }}</p>
      <p :class="['text-xs font-medium', kpi.positive ? 'text-emerald-500' : 'text-red-500']">
        {{ kpi.change }} from last month
      </p>
    </div>
  </div>
</template>
