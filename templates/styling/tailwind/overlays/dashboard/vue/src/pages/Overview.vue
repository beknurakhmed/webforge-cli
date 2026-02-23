<script setup lang="ts">
import KPICards from '../components/KPICards.vue';
import ChartPlaceholder from '../components/ChartPlaceholder.vue';
import DataTable from '../components/DataTable.vue';
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Overview</h1>
      <p class="text-gray-500 mt-1">Welcome back. Here is what is happening today.</p>
    </div>
    <KPICards />
    <ChartPlaceholder title="Monthly Revenue" />
    <DataTable />
  </div>
</template>
