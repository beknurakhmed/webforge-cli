<template>
  <footer class="store-footer">
    <div class="footer-content">
      <h3>{{projectName}}</h3>
      <p>Your one-stop shop for quality products.</p>
    </div>
    <div class="footer-bottom"><p>&copy; 2025 {{projectName}}. All rights reserved.</p></div>
  </footer>
</template>

<style scoped>
.store-footer { background: #111827; color: #d1d5db; padding: 3rem 2rem 1.5rem; margin-top: auto; }
.footer-content { max-width: 1200px; margin: 0 auto; }
.footer-content h3 { color: white; margin-bottom: 0.5rem; }
.footer-bottom { border-top: 1px solid #374151; margin-top: 2rem; padding-top: 1rem; text-align: center; }
.footer-bottom p { font-size: 0.8rem; color: #6b7280; }
</style>
