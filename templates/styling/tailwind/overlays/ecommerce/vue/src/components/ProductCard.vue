<script setup lang="ts">
import type { Product } from '../data';

const props = defineProps<{ product: Product }>();
const emit = defineEmits<{ 'add-to-cart': [product: Product] }>();
</script>

<template>
  <div class="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all hover:shadow-lg hover:-translate-y-0.5">
    <RouterLink :to="`/product/${product.id}`">
      <div class="text-6xl text-center py-8 bg-gray-50">{{ product.emoji }}</div>
    </RouterLink>
    <div class="p-5">
      <span class="text-xs text-indigo-600 font-semibold uppercase">{{ product.category }}</span>
      <RouterLink :to="`/product/${product.id}`" class="no-underline">
        <h3 class="text-lg font-semibold text-gray-900 mt-1 mb-1">{{ product.name }}</h3>
      </RouterLink>
      <p class="text-gray-500 text-sm mb-4">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
        <button class="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-indigo-700 cursor-pointer" @click="emit('add-to-cart', product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
