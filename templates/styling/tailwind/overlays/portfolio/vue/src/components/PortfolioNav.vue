<script setup lang="ts">
</script>

<template>
  <div class="bg-gray-900">
    <div class="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
      <RouterLink to="/" class="text-xl font-bold text-white no-underline">{{projectName}}</RouterLink>
      <nav class="flex gap-6">
        <RouterLink to="/" class="text-gray-400 text-sm font-medium no-underline transition-colors hover:text-white [&.router-link-exact-active]:text-white">Home</RouterLink>
        <RouterLink to="/projects" class="text-gray-400 text-sm font-medium no-underline transition-colors hover:text-white [&.router-link-exact-active]:text-white">Projects</RouterLink>
        <RouterLink to="/about" class="text-gray-400 text-sm font-medium no-underline transition-colors hover:text-white [&.router-link-exact-active]:text-white">About</RouterLink>
        <RouterLink to="/contact" class="text-gray-400 text-sm font-medium no-underline transition-colors hover:text-white [&.router-link-exact-active]:text-white">Contact</RouterLink>
      </nav>
    </div>
  </div>
</template>
