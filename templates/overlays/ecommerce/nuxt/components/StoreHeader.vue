<script setup lang="ts">
defineProps<{
  cartCount: number;
}>();
</script>

<template>
  <header class="store-header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">🛍️ {{projectName}}</NuxtLink>
      <nav class="header-nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/cart" class="cart-link">
          🛒 Cart
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.store-header {
  background: #111827;
  color: white;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.35rem;
  font-weight: 700;
  color: white;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #d1d5db;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: white;
}

.cart-link {
  color: #d1d5db;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s;
}

.cart-link:hover {
  color: white;
}

.cart-badge {
  background: #4f46e5;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
}
</style>
