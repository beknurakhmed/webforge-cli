<template>
  <footer :class="$style.storeFooter">
    <div :class="$style.footerInner">
      <h3 :class="$style.footerBrand">{{projectName}}</h3>
      <p :class="$style.footerText">Your one-stop shop for quality products.</p>
    </div>
    <div :class="$style.footerBottom">
      <p>&copy; 2025 {{projectName}}. All rights reserved.</p>
    </div>
  </footer>
</template>

<style module>
.storeFooter { background: #111827; color: #d1d5db; padding: 3rem 2rem 1.5rem; margin-top: auto; }
.footerInner { max-width: 1200px; margin: 0 auto; }
.footerBrand { color: #ffffff; font-size: 1.25rem; margin-bottom: 0.5rem; }
.footerText { color: #9ca3af; font-size: 0.9rem; }
.footerBottom { border-top: 1px solid #374151; margin-top: 2rem; padding-top: 1rem; text-align: center; font-size: 0.8rem; color: #6b7280; }
</style>
