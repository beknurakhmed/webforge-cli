<template>
  <header :class="$style.hero">
    <nav :class="$style.nav">
      <div :class="$style.logo">{{projectName}}</div>
      <div :class="$style.navLinks">
        <a href="#features">Features</a>
        <a href="#cta">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <div :class="$style.heroContent">
      <h1>Build Something Amazing</h1>
      <p>A modern landing page template to kickstart your next project.</p>
      <div :class="$style.heroActions">
        <button :class="[$style.btn, $style.btnPrimary]">Get Started</button>
        <button :class="[$style.btn, $style.btnSecondary]">Learn More</button>
      </div>
    </div>
  </header>
</template>

<style module>
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding-bottom: 4rem; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; max-width: 1200px; margin: 0 auto; }
.logo { font-size: 1.5rem; font-weight: 700; }
.navLinks { display: flex; gap: 2rem; }
.navLinks a { color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500; }
.heroContent { text-align: center; padding: 4rem 2rem; max-width: 800px; margin: 0 auto; }
.heroContent h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1.5rem; line-height: 1.1; }
.heroContent p { font-size: 1.25rem; opacity: 0.9; margin-bottom: 2rem; }
.heroActions { display: flex; gap: 1rem; justify-content: center; }
.btn { padding: 0.75rem 1.5rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; border: 2px solid transparent; }
.btnPrimary { background: #4f46e5; color: white; border-color: #4f46e5; }
.btnSecondary { background: transparent; color: white; border-color: rgba(255,255,255,0.5); }
</style>
