<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCssModule } from 'vue';

const route = useRoute();
const style = useCssModule();

const links = [
  { to: '/', icon: '📊', label: 'Dashboard' },
  { to: '/contacts', icon: '👤', label: 'Contacts' },
  { to: '/deals', icon: '💼', label: 'Deals' },
  { to: '/settings', icon: '⚙️', label: 'Settings' },
];

function linkClass(to: string) {
  return route.path === to
    ? [style.navLink, style.navLinkActive]
    : [style.navLink];
}
</script>

<template>
  <aside :class="$style.crmSidebar">
    <div :class="$style.logo">{{projectName}}</div>
    <nav :class="$style.nav">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :class="linkClass(link.to)"
      >
        {{ link.icon }} {{ link.label }}
      </RouterLink>
    </nav>
  </aside>
</template>

<style module>
.crmSidebar {
  width: 240px;
  background: #111827;
  color: #fff;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid #1f2937;
  color: #fff;
}

.nav {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.navLink {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s, color 0.2s;
}

.navLink:hover {
  background: #1f2937;
  color: #fff;
}

.navLinkActive {
  background: #1f2937;
  color: #fff;
  border-left: 3px solid #4f46e5;
}
</style>
