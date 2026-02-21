<script setup lang="ts">
import type { Post } from '../data'

defineProps<{ post: Post }>()
</script>

<template>
  <RouterLink :to="`/post/${post.id}`" class="post-card" style="text-decoration: none; color: inherit;">
    <div class="post-image">{{ post.image }}</div>
    <div class="post-body">
      <div class="post-category">{{ post.category }}</div>
      <div class="post-title">{{ post.title }}</div>
      <div class="post-excerpt">{{ post.excerpt }}</div>
      <div class="post-meta">{{ post.author }} &middot; {{ post.date }} &middot; {{ post.readTime }}</div>
    </div>
  </RouterLink>
</template>
