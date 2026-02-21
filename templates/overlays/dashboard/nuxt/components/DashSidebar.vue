<script setup lang="ts">
const route = useRoute();

const navItems = [
  { path: '/', label: 'Overview', icon: '📊' },
  { path: '/analytics', label: 'Analytics', icon: '📈' },
  { path: '/users', label: 'Users', icon: '👥' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
];
</script>

<template>
  <aside class="dash-sidebar">
    <div class="sidebar-logo">
      <span class="logo-icon">📋</span>
      <span class="logo-text">{{projectName}}</span>
    </div>

    <nav class="sidebar-nav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="['nav-item', { active: route.path === item.path }]"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<style scoped>
.dash-sidebar {
  width: 250px;
  background: #111827;
  color: white;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar-logo {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #1f2937;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 700;
}

.sidebar-nav {
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #9ca3af;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #1f2937;
  color: white;
}

.nav-item.active {
  background: #4f46e5;
  color: white;
}

.nav-icon {
  font-size: 1.15rem;
}

.nav-label {
  font-size: 0.95rem;
}
</style>
