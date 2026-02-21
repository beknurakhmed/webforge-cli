<script setup lang="ts">
defineProps<{
  title: string;
}>();

const bars = [
  { label: 'Mon', height: 65 },
  { label: 'Tue', height: 80 },
  { label: 'Wed', height: 45 },
  { label: 'Thu', height: 90 },
  { label: 'Fri', height: 70 },
  { label: 'Sat', height: 55 },
  { label: 'Sun', height: 75 },
];
</script>

<template>
  <div class="chart-card">
    <h3 class="chart-title">{{ title }}</h3>
    <div class="chart-area">
      <div v-for="bar in bars" :key="bar.label" class="bar-wrapper">
        <div class="bar" :style="{ height: bar.height + '%' }"></div>
        <span class="bar-label">{{ bar.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.chart-title {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 1.5rem;
}

.chart-area {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  height: 200px;
  padding-top: 1rem;
}

.bar-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
}

.bar {
  width: 100%;
  max-width: 40px;
  background: linear-gradient(180deg, #4f46e5, #818cf8);
  border-radius: 4px 4px 0 0;
  transition: height 0.3s ease;
}

.bar-label {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.5rem;
}
</style>
