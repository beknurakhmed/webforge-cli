<script setup lang="ts">
import type { Project } from '../data'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
    <div class="bg-indigo-50 h-36 flex items-center justify-center text-5xl">{{ project.image }}</div>
    <div class="p-5">
      <div class="text-lg font-bold text-gray-900 mb-1.5">{{ project.title }}</div>
      <div class="text-sm text-gray-500 mb-3 leading-relaxed">{{ project.description }}</div>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="tag in project.tags" :key="tag" class="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
