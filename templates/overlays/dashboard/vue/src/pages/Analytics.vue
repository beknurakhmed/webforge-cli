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
    <div class="page-header">
      <h1 class="page-title">Analytics</h1>
      <p class="page-subtitle">Detailed traffic and engagement metrics.</p>
    </div>
    <div class="metrics-row">
      <div v-for="m in metrics" :key="m.label" class="metric-card">
        <p class="metric-value">{{ m.value }}</p>
        <p class="metric-label">{{ m.label }}</p>
      </div>
    </div>
    <div class="charts-grid">
      <ChartPlaceholder title="Traffic Sources" />
      <ChartPlaceholder title="User Engagement" />
    </div>
    <ChartPlaceholder title="Weekly Active Users" />
  </div>
</template>
