<template>
  <footer :class="$style.blogFooter">
    <div :class="$style.footerInner">
      <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      <div :class="$style.footerLinks">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style module>
.blogFooter {
  background: #111827;
  color: #9ca3af;
  padding: 1.5rem 1rem;
  margin-top: auto;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.footerInner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footerInner p {
  font-size: 0.875rem;
}

.footerLinks {
  display: flex;
  gap: 1.25rem;
}

.footerLinks a {
  color: #9ca3af;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footerLinks a:hover {
  color: white;
}
</style>
