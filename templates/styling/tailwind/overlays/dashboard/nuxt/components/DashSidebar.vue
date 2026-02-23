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
  <aside class="w-[250px] bg-gray-900 text-white flex flex-col sticky top-0 h-screen">
    <div class="p-6 flex items-center gap-3 border-b border-gray-800">
      <span class="text-2xl">📋</span>
      <span class="text-lg font-bold">{{projectName}}</span>
    </div>

    <nav class="p-3 flex flex-col gap-1">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all',
          route.path === item.path
            ? 'bg-indigo-600 text-white'
            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        ]"
      >
        <span class="text-lg">{{ item.icon }}</span>
        <span class="text-sm">{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>
