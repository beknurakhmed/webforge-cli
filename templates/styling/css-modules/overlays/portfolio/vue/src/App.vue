<script setup lang="ts">
import PortfolioNav from './components/PortfolioNav.vue'
import PortfolioFooter from './components/PortfolioFooter.vue'
</script>

<template>
  <div :class="$style.portfolioApp">
    <PortfolioNav />
    <main :class="$style.portfolioMain">
      <RouterView />
    </main>
    <PortfolioFooter />
  </div>
</template>

<style module>
.portfolioApp {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.portfolioMain {
  flex: 1;
}
</style>
