<script setup lang="ts">
import ChartPlaceholder from '../components/ChartPlaceholder.vue';

const metrics = [
  { label: 'Avg. Session', value: '4m 32s' },
  { label: 'Bounce Rate', value: '32.1%' },
  { label: 'Page Views', value: '18,420' },
  { label: 'New Visitors', value: '1,105' },
  { label: 'Top Channel', value: 'Organic' },
  { label: 'Goal Completion', value: '68%' },
];
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Analytics</h1>
      <p class="text-gray-500 mt-1">Detailed traffic and engagement metrics.</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      <div v-for="m in metrics" :key="m.label" class="bg-white border border-gray-200 rounded-lg p-5 text-center">
        <p class="text-2xl font-bold text-indigo-600">{{ m.value }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ m.label }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <ChartPlaceholder title="Traffic Sources" />
      <ChartPlaceholder title="User Engagement" />
    </div>
    <ChartPlaceholder title="Weekly Active Users" />
  </div>
</template>
