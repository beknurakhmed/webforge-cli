<script setup lang="ts">
const route = useRoute();

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];
</script>

<template>
  <header class="bg-gray-900 text-white px-6 sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-16">
      <NuxtLink to="/" class="text-xl font-bold text-white">🎯 {{projectName}}</NuxtLink>
      <nav class="flex gap-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'font-medium py-1 border-b-2 transition-all',
            route.path === link.path
              ? 'text-white border-indigo-600'
              : 'text-gray-400 border-transparent hover:text-white'
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
