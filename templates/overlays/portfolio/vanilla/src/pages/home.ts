import { projects, skills } from '../main';

export function renderHome(): string {
  const hash = window.location.hash.slice(1) || '/';
  const featuredProjects = projects.slice(0, 3);

  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#/" class="nav-logo">{{projectName}}</a>
        <div class="nav-links">
          <a href="#/" class="${hash === '/' ? 'active' : ''}">Home</a>
          <a href="#/projects" class="${hash === '/projects' ? 'active' : ''}">Projects</a>
          <a href="#/about" class="${hash === '/about' ? 'active' : ''}">About</a>
          <a href="#/contact" class="${hash === '/contact' ? 'active' : ''}">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="hero">
        <div class="hero-content">
          <p class="hero-greeting">Hello, I'm</p>
          <h1 class="hero-name">{{projectName}}</h1>
          <p class="hero-title">Full Stack Developer & Designer</p>
          <p class="hero-description">I build beautiful, performant, and accessible web applications that solve real-world problems. Passionate about clean code and great user experiences.</p>
          <div class="hero-actions">
            <a href="#/projects" class="btn btn-primary">View My Work</a>
            <a href="#/contact" class="btn btn-secondary">Get in Touch</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <h3>${projects.length}+</h3>
              <p>Projects</p>
            </div>
            <div class="hero-stat">
              <h3>5+</h3>
              <p>Years Exp.</p>
            </div>
            <div class="hero-stat">
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-avatar">👨‍💻</div>
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <h2>Featured Projects</h2>
          <a href="#/projects" class="section-link">View All &rarr;</a>
        </div>
        <div class="projects-grid">
          ${featuredProjects.map(p => `
            <div class="project-card">
              <div class="project-image">${p.image}</div>
              <div class="project-content">
                <span class="project-category">${p.category}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tags">
                  ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="section">
        <h2>Skills & Technologies</h2>
        <div class="skills-grid">
          ${skills.map(s => `
            <div class="skill-card">
              <div class="skill-header">
                <span class="skill-icon">${s.icon}</span>
                <span class="skill-name">${s.name}</span>
                <span class="skill-level">${s.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="cta-section">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
        <a href="#/contact" class="btn btn-primary">Start a Conversation</a>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>{{projectName}}</h4>
          <p>Full Stack Developer crafting digital experiences that make a difference.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <a href="#">🐙 GitHub</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐦 Twitter</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
