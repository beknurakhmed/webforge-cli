<script setup lang="ts">
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import type { Product } from '../data';
import { products } from '../data';

const route = useRoute();
const addToCart = inject<(p: Product) => void>('addToCart')!;
const product = computed(() => products.find(p => p.id === Number(route.params.id)));
</script>

<template>
  <main class="flex-1 max-w-6xl mx-auto px-8 py-8 w-full">
    <RouterLink to="/" class="inline-block text-indigo-600 font-medium mb-6 no-underline hover:text-indigo-700">&#8592; Back to Products</RouterLink>
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div class="text-8xl text-center py-16 bg-gray-50 rounded-xl">{{ product.emoji }}</div>
      <div>
        <span class="text-sm text-indigo-600 font-semibold uppercase">{{ product.category }}</span>
        <h1 class="text-3xl font-bold text-gray-900 mt-2 mb-2">{{ product.name }}</h1>
        <p class="text-2xl font-bold text-indigo-600 mb-4">${{ product.price.toFixed(2) }}</p>
        <p class="text-gray-500 leading-relaxed mb-8">{{ product.description }}</p>
        <button class="bg-indigo-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-indigo-700 cursor-pointer" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <p v-else class="text-center py-16 text-gray-400 text-lg">Product not found.</p>
  </main>
</template>
