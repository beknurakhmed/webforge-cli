<script setup lang="ts">
import CrmSidebar from './components/CrmSidebar.vue'
</script>

<template>
  <div class="crm-layout">
    <CrmSidebar />
    <main class="crm-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.crm-layout {
  display: flex;
  min-height: 100vh;
}
.crm-main {
  flex: 1;
  padding: 2rem;
  background: #f9fafb;
  overflow-y: auto;
}
</style>
