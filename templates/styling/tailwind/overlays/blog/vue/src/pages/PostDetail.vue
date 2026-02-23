<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../data'

const route = useRoute()
const post = computed(() => posts.find(p => p.id === Number(route.params.id)))
</script>

<template>
  <div class="max-w-3xl mx-auto" v-if="post">
    <RouterLink to="/" class="inline-block mb-6 text-sm text-indigo-600 no-underline hover:text-indigo-700 transition-colors">&larr; Back to posts</RouterLink>
    <div class="text-6xl text-center bg-indigo-50 py-8 rounded-lg mb-6">{{ post.image }}</div>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ post.title }}</h1>
    <div class="text-gray-500 text-sm mb-6">{{ post.author }} &middot; {{ post.date }} &middot; {{ post.readTime }}</div>
    <div class="text-base leading-relaxed text-gray-700">{{ post.content }}</div>
  </div>
  <div v-else class="max-w-3xl mx-auto">
    <RouterLink to="/" class="inline-block mb-6 text-sm text-indigo-600 no-underline hover:text-indigo-700 transition-colors">&larr; Back to posts</RouterLink>
    <p class="text-gray-500">Post not found.</p>
  </div>
</template>
