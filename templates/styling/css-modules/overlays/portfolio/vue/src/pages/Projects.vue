<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCssModule } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data'

const style = useCssModule()
const activeFilter = ref('All')

const categories = ['All', ...new Set(projects.map(p => p.category))]

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

function filterBtnClass(cat: string) {
  return activeFilter.value === cat
    ? [style.filterBtn, style.filterBtnActive]
    : [style.filterBtn]
}
</script>

<template>
  <section :class="$style.section">
    <h2 :class="$style.sectionTitle">All Projects</h2>
    <div :class="$style.filterButtons">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="filterBtnClass(cat)"
        @click="activeFilter = cat"
      >{{ cat }}</button>
    </div>
    <div :class="$style.projectsGrid">
      <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<style module>
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

.filterButtons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filterBtn {
  padding: 0.4rem 1rem;
  border: 1px solid #d1d5db;
  background: #fff;
  border-radius: 9999px;
  font-size: 0.85rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.filterBtn:hover {
  border-color: #4f46e5;
  color: #4f46e5;
}

.filterBtnActive {
  background: #4f46e5;
  color: #fff;
  border-color: #4f46e5;
}

.filterBtnActive:hover {
  background: #4f46e5;
  color: #fff;
  border-color: #4f46e5;
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
