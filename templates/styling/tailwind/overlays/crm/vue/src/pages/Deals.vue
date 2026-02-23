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
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Deals</h1>
      <p class="text-gray-500 text-sm">Track your sales pipeline</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="col in columns" :key="col.stage" class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-xs uppercase tracking-wider text-gray-500 mb-3 pb-2 border-b-2 border-indigo-600">{{ col.stage }}</h3>
        <div v-for="deal in col.deals" :key="deal.id" class="bg-gray-50 rounded-md p-3 mb-2 border border-gray-200">
          <div class="font-semibold text-sm text-gray-900">{{ deal.name }}</div>
          <div class="text-xs text-gray-500">{{ deal.company }}</div>
          <div class="text-sm font-bold text-indigo-600 mt-1">{{ formatValue(deal.value) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
