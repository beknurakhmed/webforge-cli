<script setup lang="ts">
import KPICards from '../components/KPICards.vue';
import ChartPlaceholder from '../components/ChartPlaceholder.vue';
import DataTable from '../components/DataTable.vue';
</script>

<template>
  <div>
    <div class="page-header">
      <h1 class="page-title">Overview</h1>
      <p class="page-subtitle">Welcome back. Here is what is happening today.</p>
    </div>
    <KPICards />
    <ChartPlaceholder title="Monthly Revenue" />
    <DataTable />
  </div>
</template>
