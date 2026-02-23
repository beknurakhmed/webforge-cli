<script setup lang="ts">
import { skills } from '../data'
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="group in skills" :key="group.category" class="bg-white rounded-lg p-5 shadow-sm">
      <h3 class="text-xs uppercase tracking-wider text-indigo-600 font-semibold mb-3">{{ group.category }}</h3>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="item in group.items" :key="item" class="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
