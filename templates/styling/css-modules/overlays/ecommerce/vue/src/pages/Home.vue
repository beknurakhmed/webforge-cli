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
  <main :class="$style.pageContainer">
    <h2 :class="$style.pageTitle">All Products</h2>
    <input v-model="search" type="text" :class="$style.searchBar" placeholder="Search products..." />
    <div :class="$style.productGrid">
      <ProductCard
        v-for="p in filtered"
        :key="p.id"
        :product="p"
        @add-to-cart="addToCart"
      />
    </div>
  </main>
</template>

<style module>
.pageContainer { flex: 1; max-width: 1200px; margin: 0 auto; padding: 2rem; width: 100%; }
.pageTitle { font-size: 1.75rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
.searchBar { padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 8px; width: 100%; max-width: 400px; margin-bottom: 1.5rem; font-size: 0.95rem; }
.searchBar:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
.productGrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
</style>
