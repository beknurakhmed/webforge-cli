<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #e5e7eb">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <main style="padding: 1rem">
      <RouterView />
    </main>
  </div>
</template>
