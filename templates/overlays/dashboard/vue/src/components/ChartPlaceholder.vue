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
  <div class="chart-container">
    <h3 class="chart-title">{{ title }}</h3>
    <div class="chart-bars">
      <div
        v-for="bar in bars"
        :key="bar.label"
        class="chart-bar"
        :style="{ height: bar.height + '%' }"
      >
        <span class="chart-bar-label">{{ bar.label }}</span>
      </div>
    </div>
  </div>
</template>
