<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import { projects } from '../data'

const featured = projects.slice(0, 3)
</script>

<template>
  <div>
    <section class="bg-gray-900 text-white text-center py-16 px-6">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-3">Hi, I'm <span class="text-indigo-600">a Developer</span></h1>
      <p class="text-lg text-gray-400 max-w-xl mx-auto mb-6">I build modern web applications with clean code and great user experiences.</p>
      <RouterLink to="/projects" class="inline-block bg-indigo-600 text-white px-7 py-3 rounded-md font-semibold text-sm no-underline transition-colors hover:bg-indigo-700">View My Work</RouterLink>
    </section>
    <section class="max-w-5xl mx-auto py-12 px-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in featured" :key="project.id" :project="project" />
      </div>
    </section>
    <section class="max-w-5xl mx-auto py-12 px-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Skills</h2>
      <SkillsGrid />
    </section>
  </div>
</template>
