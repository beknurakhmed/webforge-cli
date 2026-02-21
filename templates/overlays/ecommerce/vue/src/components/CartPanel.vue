<script setup lang="ts">
import { computed } from 'vue';
interface CartItem { id: number; name: string; price: number; image: string; quantity: number; }
const props = defineProps<{ items: CartItem[] }>();
defineEmits<{ remove: [id: number]; close: [] }>();
const total = computed(() => props.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<template>
  <div class="cart-overlay" @click="$emit('close')">
    <div class="cart-panel" @click.stop>
      <div class="cart-header"><h2>Shopping Cart</h2><button @click="$emit('close')">X</button></div>
      <p v-if="items.length === 0" class="cart-empty">Your cart is empty</p>
      <template v-else>
        <div class="cart-items">
          <div v-for="item in items" :key="item.id" class="cart-item">
            <span>{{ item.image }}</span>
            <div><h4>{{ item.name }}</h4><p>Qty: {{ item.quantity }} x ${{ item.price.toFixed(2) }}</p></div>
            <button @click="$emit('remove', item.id)">Remove</button>
          </div>
        </div>
        <div class="cart-footer">
          <div class="cart-total"><span>Total:</span><strong>${{ total.toFixed(2) }}</strong></div>
          <button class="checkout-btn">Checkout</button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 50; }
.cart-panel { position: fixed; top: 0; right: 0; bottom: 0; width: 400px; max-width: 100%; background: white; box-shadow: -4px 0 25px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
.cart-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #e5e7eb; }
.cart-header h2 { margin: 0; font-size: 1.25rem; }
.cart-header button { background: none; border: none; font-size: 1.25rem; cursor: pointer; }
.cart-empty { text-align: center; padding: 3rem; color: #9ca3af; }
.cart-items { flex: 1; overflow-y: auto; padding: 1rem; }
.cart-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid #f3f4f6; }
.cart-item h4 { margin: 0; font-size: 0.95rem; }
.cart-item p { color: #6b7280; font-size: 0.85rem; margin: 0; }
.cart-item button { background: none; border: none; color: #ef4444; cursor: pointer; margin-left: auto; }
.cart-footer { padding: 1.5rem; border-top: 1px solid #e5e7eb; }
.cart-total { display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 1.1rem; }
.checkout-btn { width: 100%; background: #4f46e5; color: white; border: none; padding: 0.75rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; }
</style>
