<script setup lang="ts">
</script>

<template>
  <header :style="{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', paddingBottom: '64px' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', maxWidth: '1200px', margin: '0 auto' }">
      <a-typography-text strong :style="{ color: '#fff', fontSize: '24px' }">{{projectName}}</a-typography-text>
      <a-space :size="24">
        <a href="#features" :style="{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }">Features</a>
        <a href="#cta" :style="{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }">Pricing</a>
        <a href="#contact" :style="{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }">Contact</a>
      </a-space>
    </div>
    <div :style="{ textAlign: 'center', padding: '64px 32px', maxWidth: '800px', margin: '0 auto' }">
      <a-typography-title :level="1" :style="{ color: '#fff', fontSize: '56px', marginBottom: '16px' }">Build Something Amazing</a-typography-title>
      <a-typography-paragraph :style="{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', marginBottom: '32px' }">
        A modern landing page template to kickstart your next project.
      </a-typography-paragraph>
      <a-space :size="16">
        <a-button type="primary" size="large" :style="{ height: '48px', paddingInline: '32px' }">Get Started</a-button>
        <a-button ghost size="large" :style="{ height: '48px', paddingInline: '32px' }">Learn More</a-button>
      </a-space>
    </div>
  </header>
</template>
