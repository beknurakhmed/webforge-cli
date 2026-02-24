<script setup lang="ts">
defineProps<{ cartCount: number }>();
</script>

<template>
  <header :class="$style.storeHeader">
    <div :class="$style.headerInner">
      <RouterLink to="/" :class="$style.storeLogo">{{projectName}}</RouterLink>
      <nav :class="$style.navLinks">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart" :class="$style.cartLink">Cart ({{ cartCount }})</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style module>
.storeHeader { background: #ffffff; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 20; }
.headerInner { max-width: 1200px; margin: 0 auto; padding: 1rem 2rem; display: flex; align-items: center; gap: 2rem; }
.storeLogo { font-size: 1.5rem; font-weight: 700; color: #4f46e5; }
.navLinks { display: flex; gap: 1.5rem; margin-left: auto; align-items: center; }
.navLinks a { color: #6b7280; font-weight: 500; transition: color 0.2s; }
.navLinks a:hover { color: #4f46e5; }
.cartLink { background: #4f46e5; color: #ffffff !important; padding: 0.5rem 1.25rem; border-radius: 8px; font-weight: 600; }
@media (max-width: 768px) { .headerInner { flex-wrap: wrap; } }
</style>
