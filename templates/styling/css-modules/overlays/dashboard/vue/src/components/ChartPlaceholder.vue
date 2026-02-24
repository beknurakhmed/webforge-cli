<script setup lang="ts">
defineProps<{ title: string }>();

const bars = [
  { label: 'Jan', height: 40 },
  { label: 'Feb', height: 65 },
  { label: 'Mar', height: 50 },
  { label: 'Apr', height: 80 },
  { label: 'May', height: 60 },
  { label: 'Jun', height: 90 },
  { label: 'Jul', height: 75 },
  { label: 'Aug', height: 55 },
  { label: 'Sep', height: 85 },
  { label: 'Oct', height: 70 },
  { label: 'Nov', height: 95 },
  { label: 'Dec', height: 68 },
];
</script>

<template>
  <div :class="$style.chartContainer">
    <h3 :class="$style.chartTitle">{{ title }}</h3>
    <div :class="$style.chartBars">
      <div
        v-for="bar in bars"
        :key="bar.label"
        :class="$style.chartBar"
        :style="{ height: bar.height + '%' }"
      >
        <span :class="$style.chartBarLabel">{{ bar.label }}</span>
      </div>
    </div>
  </div>
</template>

<style module>
.chartContainer {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.chartTitle {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.chartBars {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 160px;
  padding-top: 1rem;
}

.chartBar {
  flex: 1;
  background: #4f46e5;
  border-radius: 4px 4px 0 0;
  min-width: 20px;
  transition: opacity 0.2s;
  position: relative;
}

.chartBar:hover {
  opacity: 0.8;
}

.chartBarLabel {
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: #6b7280;
  white-space: nowrap;
}
</style>
