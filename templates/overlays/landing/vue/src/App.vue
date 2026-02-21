<script setup lang="ts">
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import CTA from './components/CTA.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="landing">
    <Hero />
    <Features />
    <CTA />
    <AppFooter />
  </div>
</template>

<style>
.landing { min-height: 100vh; }
</style>
