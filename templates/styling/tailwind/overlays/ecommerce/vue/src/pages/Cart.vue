<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';
import type { CartItem } from '../data';

const cart = inject<Ref<CartItem[]>>('cart')!;
const removeFromCart = inject<(id: number) => void>('removeFromCart')!;
const total = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<template>
  <main class="flex-1 max-w-6xl mx-auto px-8 py-8 w-full">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
    <div v-if="cart.length === 0" class="text-center py-16 text-gray-400 text-lg">
      <p>Your cart is empty.</p>
      <RouterLink to="/" class="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold no-underline hover:bg-indigo-700 transition-colors">Browse Products</RouterLink>
    </div>
    <template v-else>
      <div class="flex flex-col gap-4 mb-8">
        <div v-for="item in cart" :key="item.id" class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white">
          <span class="text-4xl w-16 text-center">{{ item.emoji }}</span>
          <div class="flex-1">
            <p class="font-semibold text-gray-900">{{ item.name }}</p>
            <p class="text-sm text-gray-500">Qty: {{ item.quantity }} &times; ${{ item.price.toFixed(2) }}</p>
          </div>
          <button class="bg-transparent border border-red-500 text-red-500 px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-red-50 cursor-pointer" @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <div class="border-t-2 border-gray-200 pt-6 flex justify-between items-center">
        <span class="text-2xl font-bold text-gray-900">Total: ${{ total.toFixed(2) }}</span>
        <button class="bg-indigo-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-indigo-700 cursor-pointer">Checkout</button>
      </div>
    </template>
  </main>
</template>
