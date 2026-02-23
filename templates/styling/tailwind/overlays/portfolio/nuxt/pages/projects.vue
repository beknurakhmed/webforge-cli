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
  <div class="py-8 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p class="text-gray-500 text-lg">A collection of my recent work and side projects.</p>
      </div>

      <div class="flex justify-center flex-wrap gap-2 mb-8">
        <button
          v-for="tag in allTags"
          :key="tag"
          :class="[
            'px-4 py-2 border rounded-full text-sm font-medium cursor-pointer transition-all',
            selectedTag === tag
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
          ]"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>
