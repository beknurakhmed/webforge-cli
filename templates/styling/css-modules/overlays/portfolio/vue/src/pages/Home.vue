<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import { projects } from '../data'

const featured = projects.slice(0, 3)
</script>

<template>
  <div>
    <section :class="$style.hero">
      <h1>Hi, I'm <span :class="$style.heroAccent">a Developer</span></h1>
      <p>I build modern web applications with clean code and great user experiences.</p>
      <RouterLink to="/projects" :class="$style.heroCta">View My Work</RouterLink>
    </section>
    <section :class="$style.section">
      <h2 :class="$style.sectionTitle">Featured Projects</h2>
      <div :class="$style.projectsGrid">
        <ProjectCard v-for="project in featured" :key="project.id" :project="project" />
      </div>
    </section>
    <section :class="$style.section">
      <h2 :class="$style.sectionTitle">Skills</h2>
      <SkillsGrid />
    </section>
  </div>
</template>

<style module>
.hero {
  background: #111827;
  color: #fff;
  text-align: center;
  padding: 4rem 1.5rem 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.heroAccent {
  color: #4f46e5;
}

.hero p {
  font-size: 1.15rem;
  color: #9ca3af;
  max-width: 560px;
  margin: 0 auto 1.5rem;
}

.heroCta {
  display: inline-block;
  background: #4f46e5;
  color: #fff;
  padding: 0.7rem 1.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s;
}

.heroCta:hover {
  background: #4338ca;
}

.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.sectionTitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
