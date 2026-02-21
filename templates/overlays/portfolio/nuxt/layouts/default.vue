<template>
  <div class="portfolio-layout">
    <PortfolioNav />
    <main class="portfolio-main">
      <slot />
    </main>
    <PortfolioFooter />
  </div>
</template>

<style>
.portfolio-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.portfolio-main {
  flex: 1;
}
</style>
