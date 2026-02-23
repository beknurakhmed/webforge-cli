<script setup lang="ts">
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

const cart = useState<CartItem[]>('cart', () => []);
const cartCount = computed(() => cart.value.reduce((sum, i) => sum + i.quantity, 0));
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-700">
    <StoreHeader :cart-count="cartCount" />
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
      <slot />
    </main>
    <StoreFooter />
  </div>
</template>
