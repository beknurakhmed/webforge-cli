<script setup lang="ts">
const projects = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', image: '🛒', tags: ['Vue.js', 'Node.js', 'PostgreSQL'], link: '#' },
  { id: 2, title: 'Task Management App', description: 'Collaborative project management tool with real-time updates and team features.', image: '📋', tags: ['React', 'TypeScript', 'Firebase'], link: '#' },
  { id: 3, title: 'Analytics Dashboard', description: 'Data visualization platform with interactive charts and real-time metrics.', image: '📊', tags: ['Vue.js', 'D3.js', 'Python'], link: '#' },
  { id: 4, title: 'Social Media App', description: 'Mobile-first social platform with real-time messaging and content sharing.', image: '💬', tags: ['React Native', 'GraphQL', 'MongoDB'], link: '#' },
  { id: 5, title: 'Weather Dashboard', description: 'Real-time weather tracking with location-based forecasts and alerts.', image: '🌤️', tags: ['Vue.js', 'API', 'Chart.js'], link: '#' },
  { id: 6, title: 'Portfolio Generator', description: 'CLI tool that generates beautiful portfolio websites from configuration files.', image: '🎯', tags: ['Node.js', 'TypeScript', 'CLI'], link: '#' },
];

const selectedTag = ref('All');

const allTags = computed(() => {
  const tags = new Set<string>();
  projects.forEach(p => p.tags.forEach(t => tags.add(t)));
  return ['All', ...Array.from(tags)];
});

const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') return projects;
  return projects.filter(p => p.tags.includes(selectedTag.value));
});
</script>

<template>
  <div class="projects-page">
    <div class="page-inner">
      <div class="page-header">
        <h1>Projects</h1>
        <p class="subtitle">A collection of my recent work and side projects.</p>
      </div>

      <div class="filter-bar">
        <button
          v-for="tag in allTags"
          :key="tag"
          :class="['filter-btn', { active: selectedTag === tag }]"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  padding: 2rem 1.5rem;
}

.page-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  font-size: 1.1rem;
}

.filter-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: #4f46e5;
  color: #4f46e5;
}

.filter-btn.active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
