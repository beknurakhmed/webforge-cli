<script setup lang="ts">
defineProps<{
  cartCount: number;
}>();
</script>

<template>
  <header :class="$style.storeHeader">
    <div :class="$style.headerInner">
      <NuxtLink to="/" :class="$style.logo">🛍️ {{projectName}}</NuxtLink>
      <nav :class="$style.headerNav">
        <NuxtLink to="/" :class="$style.navLink">Home</NuxtLink>
        <NuxtLink to="/cart" :class="$style.cartLink">
          🛒 Cart
          <span v-if="cartCount > 0" :class="$style.cartBadge">{{ cartCount }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style module>
.storeHeader {
  background: #111827;
  color: white;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.headerInner {
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

.headerNav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navLink {
  color: #d1d5db;
  font-weight: 500;
  transition: color 0.2s;
}

.navLink:hover {
  color: white;
}

.cartLink {
  color: #d1d5db;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s;
}

.cartLink:hover {
  color: white;
}

.cartBadge {
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
