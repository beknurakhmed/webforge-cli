<script setup lang="ts">
const metrics = [
  { label: 'Page Views', value: '124,892', icon: '👁️' },
  { label: 'Bounce Rate', value: '32.4%', icon: '↩️' },
  { label: 'Avg. Session', value: '4m 23s', icon: '⏱️' },
  { label: 'New Visitors', value: '68.7%', icon: '🆕' },
];
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Analytics</h1>
      <p class="text-gray-500">Detailed metrics and performance data.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      <div v-for="m in metrics" :key="m.label" class="bg-white rounded-lg p-6 text-center shadow-sm">
        <span class="text-3xl block mb-2">{{ m.icon }}</span>
        <p class="text-2xl font-bold text-gray-900 mb-1">{{ m.value }}</p>
        <p class="text-sm text-gray-500">{{ m.label }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
      <ChartPlaceholder title="Traffic Sources" />
      <ChartPlaceholder title="User Engagement" />
    </div>

    <ChartPlaceholder title="Monthly Trends" />
  </div>
</template>
