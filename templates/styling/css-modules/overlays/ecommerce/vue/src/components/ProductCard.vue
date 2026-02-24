<script setup lang="ts">
import type { Product } from '../data';

const props = defineProps<{ product: Product }>();
const emit = defineEmits<{ 'add-to-cart': [product: Product] }>();
</script>

<template>
  <div :class="$style.productCard">
    <RouterLink :to="`/product/${product.id}`">
      <div :class="$style.productEmoji">{{ product.emoji }}</div>
    </RouterLink>
    <div :class="$style.productBody">
      <span :class="$style.productCategory">{{ product.category }}</span>
      <RouterLink :to="`/product/${product.id}`">
        <h3 :class="$style.productName">{{ product.name }}</h3>
      </RouterLink>
      <p :class="$style.productDesc">{{ product.description }}</p>
      <div :class="$style.productBottom">
        <span :class="$style.productPrice">${{ product.price.toFixed(2) }}</span>
        <button :class="$style.btnPrimary" @click="emit('add-to-cart', product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style module>
.productCard { border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; background: #ffffff; }
.productCard:hover { box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); transform: translateY(-2px); }
.productEmoji { font-size: 4rem; text-align: center; padding: 2rem; background: #f9fafb; }
.productBody { padding: 1.25rem; }
.productCategory { font-size: 0.75rem; color: #4f46e5; font-weight: 600; text-transform: uppercase; }
.productName { font-size: 1.1rem; font-weight: 600; color: #111827; margin: 0.25rem 0; }
.productDesc { color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem; }
.productBottom { display: flex; justify-content: space-between; align-items: center; }
.productPrice { font-size: 1.25rem; font-weight: 700; color: #111827; }
.btnPrimary { background: #4f46e5; color: #ffffff; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; transition: background 0.2s; }
.btnPrimary:hover { background: #4338ca; }
</style>
