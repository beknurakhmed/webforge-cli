<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const dark = ref(
  typeof window !== 'undefined'
    ? localStorage.getItem('theme') === 'dark'
    : false
);

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', dark.value ? 'dark' : 'light');
  localStorage.setItem('theme', dark.value ? 'dark' : 'light');
});
</script>

<template>
  <button
    @click="dark = !dark"
    :style="{
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
      border: '1px solid var(--border)',
      borderRadius: '0.25rem',
      background: 'var(--bg-secondary)',
      color: 'var(--text)',
      cursor: 'pointer',
    }"
    aria-label="Toggle theme"
  >
    {{ dark ? '\u2600\uFE0F' : '\uD83C\uDF19' }}
  </button>
</template>
