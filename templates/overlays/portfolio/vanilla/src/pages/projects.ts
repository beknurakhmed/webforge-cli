import { projects } from '../main';

export function renderProjects(): string {
  const hash = window.location.hash.slice(1) || '/';
  const categoriesSet = ['All', ...new Set(projects.map(p => p.category))];

  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#/" class="nav-logo">{{projectName}}</a>
        <div class="nav-links">
          <a href="#/">Home</a>
          <a href="#/projects" class="active">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="page-header">
        <h1>My Projects</h1>
        <p>A collection of projects I have worked on, from web applications to mobile apps and design work.</p>
      </section>

      <section class="section">
        <div class="filter-bar">
          ${categoriesSet.map(c => `
            <button class="filter-btn ${c === 'All' ? 'active' : ''}">${c}</button>
          `).join('')}
        </div>

        <div class="projects-grid">
          ${projects.map(p => `
            <div class="project-card">
              <div class="project-image">${p.image}</div>
              <div class="project-content">
                <div class="project-meta">
                  <span class="project-category">${p.category}</span>
                  <span class="project-year">${p.year}</span>
                </div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tags">
                  ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                  <a href="${p.link}" class="btn btn-primary btn-small">View Project</a>
                  <a href="${p.link}" class="btn btn-secondary btn-small">Source Code</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="cta-section">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to new opportunities and interesting projects. Let's chat!</p>
        <a href="#/contact" class="btn btn-primary">Get in Touch</a>
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
