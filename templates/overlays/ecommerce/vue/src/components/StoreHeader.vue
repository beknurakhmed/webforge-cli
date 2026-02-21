<script setup lang="ts">
defineProps<{ cartCount: number }>();
</script>

<template>
  <header class="store-header">
    <div class="header-inner">
      <RouterLink to="/" class="store-logo">{{projectName}}</RouterLink>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart" class="cart-link">Cart ({{ cartCount }})</RouterLink>
      </nav>
    </div>
  </header>
</template>
