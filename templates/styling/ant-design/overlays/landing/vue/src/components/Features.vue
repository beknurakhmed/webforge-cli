<script setup lang="ts">
const features = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
];
</script>

<template>
  <section id="features" :style="{ padding: '80px 32px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }">
    <a-typography-title :level="2">Features</a-typography-title>
    <a-typography-text type="secondary" :style="{ display: 'block', marginBottom: '48px', fontSize: '16px' }">
      Everything you need to build a modern web application
    </a-typography-text>
    <a-row :gutter="[24, 24]">
      <a-col v-for="(f, i) in features" :key="i" :xs="24" :sm="12" :lg="8">
        <a-card hoverable>
          <div :style="{ fontSize: '32px', marginBottom: '12px' }">{{ f.icon }}</div>
          <a-typography-title :level="4" :style="{ marginBottom: '8px' }">{{ f.title }}</a-typography-title>
          <a-typography-paragraph type="secondary">{{ f.description }}</a-typography-paragraph>
        </a-card>
      </a-col>
    </a-row>
  </section>
</template>
