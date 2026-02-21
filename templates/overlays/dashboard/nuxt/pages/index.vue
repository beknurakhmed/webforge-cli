<script setup lang="ts">
</script>

<template>
  <div class="overview-page">
    <div class="page-header">
      <h1>Dashboard Overview</h1>
      <p class="subtitle">Welcome back! Here's what's happening today.</p>
    </div>

    <KPICards />

    <div class="charts-row">
      <ChartPlaceholder title="Weekly Revenue" />
      <ChartPlaceholder title="Weekly Orders" />
    </div>

    <DataTable />
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #6b7280;
}

.charts-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .charts-row {
    grid-template-columns: 1fr;
  }
}
</style>
