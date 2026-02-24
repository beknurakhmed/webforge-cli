<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, useCssModule } from 'vue';

const route = useRoute();
const style = useCssModule();

const links = [
  { to: '/', icon: '📊', label: 'Overview' },
  { to: '/analytics', icon: '📈', label: 'Analytics' },
  { to: '/users', icon: '👥', label: 'Users' },
  { to: '/settings', icon: '⚙️', label: 'Settings' },
];

function linkClass(to: string) {
  return route.path === to ? [style.sidebarLink, style.sidebarLinkActive] : [style.sidebarLink];
}
</script>

<template>
  <aside :class="$style.sidebar">
    <div :class="$style.sidebarBrand">{{projectName}}</div>
    <nav :class="$style.sidebarNav">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :class="linkClass(link.to)"
      >
        <span :class="$style.sidebarIcon">{{ link.icon }}</span> {{ link.label }}
      </RouterLink>
    </nav>
  </aside>
</template>

<style module>
.sidebar {
  width: 260px;
  background: #111827;
  color: #d1d5db;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: sticky;
  top: 0;
}

.sidebarBrand {
  padding: 1.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  border-bottom: 1px solid #1f2937;
}

.sidebarNav {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 0.25rem;
}

.sidebarLink {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: #9ca3af;
  font-weight: 500;
  transition: all 0.2s;
}

.sidebarLink:hover {
  background: #1f2937;
  color: #ffffff;
}

.sidebarLinkActive {
  background: #4f46e5;
  color: #ffffff;
}

.sidebarLinkActive:hover {
  background: #4f46e5;
  color: #ffffff;
}

.sidebarIcon {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    min-height: auto;
    position: relative;
  }

  .sidebarNav {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem;
  }

  .sidebarLink {
    padding: 0.5rem 1rem;
  }
}
</style>
