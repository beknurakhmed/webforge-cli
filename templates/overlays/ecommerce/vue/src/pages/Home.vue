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
  <main class="page-container">
    <h2 class="page-title">All Products</h2>
    <input v-model="search" type="text" class="search-bar" placeholder="Search products..." />
    <div class="product-grid">
      <ProductCard
        v-for="p in filtered"
        :key="p.id"
        :product="p"
        @add-to-cart="addToCart"
      />
    </div>
  </main>
</template>
