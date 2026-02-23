<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data'

const activeFilter = ref('All')

const categories = ['All', ...new Set(projects.map(p => p.category))]

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<template>
  <section class="max-w-5xl mx-auto py-12 px-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">All Projects</h2>
    <div class="flex justify-center flex-wrap gap-2 mb-6">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="[
          'px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all border',
          activeFilter === cat
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-gray-500 border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
        ]"
        @click="activeFilter = cat"
      >{{ cat }}</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
    </div>
  </section>
</template>
