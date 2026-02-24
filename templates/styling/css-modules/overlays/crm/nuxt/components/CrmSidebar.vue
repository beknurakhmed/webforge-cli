<script setup lang="ts">
const route = useRoute();
const style = useCssModule();

const navItems = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/contacts', label: 'Contacts', icon: '👤' },
  { path: '/deals', label: 'Deals', icon: '💼' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
];

function navItemClass(path: string) {
  return route.path === path
    ? [style.navItem, style.navItemActive]
    : [style.navItem];
}
</script>

<template>
  <aside :class="$style.crmSidebar">
    <div :class="$style.sidebarLogo">
      <span :class="$style.logoIcon">🤝</span>
      <span :class="$style.logoText">{{projectName}}</span>
    </div>

    <nav :class="$style.sidebarNav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="navItemClass(item.path)"
      >
        <span :class="$style.navIcon">{{ item.icon }}</span>
        <span :class="$style.navLabel">{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<style module>
.crmSidebar { width: 250px; background: #111827; color: white; display: flex; flex-direction: column; position: sticky; top: 0; height: 100vh; }
.sidebarLogo { padding: 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid #1f2937; }
.logoIcon { font-size: 1.5rem; }
.logoText { font-size: 1.2rem; font-weight: 700; }
.sidebarNav { padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; }
.navItem { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 8px; color: #9ca3af; font-weight: 500; transition: all 0.2s; }
.navItem:hover { background: #1f2937; color: white; }
.navItemActive { background: #4f46e5; color: white; }
.navItemActive:hover { background: #4f46e5; }
.navIcon { font-size: 1.15rem; }
.navLabel { font-size: 0.95rem; }
</style>
