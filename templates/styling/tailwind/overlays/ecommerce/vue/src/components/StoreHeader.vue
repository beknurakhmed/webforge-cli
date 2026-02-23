<script setup lang="ts">
defineProps<{ cartCount: number }>();
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-20">
    <div class="max-w-6xl mx-auto px-8 py-4 flex items-center gap-8 flex-wrap">
      <RouterLink to="/" class="text-2xl font-bold text-indigo-600 no-underline">{{projectName}}</RouterLink>
      <nav class="flex gap-6 ml-auto items-center">
        <RouterLink to="/" class="text-gray-500 font-medium no-underline transition-colors hover:text-indigo-600">Home</RouterLink>
        <RouterLink to="/cart" class="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold no-underline hover:bg-indigo-700 transition-colors">Cart ({{ cartCount }})</RouterLink>
      </nav>
    </div>
  </header>
</template>
