<script setup lang="ts">
import { ref, computed } from 'vue';
import StoreHeader from './components/StoreHeader.vue';
import ProductGrid from './components/ProductGrid.vue';
import CartPanel from './components/CartPanel.vue';
import StoreFooter from './components/StoreFooter.vue';

interface Product { id: number; name: string; price: number; image: string; category: string; description: string; }
interface CartItem extends Product { quantity: number; }

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', description: 'Premium sound with noise cancellation.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', description: 'Track fitness and stay connected.' },
  { id: 3, name: 'Laptop Stand', price: 49.99, image: '💻', category: 'Accessories', description: 'Ergonomic aluminum stand.' },
  { id: 4, name: 'Mechanical Keyboard', price: 129.99, image: '⌨️', category: 'Electronics', description: 'Tactile switches with RGB.' },
  { id: 5, name: 'USB-C Hub', price: 39.99, image: '🔌', category: 'Accessories', description: '7-in-1 hub with 4K HDMI.' },
  { id: 6, name: 'Webcam HD', price: 69.99, image: '📷', category: 'Electronics', description: '1080p with built-in mic.' },
];

const cartItems = ref<CartItem[]>([]);
const isCartOpen = ref(false);
const cartCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0));

function addToCart(product: Product) {
  const existing = cartItems.value.find((item) => item.id === product.id);
  if (existing) { existing.quantity++; }
  else { cartItems.value.push({ ...product, quantity: 1 }); }
}
function removeFromCart(id: number) { cartItems.value = cartItems.value.filter((item) => item.id !== id); }
</script>

<template>
  <div class="ecommerce">
    <StoreHeader :cart-count="cartCount" @toggle-cart="isCartOpen = !isCartOpen" />
    <main class="main"><ProductGrid :products="products" @add-to-cart="addToCart" /></main>
    <CartPanel v-if="isCartOpen" :items="cartItems" @remove="removeFromCart" @close="isCartOpen = false" />
    <StoreFooter />
  </div>
</template>

<style>
.ecommerce { min-height: 100vh; display: flex; flex-direction: column; }
.main { flex: 1; max-width: 1200px; margin: 0 auto; padding: 2rem; width: 100%; }
</style>
