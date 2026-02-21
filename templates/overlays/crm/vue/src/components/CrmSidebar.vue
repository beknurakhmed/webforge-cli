<script setup lang="ts">
</script>

<template>
  <aside class="crm-sidebar">
    <div class="logo">{{projectName}}</div>
    <nav>
      <RouterLink to="/">📊 Dashboard</RouterLink>
      <RouterLink to="/contacts">👤 Contacts</RouterLink>
      <RouterLink to="/deals">💼 Deals</RouterLink>
      <RouterLink to="/settings">⚙️ Settings</RouterLink>
    </nav>
  </aside>
</template>
