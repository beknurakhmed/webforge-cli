<script setup lang="ts">
import PostCard from '../components/PostCard.vue'
import BlogSidebar from '../components/BlogSidebar.vue'
import { posts } from '../data'
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
    <div class="flex flex-col gap-6">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <BlogSidebar />
  </div>
</template>
