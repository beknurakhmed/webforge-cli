<template>
  <footer class="portfolio-footer">
    <div class="footer-inner">
      <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      <div class="footer-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.portfolio-footer {
  background: #111827;
  color: #9ca3af;
  padding: 2rem 1.5rem;
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-inner p {
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 1.25rem;
}

.footer-links a {
  color: #9ca3af;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: white;
}
</style>
