<script setup lang="ts">
</script>

<template>
  <footer :class="$style.blogFooter">
    <p>&copy; 2025 {{projectName}}. All rights reserved.</p>
  </footer>
</template>

<style module>
.blogFooter {
  text-align: center;
  padding: 1.5rem;
  color: #9ca3af;
  font-size: 0.85rem;
  border-top: 1px solid #e5e7eb;
  background: #fff;
  margin-top: auto;
}
</style>
