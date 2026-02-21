<template>
  <header class="blog-header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">📝 {{projectName}}</NuxtLink>
      <nav class="header-nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.blog-header {
  background: #111827;
  color: white;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.header-inner {
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

.header-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #d1d5db;
  font-weight: 500;
  font-family: 'Segoe UI', system-ui, sans-serif;
  transition: color 0.2s;
}

.nav-link:hover {
  color: white;
}
</style>
