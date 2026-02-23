<script setup lang="ts">
defineProps<{
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
}>();
</script>

<template>
  <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center p-10">
      <span class="text-6xl">{{ project.image }}</span>
    </div>
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span v-for="tag in project.tags" :key="tag" class="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">{{ tag }}</span>
      </div>
      <a :href="project.link" class="text-indigo-600 font-semibold text-sm hover:text-indigo-700 hover:underline transition-colors" target="_blank" rel="noopener">
        View Project →
      </a>
    </div>
  </div>
</template>
