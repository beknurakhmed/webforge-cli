<template>
  <div class="crm-layout">
    <CrmSidebar />
    <main class="crm-main">
      <slot />
    </main>
  </div>
</template>

<style>
.crm-layout {
  display: flex;
  min-height: 100vh;
}

.crm-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
