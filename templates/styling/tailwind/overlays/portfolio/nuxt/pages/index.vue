<script setup lang="ts">
const featuredProjects = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', image: '🛒', tags: ['Vue.js', 'Node.js', 'PostgreSQL'], link: '#' },
  { id: 2, title: 'Task Management App', description: 'Collaborative project management tool with real-time updates and team features.', image: '📋', tags: ['React', 'TypeScript', 'Firebase'], link: '#' },
  { id: 3, title: 'Analytics Dashboard', description: 'Data visualization platform with interactive charts and real-time metrics.', image: '📊', tags: ['Vue.js', 'D3.js', 'Python'], link: '#' },
];
</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-gray-900 to-slate-800 text-white py-20 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <p class="text-lg text-indigo-400 font-semibold mb-2">Hello, I'm</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">A Creative Developer</h1>
        <p class="text-lg text-gray-300 leading-relaxed mb-8">
          I build beautiful, performant web applications with modern technologies.
          Passionate about clean code, great design, and user experience.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/projects" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">View Projects</NuxtLink>
          <NuxtLink to="/contact" class="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-600 transition-colors">Get in Touch</NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Featured Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/projects" class="text-indigo-600 font-semibold text-lg hover:text-indigo-700 hover:underline transition-colors">View All Projects →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
