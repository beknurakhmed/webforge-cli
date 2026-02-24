<script setup lang="ts">
const route = useRoute();
const style = useCssModule();

function linkClass(to: string) {
  return route.path === to
    ? [style.navLink, style.navLinkActive]
    : [style.navLink];
}
</script>

<template>
  <header :class="$style.blogHeader">
    <div :class="$style.headerInner">
      <NuxtLink to="/" :class="$style.logo">{{projectName}}</NuxtLink>
      <nav :class="$style.headerNav">
        <NuxtLink to="/" :class="linkClass('/')">Home</NuxtLink>
        <NuxtLink to="/about" :class="linkClass('/about')">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style module>
.blogHeader {
  background: #111827;
  color: white;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.headerInner {
  max-width: 1100px;
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
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.headerNav {
  display: flex;
  gap: 1.5rem;
}

.navLink {
  color: #d1d5db;
  font-weight: 500;
  font-family: 'Segoe UI', system-ui, sans-serif;
  transition: color 0.2s;
}

.navLink:hover {
  color: white;
}

.navLinkActive {
  color: white;
}
</style>
