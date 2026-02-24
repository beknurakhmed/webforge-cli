<template>
  <footer :class="$style.footer">
    <div :class="$style.footerContent">
      <div :class="$style.brand">
        <h3>{{projectName}}</h3>
        <p>Building the future of the web.</p>
      </div>
      <div :class="$style.links">
        <div :class="$style.col"><h4>Product</h4><a href="#features">Features</a><a href="#cta">Pricing</a></div>
        <div :class="$style.col"><h4>Company</h4><a href="#">About</a><a href="#">Blog</a></div>
        <div :class="$style.col"><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </div>
    <div :class="$style.bottom"><p>&copy; 2025 {{projectName}}. All rights reserved.</p></div>
  </footer>
</template>

<style module>
.footer { background: #111827; color: #d1d5db; padding: 4rem 2rem 2rem; }
.footerContent { display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 4rem; flex-wrap: wrap; }
.brand h3 { color: white; font-size: 1.5rem; margin-bottom: 0.5rem; }
.links { display: flex; gap: 4rem; }
.col { display: flex; flex-direction: column; gap: 0.5rem; }
.col h4 { color: white; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 0.5rem; }
.col a { color: #9ca3af; text-decoration: none; }
.col a:hover { color: white; }
.bottom { border-top: 1px solid #374151; margin-top: 3rem; padding-top: 1.5rem; text-align: center; }
.bottom p { font-size: 0.875rem; color: #6b7280; }
</style>
