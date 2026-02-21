<script setup lang="ts">
const stats = [
  { label: 'Total Contacts', value: '1,284', icon: '👥', color: '#4f46e5' },
  { label: 'Active Deals', value: '42', icon: '💼', color: '#10b981' },
  { label: 'Revenue', value: '$128,400', icon: '💰', color: '#f59e0b' },
  { label: 'Conversion Rate', value: '24.8%', icon: '📈', color: '#ef4444' },
];
</script>

<template>
  <div class="stats-grid">
    <div v-for="stat in stats" :key="stat.label" class="stat-card">
      <div class="stat-icon" :style="{ backgroundColor: stat.color + '15', color: stat.color }">
        {{ stat.icon }}
      </div>
      <div class="stat-info">
        <p class="stat-value">{{ stat.value }}</p>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
}

.stat-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
}

.stat-label {
  font-size: 0.85rem;
  color: #6b7280;
}
</style>
