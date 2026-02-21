<script setup lang="ts">
const kpis = [
  { label: 'Total Revenue', value: '$54,230', change: '+12.5%', icon: '💰', positive: true },
  { label: 'Active Users', value: '2,345', change: '+8.1%', icon: '👥', positive: true },
  { label: 'Orders', value: '1,247', change: '+23.4%', icon: '📦', positive: true },
  { label: 'Conversion', value: '3.24%', change: '-0.8%', icon: '📈', positive: false },
];
</script>

<template>
  <div class="kpi-grid">
    <div v-for="kpi in kpis" :key="kpi.label" class="kpi-card">
      <div class="kpi-header">
        <span class="kpi-label">{{ kpi.label }}</span>
        <span class="kpi-icon">{{ kpi.icon }}</span>
      </div>
      <p class="kpi-value">{{ kpi.value }}</p>
      <p :class="['kpi-change', kpi.positive ? 'positive' : 'negative']">
        {{ kpi.change }} from last month
      </p>
    </div>
  </div>
</template>

<style scoped>
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.kpi-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.kpi-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.kpi-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.kpi-icon {
  font-size: 1.5rem;
}

.kpi-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.35rem;
}

.kpi-change {
  font-size: 0.8rem;
  font-weight: 500;
}

.kpi-change.positive {
  color: #10b981;
}

.kpi-change.negative {
  color: #ef4444;
}
</style>
