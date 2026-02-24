import styles from './style.module.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="${styles.landing}">
    <header class="${styles.hero}">
      <nav class="${styles.nav}">
        <div class="${styles.logo}">{{projectName}}</div>
        <div class="${styles.navLinks}">
          <a href="#features">Features</a>
          <a href="#cta">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div class="${styles.heroContent}">
        <h1>Build Something Amazing</h1>
        <p>A modern landing page template to kickstart your next project.</p>
        <div class="${styles.heroActions}">
          <button class="${styles.btn} ${styles.btnPrimary}">Get Started</button>
          <button class="${styles.btn} ${styles.btnSecondary}">Learn More</button>
        </div>
      </div>
    </header>

    <section id="features" class="${styles.features}">
      <h2>Features</h2>
      <p class="${styles.subtitle}">Everything you need to build a modern web application</p>
      <div class="${styles.grid}" id="feature-grid"></div>
    </section>

    <section id="cta" class="${styles.cta}">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of developers building amazing products.</p>
      <button class="${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}">Start Free Trial</button>
      <p class="${styles.note}">No credit card required</p>
    </section>

    <footer class="${styles.footer}">
      <div class="${styles.footerContent}">
        <div class="${styles.brand}">
          <h3>{{projectName}}</h3>
          <p>Building the future of the web.</p>
        </div>
        <div class="${styles.links}">
          <div class="${styles.col}"><h4>Product</h4><a href="#features">Features</a><a href="#cta">Pricing</a></div>
          <div class="${styles.col}"><h4>Company</h4><a href="#">About</a><a href="#">Blog</a></div>
          <div class="${styles.col}"><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </div>
      <div class="${styles.bottom}"><p>&copy; 2025 {{projectName}}. All rights reserved.</p></div>
    </footer>
  </div>
`;

const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', desc: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', desc: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', desc: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', desc: 'Deploy anywhere in minutes.' },
];

const grid = document.getElementById('feature-grid')!;
grid.innerHTML = features
  .map(f => `<div class="${styles.card}"><span class="${styles.icon}">${f.icon}</span><h3>${f.title}</h3><p>${f.desc}</p></div>`)
  .join('');
