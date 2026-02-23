<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-700">
    <PortfolioNav />
    <main class="flex-1">
      <slot />
    </main>
    <PortfolioFooter />
  </div>
</template>
