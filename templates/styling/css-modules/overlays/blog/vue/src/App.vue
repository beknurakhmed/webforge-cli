<script setup lang="ts">
import BlogHeader from './components/BlogHeader.vue'
import BlogFooter from './components/BlogFooter.vue'
</script>

<template>
  <div :class="$style.blogApp">
    <BlogHeader />
    <main :class="$style.blogMain">
      <RouterView />
    </main>
    <BlogFooter />
  </div>
</template>

<style module>
.blogApp {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.blogMain {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
