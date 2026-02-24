<script setup lang="ts">
import CrmSidebar from './components/CrmSidebar.vue'
</script>

<template>
  <div :class="$style.crmLayout">
    <CrmSidebar />
    <main :class="$style.crmMain">
      <RouterView />
    </main>
  </div>
</template>

<style module>
.crmLayout {
  display: flex;
  min-height: 100vh;
}

.crmMain {
  flex: 1;
  padding: 2rem;
  background: #f9fafb;
  overflow-y: auto;
}
</style>
