<script setup lang="ts">
const route = useRoute();

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];
</script>

<template>
  <header class="portfolio-nav">
    <div class="nav-inner">
      <NuxtLink to="/" class="logo">🎯 {{projectName}}</NuxtLink>
      <nav class="nav-links">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="['nav-link', { active: route.path === link.path }]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.portfolio-nav {
  background: #111827;
  color: white;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.35rem;
  font-weight: 700;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #9ca3af;
  font-weight: 500;
  padding: 0.35rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.nav-link:hover {
  color: white;
}

.nav-link.active {
  color: white;
  border-bottom-color: #4f46e5;
}
</style>
