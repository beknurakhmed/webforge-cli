<script setup lang="ts">
import BlogHeader from './components/BlogHeader.vue'
import BlogFooter from './components/BlogFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <BlogHeader />
    <main class="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
      <RouterView />
    </main>
    <BlogFooter />
  </div>
</template>
