<script setup lang="ts">
const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];
</script>

<template>
  <div :class="$style.kpiGrid">
    <div v-for="kpi in kpis" :key="kpi.label" :class="$style.kpiCard">
      <p :class="$style.kpiLabel">{{ kpi.label }}</p>
      <p :class="$style.kpiValue">{{ kpi.value }}</p>
      <p :class="kpi.positive ? $style.kpiChangePositive : $style.kpiChangeNegative">{{ kpi.change }}</p>
    </div>
  </div>
</template>

<style module>
.kpiGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.kpiCard {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
}

.kpiLabel {
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.kpiValue {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.kpiChangePositive {
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.25rem;
  color: #059669;
}

.kpiChangeNegative {
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.25rem;
  color: #dc2626;
}
</style>
