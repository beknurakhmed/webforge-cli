<template>
  <aside class="sidebar">
    <div class="sidebar-brand">{{projectName}}</div>
    <nav class="sidebar-nav">
      <RouterLink to="/" class="sidebar-link">
        <span class="sidebar-icon">📊</span> Overview
      </RouterLink>
      <RouterLink to="/analytics" class="sidebar-link">
        <span class="sidebar-icon">📈</span> Analytics
      </RouterLink>
      <RouterLink to="/users" class="sidebar-link">
        <span class="sidebar-icon">👥</span> Users
      </RouterLink>
      <RouterLink to="/settings" class="sidebar-link">
        <span class="sidebar-icon">⚙️</span> Settings
      </RouterLink>
    </nav>
  </aside>
</template>
