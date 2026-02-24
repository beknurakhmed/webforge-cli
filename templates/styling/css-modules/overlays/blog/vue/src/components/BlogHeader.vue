<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCssModule } from 'vue';

const route = useRoute();
const style = useCssModule();

function navLinkClass(path: string) {
  return route.path === path
    ? [style.navLink, style.navLinkActive]
    : [style.navLink];
}
</script>

<template>
  <div :class="$style.blogHeaderWrap">
    <header :class="$style.blogHeader">
      <RouterLink to="/" :class="$style.logo" style="text-decoration: none;">{{projectName}}</RouterLink>
      <nav :class="$style.nav">
        <RouterLink to="/" :class="navLinkClass('/')">Home</RouterLink>
        <RouterLink to="/about" :class="navLinkClass('/about')">About</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style module>
.blogHeaderWrap {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.blogHeader {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.logo {
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.navLink {
  color: #6b7280;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
}

.navLink:hover {
  color: #4f46e5;
  text-decoration: none;
}

.navLinkActive {
  color: #4f46e5;
}
</style>
