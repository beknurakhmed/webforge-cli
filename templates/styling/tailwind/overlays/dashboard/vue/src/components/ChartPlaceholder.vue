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
  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
    <h3 class="text-base font-semibold text-gray-900 mb-4">{{ title }}</h3>
    <div class="flex items-end gap-2 h-40 pt-4">
      <div
        v-for="bar in bars"
        :key="bar.label"
        class="flex-1 bg-indigo-600 rounded-t min-w-[20px] relative transition-opacity hover:opacity-80"
        :style="{ height: bar.height + '%' }"
      >
        <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">{{ bar.label }}</span>
      </div>
    </div>
  </div>
</template>
