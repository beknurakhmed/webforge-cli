<script setup lang="ts">
</script>

<template>
  <div class="blog-header-wrap">
    <header class="blog-header">
      <RouterLink to="/" class="logo" style="text-decoration: none;">{{projectName}}</RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
  </div>
</template>
