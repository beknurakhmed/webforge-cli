<template>
  <div class="dash-layout">
    <DashSidebar />
    <main class="dash-main">
      <slot />
    </main>
  </div>
</template>

<style>
.dash-layout {
  display: flex;
  min-height: 100vh;
}

.dash-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
