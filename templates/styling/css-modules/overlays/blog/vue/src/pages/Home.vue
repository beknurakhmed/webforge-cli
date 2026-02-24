<script setup lang="ts">
import PostCard from '../components/PostCard.vue'
import BlogSidebar from '../components/BlogSidebar.vue'
import { posts } from '../data'
</script>

<template>
  <div :class="$style.blogLayout">
    <div :class="$style.postsGrid">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <BlogSidebar />
  </div>
</template>

<style module>
.blogLayout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

.postsGrid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
