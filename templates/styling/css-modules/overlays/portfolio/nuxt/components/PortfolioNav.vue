<script setup lang="ts">
const route = useRoute();
const style = useCssModule();

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function linkClass(path: string) {
  return route.path === path
    ? [style.navLink, style.navLinkActive]
    : [style.navLink];
}
</script>

<template>
  <header :class="$style.portfolioNav">
    <div :class="$style.navInner">
      <NuxtLink to="/" :class="$style.logo">{{projectName}}</NuxtLink>
      <nav :class="$style.navLinks">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="linkClass(link.path)"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style module>
.portfolioNav {
  background: #111827;
  color: white;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.navInner {
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

.navLinks {
  display: flex;
  gap: 1.5rem;
}

.navLink {
  color: #9ca3af;
  font-weight: 500;
  padding: 0.35rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.navLink:hover {
  color: white;
}

.navLinkActive {
  color: white;
  border-bottom-color: #4f46e5;
}
</style>
