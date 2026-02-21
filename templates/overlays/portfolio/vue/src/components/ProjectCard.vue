<script setup lang="ts">
import type { Project } from '../data'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="project-card">
    <div class="card-image">{{ project.image }}</div>
    <div class="card-body">
      <div class="card-title">{{ project.title }}</div>
      <div class="card-desc">{{ project.description }}</div>
      <div class="card-tags">
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
