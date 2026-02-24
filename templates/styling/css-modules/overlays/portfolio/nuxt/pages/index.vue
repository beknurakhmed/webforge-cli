<script setup lang="ts">
const featuredProjects = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', image: '🛒', tags: ['Vue.js', 'Node.js', 'PostgreSQL'], link: '#' },
  { id: 2, title: 'Task Management App', description: 'Collaborative project management tool with real-time updates and team features.', image: '📋', tags: ['React', 'TypeScript', 'Firebase'], link: '#' },
  { id: 3, title: 'Analytics Dashboard', description: 'Data visualization platform with interactive charts and real-time metrics.', image: '📊', tags: ['Vue.js', 'D3.js', 'Python'], link: '#' },
];
</script>

<template>
  <div>
    <section :class="$style.hero">
      <div :class="$style.heroInner">
        <p :class="$style.heroGreeting">Hello, I'm</p>
        <h1 :class="$style.heroName">A Creative Developer</h1>
        <p :class="$style.heroTagline">
          I build beautiful, performant web applications with modern technologies.
          Passionate about clean code, great design, and user experience.
        </p>
        <div :class="$style.heroActions">
          <NuxtLink to="/projects" :class="$style.btnPrimary">View Projects</NuxtLink>
          <NuxtLink to="/contact" :class="$style.btnSecondary">Get in Touch</NuxtLink>
        </div>
      </div>
    </section>

    <section :class="$style.featuredSection">
      <div :class="$style.sectionInner">
        <h2 :class="$style.sectionTitle">Featured Projects</h2>
        <div :class="$style.projectsGrid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div :class="$style.sectionCta">
          <NuxtLink to="/projects" :class="$style.viewAllLink">View All Projects &rarr;</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style module>
.hero {
  background: linear-gradient(135deg, #111827, #1e293b);
  color: white;
  padding: 5rem 1.5rem;
  text-align: center;
}

.heroInner {
  max-width: 700px;
  margin: 0 auto;
}

.heroGreeting {
  font-size: 1.1rem;
  color: #818cf8;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.heroName {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.heroTagline {
  font-size: 1.15rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.heroActions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btnPrimary {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btnPrimary:hover {
  background: #4338ca;
}

.btnSecondary {
  background: transparent;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #4f46e5;
  transition: all 0.2s;
}

.btnSecondary:hover {
  background: #4f46e5;
}

.featuredSection {
  padding: 4rem 1.5rem;
}

.sectionInner {
  max-width: 1200px;
  margin: 0 auto;
}

.sectionTitle {
  font-size: 2rem;
  color: #111827;
  text-align: center;
  margin-bottom: 2rem;
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.sectionCta {
  text-align: center;
  margin-top: 2rem;
}

.viewAllLink {
  color: #4f46e5;
  font-weight: 600;
  font-size: 1.05rem;
  transition: color 0.2s;
}

.viewAllLink:hover {
  color: #4338ca;
  text-decoration: underline;
}

@media (max-width: 640px) {
  .heroName {
    font-size: 2rem;
  }

  .heroActions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
