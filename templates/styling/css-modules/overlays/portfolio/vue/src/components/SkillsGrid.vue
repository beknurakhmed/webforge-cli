<script setup lang="ts">
import { skills } from '../data'
</script>

<template>
  <div :class="$style.skillsSection">
    <div v-for="group in skills" :key="group.category" :class="$style.skillGroup">
      <h3>{{ group.category }}</h3>
      <div :class="$style.skillItems">
        <span v-for="item in group.items" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style module>
.skillsSection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.skillGroup {
  background: #fff;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.skillGroup h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #4f46e5;
  margin-bottom: 0.75rem;
}

.skillItems {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skillItems span {
  background: #f3f4f6;
  color: #374151;
  font-size: 0.85rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
}
</style>
