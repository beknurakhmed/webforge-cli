<template>
  <header class="hero">
    <nav class="nav">
      <div class="logo">{{projectName}}</div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#cta">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <div class="hero-content">
      <h1>Build Something Amazing</h1>
      <p>A modern landing page template to kickstart your next project.</p>
      <div class="hero-actions">
        <button class="btn btn-primary">Get Started</button>
        <button class="btn btn-secondary">Learn More</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding-bottom: 4rem; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; max-width: 1200px; margin: 0 auto; }
.logo { font-size: 1.5rem; font-weight: 700; color: white; }
.nav-links { display: flex; gap: 2rem; }
.nav-links a { color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500; }
.hero-content { text-align: center; padding: 4rem 2rem; max-width: 800px; margin: 0 auto; }
.hero-content h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1.5rem; line-height: 1.1; }
.hero-content p { font-size: 1.25rem; opacity: 0.9; margin-bottom: 2rem; }
.hero-actions { display: flex; gap: 1rem; justify-content: center; }
.btn { padding: 0.75rem 1.5rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; border: 2px solid transparent; }
.btn-primary { background: #4f46e5; color: white; border-color: #4f46e5; }
.btn-secondary { background: transparent; color: white; border-color: rgba(255,255,255,0.5); }
</style>
