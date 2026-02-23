<script setup lang="ts">
defineProps<{
  cartCount: number;
}>();
</script>

<template>
  <header class="bg-gray-900 text-white px-4 sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-16">
      <NuxtLink to="/" class="text-xl font-bold text-white">🛍️ {{projectName}}</NuxtLink>
      <nav class="flex items-center gap-6">
        <NuxtLink to="/" class="text-gray-300 font-medium hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/cart" class="text-gray-300 font-medium flex items-center gap-1.5 hover:text-white transition-colors">
          🛒 Cart
          <span v-if="cartCount > 0" class="bg-indigo-600 text-white text-xs font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1.5">{{ cartCount }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
