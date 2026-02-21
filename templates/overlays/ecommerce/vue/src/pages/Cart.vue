<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';
import type { CartItem } from '../data';

const cart = inject<Ref<CartItem[]>>('cart')!;
const removeFromCart = inject<(id: number) => void>('removeFromCart')!;
const total = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<template>
  <main class="page-container">
    <h2 class="page-title">Shopping Cart</h2>
    <div v-if="cart.length === 0" class="cart-empty">
      <p>Your cart is empty.</p>
      <RouterLink to="/" class="btn-primary" style="display:inline-block;margin-top:1rem;">Browse Products</RouterLink>
    </div>
    <template v-else>
      <div class="cart-list">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <span class="cart-item-emoji">{{ item.emoji }}</span>
          <div class="cart-item-info">
            <p class="cart-item-name">{{ item.name }}</p>
            <p class="cart-item-meta">Qty: {{ item.quantity }} &times; ${{ item.price.toFixed(2) }}</p>
          </div>
          <button class="btn-remove" @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <div class="cart-summary">
        <span class="cart-total">Total: ${{ total.toFixed(2) }}</span>
        <button class="btn-primary">Checkout</button>
      </div>
    </template>
  </main>
</template>
