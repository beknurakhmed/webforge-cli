<script setup lang="ts">
const stats = [
  { label: 'Total Contacts', value: '1,284', icon: '👥', color: '#4f46e5' },
  { label: 'Active Deals', value: '42', icon: '💼', color: '#10b981' },
  { label: 'Revenue', value: '$128,400', icon: '💰', color: '#f59e0b' },
  { label: 'Conversion Rate', value: '24.8%', icon: '📈', color: '#ef4444' },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
    <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4">
      <div
        class="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
        :style="{ backgroundColor: stat.color + '15', color: stat.color }"
      >
        {{ stat.icon }}
      </div>
      <div>
        <p class="text-xl font-bold text-gray-900">{{ stat.value }}</p>
        <p class="text-sm text-gray-500">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>
