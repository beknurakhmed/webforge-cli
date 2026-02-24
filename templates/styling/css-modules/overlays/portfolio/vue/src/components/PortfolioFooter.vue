<script setup lang="ts">
</script>

<template>
  <footer :class="$style.portfolioFooter">
    <div :class="$style.socialLinks">
      <a href="#" title="GitHub">🐙</a>
      <a href="#" title="LinkedIn">💼</a>
      <a href="#" title="Twitter">🐦</a>
      <a href="#" title="Email">📧</a>
    </div>
    <p :class="$style.copyright">&copy; 2025 {{projectName}}. Built with passion.</p>
  </footer>
</template>

<style module>
.portfolioFooter {
  background: #111827;
  color: #9ca3af;
  text-align: center;
  padding: 2rem 1.5rem;
  margin-top: auto;
}

.socialLinks {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.socialLinks a {
  color: #9ca3af;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.2s;
}

.socialLinks a:hover {
  color: #fff;
}

.copyright {
  font-size: 0.85rem;
}
</style>
