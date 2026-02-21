<script setup lang="ts">
import DashSidebar from './components/DashSidebar.vue';
</script>

<template>
  <div class="dashboard-layout">
    <DashSidebar />
    <main class="dashboard-main">
      <RouterView />
    </main>
  </div>
</template>
