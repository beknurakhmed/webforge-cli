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
  <main :class="$style.pageContainer">
    <RouterLink to="/" :class="$style.backLink">&#8592; Back to Products</RouterLink>
    <div v-if="product" :class="$style.detailLayout">
      <div :class="$style.detailEmoji">{{ product.emoji }}</div>
      <div>
        <span :class="$style.detailCategory">{{ product.category }}</span>
        <h1 :class="$style.detailName">{{ product.name }}</h1>
        <p :class="$style.detailPrice">${{ product.price.toFixed(2) }}</p>
        <p :class="$style.detailDesc">{{ product.description }}</p>
        <button :class="$style.btnPrimary" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <p v-else :class="$style.cartEmpty">Product not found.</p>
  </main>
</template>

<style module>
.pageContainer { flex: 1; max-width: 1200px; margin: 0 auto; padding: 2rem; width: 100%; }
.backLink { display: inline-block; color: #4f46e5; font-weight: 500; margin-bottom: 1.5rem; }
.detailLayout { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
.detailEmoji { font-size: 8rem; text-align: center; padding: 4rem; background: #f9fafb; border-radius: 12px; }
.detailCategory { font-size: 0.8rem; color: #4f46e5; font-weight: 600; text-transform: uppercase; }
.detailName { font-size: 2rem; font-weight: 700; color: #111827; margin: 0.5rem 0; }
.detailPrice { font-size: 1.75rem; font-weight: 700; color: #4f46e5; margin-bottom: 1rem; }
.detailDesc { color: #6b7280; line-height: 1.8; margin-bottom: 2rem; }
.btnPrimary { background: #4f46e5; color: #ffffff; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; transition: background 0.2s; }
.btnPrimary:hover { background: #4338ca; }
.cartEmpty { text-align: center; padding: 4rem 2rem; color: #9ca3af; font-size: 1.1rem; }
@media (max-width: 768px) { .detailLayout { grid-template-columns: 1fr; } }
</style>
