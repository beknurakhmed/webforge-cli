<script setup lang="ts">
</script>

<template>
  <footer :style="{ background: '#111827', color: '#d1d5db', padding: '64px 32px 32px' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', gap: '64px', flexWrap: 'wrap' }">
      <div>
        <a-typography-title :level="4" :style="{ color: '#fff', marginBottom: '8px' }">{{projectName}}</a-typography-title>
        <a-typography-paragraph :style="{ color: '#9ca3af', maxWidth: '300px' }">Building the future of the web.</a-typography-paragraph>
      </div>
      <a-row :gutter="64">
        <a-col>
          <a-typography-text strong :style="{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px', display: 'block', marginBottom: '12px' }">Product</a-typography-text>
          <a-space direction="vertical" :size="8">
            <a-typography-link href="#features" :style="{ color: '#9ca3af' }">Features</a-typography-link>
            <a-typography-link href="#cta" :style="{ color: '#9ca3af' }">Pricing</a-typography-link>
          </a-space>
        </a-col>
        <a-col>
          <a-typography-text strong :style="{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px', display: 'block', marginBottom: '12px' }">Company</a-typography-text>
          <a-space direction="vertical" :size="8">
            <a-typography-link href="#" :style="{ color: '#9ca3af' }">About</a-typography-link>
            <a-typography-link href="#" :style="{ color: '#9ca3af' }">Blog</a-typography-link>
          </a-space>
        </a-col>
        <a-col>
          <a-typography-text strong :style="{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px', display: 'block', marginBottom: '12px' }">Legal</a-typography-text>
          <a-space direction="vertical" :size="8">
            <a-typography-link href="#" :style="{ color: '#9ca3af' }">Privacy</a-typography-link>
            <a-typography-link href="#" :style="{ color: '#9ca3af' }">Terms</a-typography-link>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <a-divider :style="{ borderColor: '#374151', marginTop: '48px' }" />
    <div :style="{ textAlign: 'center' }">
      <a-typography-text :style="{ color: '#6b7280', fontSize: '14px' }">&copy; 2025 {{projectName}}. All rights reserved.</a-typography-text>
    </div>
  </footer>
</template>
