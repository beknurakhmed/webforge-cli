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
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">{{ categoryName }}</h1>
      <p class="text-gray-500 mb-4">{{ filtered.length }} post(s) in this category</p>
    </div>
    <div class="flex flex-col gap-6">
      <PostCard v-for="post in filtered" :key="post.id" :post="post" />
    </div>
    <p v-if="!filtered.length" class="text-gray-500">No posts found in this category.</p>
    <RouterLink to="/" class="inline-block mt-4 text-indigo-600 no-underline hover:text-indigo-700 transition-colors">&larr; Back to all posts</RouterLink>
  </div>
</template>
