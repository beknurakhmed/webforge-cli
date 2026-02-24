<template>
  <div :class="$style.dashLayout">
    <DashSidebar />
    <main :class="$style.dashMain">
      <slot />
    </main>
  </div>
</template>

<style module>
.dashLayout {
  display: flex;
  min-height: 100vh;
}

.dashMain {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
