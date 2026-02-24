<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PostCard from '../components/PostCard.vue'
import { posts } from '../data'

const route = useRoute()

const slug = computed(() => route.params.slug as string)

const filtered = computed(() =>
  posts.filter(p => p.category.toLowerCase().replace('.', '') === slug.value)
)

const categoryName = computed(() =>
  filtered.value.length ? filtered.value[0].category : slug.value
)
</script>

<template>
  <div>
    <div :class="$style.categoryHeader">
      <h1>{{ categoryName }}</h1>
      <p style="color: #6b7280; margin-bottom: 1rem;">{{ filtered.length }} post(s) in this category</p>
    </div>
    <div :class="$style.postsGrid">
      <PostCard v-for="post in filtered" :key="post.id" :post="post" />
    </div>
    <p v-if="!filtered.length" style="color: #6b7280;">No posts found in this category.</p>
    <RouterLink to="/" style="display: inline-block; margin-top: 1rem;">&larr; Back to all posts</RouterLink>
  </div>
</template>

<style module>
.categoryHeader {
  margin-bottom: 1.5rem;
}

.categoryHeader h1 {
  font-size: 1.5rem;
  color: #111827;
}

.postsGrid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
