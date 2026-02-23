<script setup lang="ts">
defineProps<{
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
  };
}>();
</script>

<template>
  <NuxtLink :to="`/post/${post.id}`" class="block bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center p-8">
      <span class="text-5xl">{{ post.image }}</span>
    </div>
    <div class="p-5">
      <div class="flex justify-between items-center mb-2">
        <NuxtLink :to="`/category/${post.category.toLowerCase()}`" class="text-xs text-indigo-600 font-semibold uppercase tracking-wider hover:underline" @click.stop>
          {{ post.category }}
        </NuxtLink>
        <span class="text-xs text-gray-400">{{ post.readTime }}</span>
      </div>
      <h3 class="text-base font-semibold text-gray-900 mb-2 leading-snug">{{ post.title }}</h3>
      <p class="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">{{ post.excerpt }}</p>
      <div class="flex justify-between text-xs text-gray-400">
        <span class="font-semibold text-gray-700">{{ post.author }}</span>
        <span>{{ post.date }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
