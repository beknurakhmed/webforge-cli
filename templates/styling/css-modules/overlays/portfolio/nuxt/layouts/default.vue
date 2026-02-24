<template>
  <div :class="$style.portfolioLayout">
    <PortfolioNav />
    <main :class="$style.portfolioMain">
      <slot />
    </main>
    <PortfolioFooter />
  </div>
</template>

<style module>
.portfolioLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.portfolioMain {
  flex: 1;
}
</style>
