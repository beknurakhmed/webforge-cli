<script setup lang="ts">
import KPICards from '../components/KPICards.vue';
import ChartPlaceholder from '../components/ChartPlaceholder.vue';
import DataTable from '../components/DataTable.vue';
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <h1 :class="$style.pageTitle">Overview</h1>
      <p :class="$style.pageSubtitle">Welcome back. Here is what is happening today.</p>
    </div>
    <KPICards />
    <ChartPlaceholder title="Monthly Revenue" />
    <DataTable />
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 2rem;
}

.pageTitle {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.pageSubtitle {
  color: #6b7280;
  margin-top: 0.25rem;
}
</style>
