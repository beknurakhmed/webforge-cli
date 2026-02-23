<script setup lang="ts">
import type { Post } from '../data'

defineProps<{ post: Post }>()
</script>

<template>
  <RouterLink :to="`/post/${post.id}`" class="bg-white rounded-lg overflow-hidden shadow-sm flex transition-shadow hover:shadow-md no-underline text-inherit">
    <div class="w-44 min-h-[140px] bg-indigo-50 flex items-center justify-center text-5xl shrink-0">{{ post.image }}</div>
    <div class="p-5 flex-1">
      <div class="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{{ post.category }}</div>
      <div class="text-lg font-bold text-gray-900 mt-1 mb-1.5">{{ post.title }}</div>
      <div class="text-sm text-gray-500 leading-relaxed">{{ post.excerpt }}</div>
      <div class="mt-3 text-xs text-gray-400">{{ post.author }} &middot; {{ post.date }} &middot; {{ post.readTime }}</div>
    </div>
  </RouterLink>
</template>
