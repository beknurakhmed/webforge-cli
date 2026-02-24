<template>
  <div :class="$style.crmLayout">
    <CrmSidebar />
    <main :class="$style.crmMain">
      <slot />
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
  overflow-y: auto;
}
</style>
