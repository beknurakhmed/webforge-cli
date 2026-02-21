<script setup lang="ts">
</script>

<template>
  <div class="portfolio-nav-wrap">
    <div class="portfolio-nav">
      <RouterLink to="/" class="logo">{{projectName}}</RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </div>
</template>
