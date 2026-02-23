<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import type { Product } from '../data';
import { products } from '../data';
import ProductCard from '../components/ProductCard.vue';

const addToCart = inject<(p: Product) => void>('addToCart')!;
const search = ref('');
const filtered = computed(() =>
  products.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()))
);
</script>

<template>
  <main class="flex-1 max-w-6xl mx-auto px-8 py-8 w-full">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">All Products</h2>
    <input v-model="search" type="text" class="py-3 px-4 border border-gray-300 rounded-lg w-full max-w-md mb-6 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" placeholder="Search products..." />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard
        v-for="p in filtered"
        :key="p.id"
        :product="p"
        @add-to-cart="addToCart"
      />
    </div>
  </main>
</template>
