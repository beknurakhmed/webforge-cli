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
    <div :class="$style.pageHeader">
      <h1>Deals</h1>
      <p>Track your sales pipeline</p>
    </div>
    <div :class="$style.dealsBoard">
      <div v-for="col in columns" :key="col.stage" :class="$style.dealColumn">
        <h3>{{ col.stage }}</h3>
        <div v-for="deal in col.deals" :key="deal.id" :class="$style.dealCard">
          <div :class="$style.dealName">{{ deal.name }}</div>
          <div :class="$style.dealCompany">{{ deal.company }}</div>
          <div :class="$style.dealValue">{{ formatValue(deal.value) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.pageHeader {
  margin-bottom: 1.5rem;
}

.pageHeader h1 {
  font-size: 1.5rem;
  color: #111827;
  font-weight: 700;
}

.pageHeader p {
  color: #6b7280;
  font-size: 0.9rem;
}

.dealsBoard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.dealColumn {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.dealColumn h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4f46e5;
}

.dealCard {
  background: #f9fafb;
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: 1px solid #e5e7eb;
}

.dealName {
  font-weight: 600;
  font-size: 0.9rem;
  color: #111827;
}

.dealValue {
  color: #4f46e5;
  font-weight: 700;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.dealCompany {
  font-size: 0.8rem;
  color: #6b7280;
}
</style>
