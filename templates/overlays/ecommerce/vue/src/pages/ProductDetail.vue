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
  <main class="page-container">
    <RouterLink to="/" class="back-link">&#8592; Back to Products</RouterLink>
    <div v-if="product" class="detail-layout">
      <div class="detail-emoji">{{ product.emoji }}</div>
      <div>
        <span class="detail-category">{{ product.category }}</span>
        <h1 class="detail-name">{{ product.name }}</h1>
        <p class="detail-price">${{ product.price.toFixed(2) }}</p>
        <p class="detail-desc">{{ product.description }}</p>
        <button class="btn-primary" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <p v-else class="cart-empty">Product not found.</p>
  </main>
</template>
