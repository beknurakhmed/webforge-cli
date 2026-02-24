<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCssModule } from 'vue';

const route = useRoute();
const style = useCssModule();

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function navLinkClass(to: string) {
  return route.path === to
    ? [style.navLink, style.navLinkActive]
    : [style.navLink];
}
</script>

<template>
  <div :class="$style.portfolioNavWrap">
    <div :class="$style.portfolioNav">
      <RouterLink to="/" :class="$style.logo">{{projectName}}</RouterLink>
      <nav :class="$style.nav">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="navLinkClass(link.to)"
        >{{ link.label }}</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style module>
.portfolioNavWrap {
  background: #111827;
}

.portfolioNav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.navLink {
  color: #9ca3af;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.navLink:hover {
  color: #fff;
}

.navLinkActive {
  color: #fff;
}
</style>
