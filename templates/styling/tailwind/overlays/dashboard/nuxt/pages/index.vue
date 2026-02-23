<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Dashboard Overview</h1>
      <p class="text-gray-500">Welcome back! Here's what's happening today.</p>
    </div>

    <KPICards />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
      <ChartPlaceholder title="Weekly Revenue" />
      <ChartPlaceholder title="Weekly Orders" />
    </div>

    <DataTable />
  </div>
</template>
