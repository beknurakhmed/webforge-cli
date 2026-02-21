<script setup lang="ts">
import { skills } from '../data'
</script>

<template>
  <div class="skills-section">
    <div v-for="group in skills" :key="group.category" class="skill-group">
      <h3>{{ group.category }}</h3>
      <div class="skill-items">
        <span v-for="item in group.items" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
