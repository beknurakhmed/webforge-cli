<script setup lang="ts">
const kpis = [
  { label: 'Total Revenue', value: '$54,230', change: '+12.5%', icon: '💰', positive: true },
  { label: 'Active Users', value: '2,345', change: '+8.1%', icon: '👥', positive: true },
  { label: 'Orders', value: '1,247', change: '+23.4%', icon: '📦', positive: true },
  { label: 'Conversion', value: '3.24%', change: '-0.8%', icon: '📈', positive: false },
];
</script>

<template>
  <div :class="$style.kpiGrid">
    <div v-for="kpi in kpis" :key="kpi.label" :class="$style.kpiCard">
      <div :class="$style.kpiHeader">
        <span :class="$style.kpiLabel">{{ kpi.label }}</span>
        <span :class="$style.kpiIcon">{{ kpi.icon }}</span>
      </div>
      <p :class="$style.kpiValue">{{ kpi.value }}</p>
      <p :class="kpi.positive ? $style.kpiChangePositive : $style.kpiChangeNegative">
        {{ kpi.change }} from last month
      </p>
    </div>
  </div>
</template>

<style module>
.kpiGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.kpiCard {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.kpiHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.kpiLabel {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.kpiIcon {
  font-size: 1.5rem;
}

.kpiValue {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.35rem;
}

.kpiChangePositive {
  font-size: 0.8rem;
  font-weight: 500;
  color: #10b981;
}

.kpiChangeNegative {
  font-size: 0.8rem;
  font-weight: 500;
  color: #ef4444;
}
</style>
