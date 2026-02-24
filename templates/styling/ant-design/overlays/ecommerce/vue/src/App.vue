<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import type { Product, CartItem } from './data';
import StoreHeader from './components/StoreHeader.vue';
import StoreFooter from './components/StoreFooter.vue';

const cart = ref<CartItem[]>([]);
const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0));

function addToCart(product: Product) {
  const existing = cart.value.find(item => item.id === product.id);
  if (existing) { existing.quantity++; }
  else { cart.value.push({ ...product, quantity: 1 }); }
}

function removeFromCart(id: number) {
  cart.value = cart.value.filter(item => item.id !== id);
}

provide('cart', cart);
provide('addToCart', addToCart);
provide('removeFromCart', removeFromCart);
</script>

<template>
  <a-config-provider :theme="{ token: { colorPrimary: '#4f46e5' } }">
    <a-layout :style="{ minHeight: '100vh' }">
      <StoreHeader :cartCount="cartCount" />
      <a-layout-content :style="{ padding: '0' }">
        <RouterView />
      </a-layout-content>
      <StoreFooter />
    </a-layout>
  </a-config-provider>
</template>
