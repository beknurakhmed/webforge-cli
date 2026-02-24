<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../data'

const route = useRoute()
const post = computed(() => posts.find(p => p.id === Number(route.params.id)))
</script>

<template>
  <div :class="$style.postDetail" v-if="post">
    <RouterLink to="/" :class="$style.backLink">&larr; Back to posts</RouterLink>
    <div :class="$style.postHeroImage">{{ post.image }}</div>
    <h1>{{ post.title }}</h1>
    <div :class="$style.detailMeta">{{ post.author }} &middot; {{ post.date }} &middot; {{ post.readTime }}</div>
    <div :class="$style.postContent">{{ post.content }}</div>
  </div>
  <div v-else :class="$style.postDetail">
    <RouterLink to="/" :class="$style.backLink">&larr; Back to posts</RouterLink>
    <p>Post not found.</p>
  </div>
</template>

<style module>
.postDetail {
  max-width: 720px;
  margin: 0 auto;
}

.backLink {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #4f46e5;
}

.postHeroImage {
  font-size: 4rem;
  text-align: center;
  background: #eef2ff;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.postDetail h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.detailMeta {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.postContent {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #374151;
}
</style>
