<script setup lang="ts">
import { computed } from 'vue'
import { deals } from '../data'

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'] as const

const columns = computed(() =>
  stages.map(stage => ({
    stage,
    deals: deals.filter(d => d.stage === stage),
  }))
)

const formatValue = (v: number) => `$${v.toLocaleString()}`
</script>

<template>
  <div>
    <div class="page-header">
      <h1>Deals</h1>
      <p>Track your sales pipeline</p>
    </div>
    <div class="deals-board">
      <div v-for="col in columns" :key="col.stage" class="deal-column">
        <h3>{{ col.stage }}</h3>
        <div v-for="deal in col.deals" :key="deal.id" class="deal-card">
          <div class="deal-name">{{ deal.name }}</div>
          <div class="deal-company">{{ deal.company }}</div>
          <div class="deal-value">{{ formatValue(deal.value) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
