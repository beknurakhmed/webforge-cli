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
    <div :class="$style.pageHeader">
      <h1 :class="$style.pageTitle">Analytics</h1>
      <p :class="$style.pageSubtitle">Detailed traffic and engagement metrics.</p>
    </div>
    <div :class="$style.metricsRow">
      <div v-for="m in metrics" :key="m.label" :class="$style.metricCard">
        <p :class="$style.metricValue">{{ m.value }}</p>
        <p :class="$style.metricLabel">{{ m.label }}</p>
      </div>
    </div>
    <div :class="$style.chartsGrid">
      <ChartPlaceholder title="Traffic Sources" />
      <ChartPlaceholder title="User Engagement" />
    </div>
    <ChartPlaceholder title="Weekly Active Users" />
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 2rem;
}

.pageTitle {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.pageSubtitle {
  color: #6b7280;
  margin-top: 0.25rem;
}

.metricsRow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.metricCard {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.25rem;
  text-align: center;
}

.metricValue {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
}

.metricLabel {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.chartsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .chartsGrid {
    grid-template-columns: 1fr;
  }
}
</style>
