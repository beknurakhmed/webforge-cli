<script setup lang="ts">
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <h1>Dashboard Overview</h1>
      <p :class="$style.subtitle">Welcome back! Here's what's happening today.</p>
    </div>

    <KPICards />

    <div :class="$style.chartsRow">
      <ChartPlaceholder title="Weekly Revenue" />
      <ChartPlaceholder title="Weekly Orders" />
    </div>

    <DataTable />
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 2rem;
}

.pageHeader h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #6b7280;
}

.chartsRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .chartsRow {
    grid-template-columns: 1fr;
  }
}
</style>
