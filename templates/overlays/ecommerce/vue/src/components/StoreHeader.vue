<script setup lang="ts">
defineProps<{ cartCount: number }>();
defineEmits<{ 'toggle-cart': [] }>();
</script>

<template>
  <header class="store-header">
    <div class="header-content">
      <h1 class="store-logo">{{projectName}}</h1>
      <nav class="store-nav">
        <a href="#" class="active">All Products</a>
        <a href="#">Electronics</a>
        <a href="#">Accessories</a>
      </nav>
      <div class="header-actions">
        <input type="text" class="search-input" placeholder="Search products..." />
        <button class="cart-btn" @click="$emit('toggle-cart')">Cart ({{ cartCount }})</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.store-header { background: white; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 10; }
.header-content { max-width: 1200px; margin: 0 auto; padding: 1rem 2rem; display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
.store-logo { font-size: 1.5rem; color: #4f46e5; margin: 0; }
.store-nav { display: flex; gap: 1.5rem; }
.store-nav a { text-decoration: none; color: #6b7280; font-weight: 500; }
.store-nav a.active { color: #4f46e5; }
.header-actions { display: flex; gap: 1rem; margin-left: auto; align-items: center; }
.search-input { padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 8px; }
.cart-btn { background: #4f46e5; color: white; border: none; padding: 0.5rem 1.25rem; border-radius: 8px; cursor: pointer; font-weight: 600; }
</style>
