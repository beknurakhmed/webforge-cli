<script setup lang="ts">
defineProps<{ cartCount: number }>();
</script>

<template>
  <a-layout-header :style="{ background: '#fff', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }">
    <RouterLink to="/" :style="{ fontSize: '20px', fontWeight: 700, color: '#111827', textDecoration: 'none' }">{{projectName}}</RouterLink>
    <a-space :size="24">
      <RouterLink to="/" :style="{ color: '#374151', textDecoration: 'none' }">Home</RouterLink>
      <RouterLink to="/cart" :style="{ textDecoration: 'none' }">
        <a-badge :count="cartCount" :offset="[8, -4]">
          <a-button>Cart</a-button>
        </a-badge>
      </RouterLink>
    </a-space>
  </a-layout-header>
</template>
