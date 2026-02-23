<script setup lang="ts">
import PortfolioNav from './components/PortfolioNav.vue'
import PortfolioFooter from './components/PortfolioFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <PortfolioNav />
    <main class="flex-1">
      <RouterView />
    </main>
    <PortfolioFooter />
  </div>
</template>
