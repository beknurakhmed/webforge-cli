<script setup lang="ts">
import BlogHeader from './components/BlogHeader.vue'
import BlogFooter from './components/BlogFooter.vue'
</script>

<template>
  <div class="blog-app">
    <BlogHeader />
    <main class="blog-main">
      <RouterView />
    </main>
    <BlogFooter />
  </div>
</template>

<style scoped>
.blog-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.blog-main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
