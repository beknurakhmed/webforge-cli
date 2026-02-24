<script setup lang="ts">
import type { Project } from '../data'

defineProps<{ project: Project }>()
</script>

<template>
  <div :class="$style.projectCard">
    <div :class="$style.cardImage">{{ project.image }}</div>
    <div :class="$style.cardBody">
      <div :class="$style.cardTitle">{{ project.title }}</div>
      <div :class="$style.cardDesc">{{ project.description }}</div>
      <div :class="$style.cardTags">
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style module>
.projectCard {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
}

.projectCard:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.cardImage {
  background: #eef2ff;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
}

.cardBody {
  padding: 1.25rem;
}

.cardTitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.4rem;
}

.cardDesc {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.cardTags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.cardTags span {
  background: #eef2ff;
  color: #4f46e5;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
}
</style>
