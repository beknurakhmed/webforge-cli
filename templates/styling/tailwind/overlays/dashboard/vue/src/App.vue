<script setup lang="ts">
import DashSidebar from './components/DashSidebar.vue';
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-gray-50">
    <DashSidebar />
    <main class="flex-1 p-8 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
