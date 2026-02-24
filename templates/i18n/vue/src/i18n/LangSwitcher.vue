<script setup lang="ts">
import { useI18n, type Lang } from './index';

const { lang, switchLang, languages } = useI18n();
</script>

<template>
  <div style="display: inline-flex; gap: 0.25rem">
    <button
      v-for="l in languages"
      :key="l"
      @click="switchLang(l as Lang)"
      :style="{
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        border: '1px solid',
        borderColor: l === lang ? '#4f46e5' : '#d1d5db',
        borderRadius: '0.25rem',
        background: l === lang ? '#4f46e5' : 'transparent',
        color: l === lang ? '#fff' : 'inherit',
        cursor: 'pointer',
        textTransform: 'uppercase',
      }"
    >
      {{ l }}
    </button>
  </div>
</template>
