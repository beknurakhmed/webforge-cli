<script setup lang="ts">
</script>

<template>
  <div :class="$style.landing">
    <LandingHero />
    <LandingFeatures />
    <LandingCta />
    <LandingFooter />
  </div>
</template>

<style module>
.landing { min-height: 100vh; }
</style>
