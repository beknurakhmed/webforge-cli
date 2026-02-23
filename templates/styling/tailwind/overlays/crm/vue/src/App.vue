<script setup lang="ts">
import CrmSidebar from './components/CrmSidebar.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <CrmSidebar />
    <main class="flex-1 p-8 bg-gray-50 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
