<script setup lang="ts">
</script>

<template>
  <div class="bg-white border-b border-gray-200">
    <header class="max-w-5xl w-full mx-auto px-8 py-4 flex items-center justify-between">
      <RouterLink to="/" class="text-xl font-bold text-gray-900 no-underline">{{projectName}}</RouterLink>
      <nav class="flex gap-6">
        <RouterLink to="/" class="text-gray-500 font-medium text-sm no-underline transition-colors hover:text-indigo-600 [&.router-link-exact-active]:text-indigo-600">Home</RouterLink>
        <RouterLink to="/about" class="text-gray-500 font-medium text-sm no-underline transition-colors hover:text-indigo-600 [&.router-link-exact-active]:text-indigo-600">About</RouterLink>
      </nav>
    </header>
  </div>
</template>
