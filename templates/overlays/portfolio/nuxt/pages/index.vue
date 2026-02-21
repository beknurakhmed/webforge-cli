<script setup lang="ts">
const featuredProjects = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', image: '🛒', tags: ['Vue.js', 'Node.js', 'PostgreSQL'], link: '#' },
  { id: 2, title: 'Task Management App', description: 'Collaborative project management tool with real-time updates and team features.', image: '📋', tags: ['React', 'TypeScript', 'Firebase'], link: '#' },
  { id: 3, title: 'Analytics Dashboard', description: 'Data visualization platform with interactive charts and real-time metrics.', image: '📊', tags: ['Vue.js', 'D3.js', 'Python'], link: '#' },
];
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-greeting">Hello, I'm</p>
        <h1 class="hero-name">A Creative Developer</h1>
        <p class="hero-tagline">
          I build beautiful, performant web applications with modern technologies.
          Passionate about clean code, great design, and user experience.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/projects" class="btn-primary">View Projects</NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">Get in Touch</NuxtLink>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="section-inner">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div class="section-cta">
          <NuxtLink to="/projects" class="view-all-link">View All Projects →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #111827, #1e293b);
  color: white;
  padding: 5rem 1.5rem;
  text-align: center;
}

.hero-inner {
  max-width: 700px;
  margin: 0 auto;
}

.hero-greeting {
  font-size: 1.1rem;
  color: #818cf8;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-tagline {
  font-size: 1.15rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #4338ca;
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #4f46e5;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #4f46e5;
}

.featured-section {
  padding: 4rem 1.5rem;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  color: #111827;
  text-align: center;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.section-cta {
  text-align: center;
  margin-top: 2rem;
}

.view-all-link {
  color: #4f46e5;
  font-weight: 600;
  font-size: 1.05rem;
  transition: color 0.2s;
}

.view-all-link:hover {
  color: #4338ca;
  text-decoration: underline;
}

@media (max-width: 640px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
