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
  <div class="bg-white rounded-lg p-6 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 mb-6">{{ title }}</h3>
    <div class="flex items-end gap-4 h-[200px] pt-4">
      <div v-for="bar in bars" :key="bar.label" class="flex-1 flex flex-col items-center h-full justify-end">
        <div
          class="w-full max-w-[40px] bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t transition-all duration-300"
          :style="{ height: bar.height + '%' }"
        ></div>
        <span class="text-xs text-gray-500 mt-2">{{ bar.label }}</span>
      </div>
    </div>
  </div>
</template>
