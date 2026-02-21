<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="brand">
        <h3>{{projectName}}</h3>
        <p>Building the future of the web.</p>
      </div>
      <div class="links">
        <div class="col">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#cta">Pricing</a>
        </div>
        <div class="col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
        </div>
        <div class="col">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>&copy; 2025 {{projectName}}. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: #111827; color: #d1d5db; padding: 4rem 2rem 2rem; }
.footer-content { display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 4rem; flex-wrap: wrap; }
.brand h3 { color: white; font-size: 1.5rem; margin-bottom: 0.5rem; }
.brand p { max-width: 300px; line-height: 1.6; }
.links { display: flex; gap: 4rem; flex-wrap: wrap; }
.col { display: flex; flex-direction: column; gap: 0.5rem; }
.col h4 { color: white; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
.col a { color: #9ca3af; text-decoration: none; font-size: 0.9rem; }
.col a:hover { color: white; }
.bottom { border-top: 1px solid #374151; margin-top: 3rem; padding-top: 1.5rem; text-align: center; }
.bottom p { font-size: 0.875rem; color: #6b7280; }
</style>
