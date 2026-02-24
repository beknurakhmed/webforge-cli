<script setup lang="ts">
</script>

<template>
  <section id="cta" :style="{ background: '#f9fafb', padding: '80px 32px', textAlign: 'center' }">
    <div :style="{ maxWidth: '600px', margin: '0 auto' }">
      <a-typography-title :level="2">Ready to Get Started?</a-typography-title>
      <a-typography-paragraph type="secondary" :style="{ fontSize: '18px', marginBottom: '32px' }">
        Join thousands of developers building amazing products.
      </a-typography-paragraph>
      <a-button type="primary" size="large" :style="{ height: '48px', paddingInline: '40px', fontSize: '16px' }">Start Free Trial</a-button>
      <a-typography-paragraph type="secondary" :style="{ fontSize: '14px', marginTop: '12px' }">No credit card required</a-typography-paragraph>
    </div>
  </section>
</template>
