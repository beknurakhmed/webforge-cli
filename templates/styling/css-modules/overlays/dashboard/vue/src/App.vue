<script setup lang="ts">
import DashSidebar from './components/DashSidebar.vue';
</script>

<template>
  <div :class="$style.dashboardLayout">
    <DashSidebar />
    <main :class="$style.dashboardMain">
      <RouterView />
    </main>
  </div>
</template>

<style module>
.dashboardLayout {
  display: flex;
  min-height: 100vh;
}

.dashboardMain {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .dashboardLayout {
    flex-direction: column;
  }
}
</style>
