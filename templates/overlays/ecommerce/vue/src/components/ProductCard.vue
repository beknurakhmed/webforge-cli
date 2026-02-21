<script setup lang="ts">
import type { Product } from '../data';

const props = defineProps<{ product: Product }>();
const emit = defineEmits<{ 'add-to-cart': [product: Product] }>();
</script>

<template>
  <div class="product-card">
    <RouterLink :to="`/product/${product.id}`">
      <div class="product-emoji">{{ product.emoji }}</div>
    </RouterLink>
    <div class="product-body">
      <span class="product-category">{{ product.category }}</span>
      <RouterLink :to="`/product/${product.id}`">
        <h3 class="product-name">{{ product.name }}</h3>
      </RouterLink>
      <p class="product-desc">{{ product.description }}</p>
      <div class="product-bottom">
        <span class="product-price">${{ product.price.toFixed(2) }}</span>
        <button class="btn-primary" @click="emit('add-to-cart', product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
