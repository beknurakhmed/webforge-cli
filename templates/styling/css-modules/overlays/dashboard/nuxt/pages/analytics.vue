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
    <div :class="$style.pageHeader">
      <h1>Analytics</h1>
      <p :class="$style.subtitle">Detailed metrics and performance data.</p>
    </div>

    <div :class="$style.metricsGrid">
      <div v-for="m in metrics" :key="m.label" :class="$style.metricCard">
        <span :class="$style.metricIcon">{{ m.icon }}</span>
        <p :class="$style.metricValue">{{ m.value }}</p>
        <p :class="$style.metricLabel">{{ m.label }}</p>
      </div>
    </div>

    <div :class="$style.chartsRow">
      <ChartPlaceholder title="Traffic Sources" />
      <ChartPlaceholder title="User Engagement" />
    </div>

    <ChartPlaceholder title="Monthly Trends" />
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 2rem;
}

.pageHeader h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #6b7280;
}

.metricsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.metricCard {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.metricIcon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.metricValue {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
}

.metricLabel {
  font-size: 0.85rem;
  color: #6b7280;
}

.chartsRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .chartsRow {
    grid-template-columns: 1fr;
  }
}
</style>
