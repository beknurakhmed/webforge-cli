<script setup lang="ts">
import PortfolioNav from './components/PortfolioNav.vue'
import PortfolioFooter from './components/PortfolioFooter.vue'
</script>

<template>
  <div class="portfolio-app">
    <PortfolioNav />
    <main class="portfolio-main">
      <RouterView />
    </main>
    <PortfolioFooter />
  </div>
</template>

<style scoped>
.portfolio-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.portfolio-main {
  flex: 1;
}
</style>
