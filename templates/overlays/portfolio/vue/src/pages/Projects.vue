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
  <section class="section">
    <h2 class="section-title">All Projects</h2>
    <div class="filter-buttons">
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-btn"
        :class="{ active: activeFilter === cat }"
        @click="activeFilter = cat"
      >{{ cat }}</button>
    </div>
    <div class="projects-grid">
      <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
    </div>
  </section>
</template>
