<script setup lang="ts">
import PostCard from '../components/PostCard.vue'
import BlogSidebar from '../components/BlogSidebar.vue'
import { posts } from '../data'
</script>

<template>
  <div class="blog-layout">
    <div class="posts-grid">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <BlogSidebar />
  </div>
</template>
