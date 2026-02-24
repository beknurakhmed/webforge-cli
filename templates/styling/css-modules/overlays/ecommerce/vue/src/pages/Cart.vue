<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';
import type { CartItem } from '../data';

const cart = inject<Ref<CartItem[]>>('cart')!;
const removeFromCart = inject<(id: number) => void>('removeFromCart')!;
const total = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<template>
  <main :class="$style.pageContainer">
    <h2 :class="$style.pageTitle">Shopping Cart</h2>
    <div v-if="cart.length === 0" :class="$style.cartEmpty">
      <p>Your cart is empty.</p>
      <RouterLink to="/" :class="$style.btnPrimary" style="display:inline-block;margin-top:1rem;">Browse Products</RouterLink>
    </div>
    <template v-else>
      <div :class="$style.cartList">
        <div v-for="item in cart" :key="item.id" :class="$style.cartItem">
          <span :class="$style.cartItemEmoji">{{ item.emoji }}</span>
          <div :class="$style.cartItemInfo">
            <p :class="$style.cartItemName">{{ item.name }}</p>
            <p :class="$style.cartItemMeta">Qty: {{ item.quantity }} &times; ${{ item.price.toFixed(2) }}</p>
          </div>
          <button :class="$style.btnRemove" @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <div :class="$style.cartSummary">
        <span :class="$style.cartTotal">Total: ${{ total.toFixed(2) }}</span>
        <button :class="$style.btnPrimary">Checkout</button>
      </div>
    </template>
  </main>
</template>

<style module>
.pageContainer { flex: 1; max-width: 1200px; margin: 0 auto; padding: 2rem; width: 100%; }
.pageTitle { font-size: 1.75rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
.cartList { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
.cartItem { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #ffffff; }
.cartItemEmoji { font-size: 2.5rem; width: 60px; text-align: center; }
.cartItemInfo { flex: 1; }
.cartItemName { font-weight: 600; color: #111827; }
.cartItemMeta { font-size: 0.9rem; color: #6b7280; }
.btnRemove { background: none; border: 1px solid #ef4444; color: #ef4444; padding: 0.4rem 0.8rem; border-radius: 6px; font-weight: 500; transition: background 0.2s; }
.btnRemove:hover { background: #fef2f2; }
.cartSummary { border-top: 2px solid #e5e7eb; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; }
.cartTotal { font-size: 1.5rem; font-weight: 700; color: #111827; }
.cartEmpty { text-align: center; padding: 4rem 2rem; color: #9ca3af; font-size: 1.1rem; }
.btnPrimary { background: #4f46e5; color: #ffffff; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; transition: background 0.2s; }
.btnPrimary:hover { background: #4338ca; }
</style>
