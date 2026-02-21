<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../data'

const route = useRoute()
const post = computed(() => posts.find(p => p.id === Number(route.params.id)))
</script>

<template>
  <div class="post-detail" v-if="post">
    <RouterLink to="/" class="back-link">&larr; Back to posts</RouterLink>
    <div class="post-hero-image">{{ post.image }}</div>
    <h1>{{ post.title }}</h1>
    <div class="detail-meta">{{ post.author }} &middot; {{ post.date }} &middot; {{ post.readTime }}</div>
    <div class="post-content">{{ post.content }}</div>
  </div>
  <div v-else class="post-detail">
    <RouterLink to="/" class="back-link">&larr; Back to posts</RouterLink>
    <p>Post not found.</p>
  </div>
</template>
