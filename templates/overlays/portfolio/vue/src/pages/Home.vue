<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import { projects } from '../data'

const featured = projects.slice(0, 3)
</script>

<template>
  <div>
    <section class="hero">
      <h1>Hi, I'm <span>a Developer</span></h1>
      <p>I build modern web applications with clean code and great user experiences.</p>
      <RouterLink to="/projects" class="hero-cta">View My Work</RouterLink>
    </section>
    <section class="section">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <ProjectCard v-for="project in featured" :key="project.id" :project="project" />
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Skills</h2>
      <SkillsGrid />
    </section>
  </div>
</template>
