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
  <div :class="$style.storeLayout">
    <StoreHeader :cart-count="cartCount" />
    <main :class="$style.storeMain">
      <slot />
    </main>
    <StoreFooter />
  </div>
</template>

<style module>
.storeLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.storeMain {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
