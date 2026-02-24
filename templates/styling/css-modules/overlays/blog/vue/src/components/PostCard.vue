<script setup lang="ts">
import type { Post } from '../data'

defineProps<{ post: Post }>()
</script>

<template>
  <RouterLink :to="`/post/${post.id}`" :class="$style.postCard" style="text-decoration: none; color: inherit;">
    <div :class="$style.postImage">{{ post.image }}</div>
    <div :class="$style.postBody">
      <div :class="$style.postCategory">{{ post.category }}</div>
      <div :class="$style.postTitle">{{ post.title }}</div>
      <div :class="$style.postExcerpt">{{ post.excerpt }}</div>
      <div :class="$style.postMeta">{{ post.author }} &middot; {{ post.date }} &middot; {{ post.readTime }}</div>
    </div>
  </RouterLink>
</template>

<style module>
.postCard {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  transition: box-shadow 0.2s;
}

.postCard:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.postImage {
  width: 180px;
  min-height: 140px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  flex-shrink: 0;
}

.postBody {
  padding: 1.25rem;
  flex: 1;
}

.postCategory {
  font-size: 0.75rem;
  font-weight: 600;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.postTitle {
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  margin: 0.3rem 0 0.4rem;
}

.postExcerpt {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
}

.postMeta {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: #9ca3af;
}
</style>
