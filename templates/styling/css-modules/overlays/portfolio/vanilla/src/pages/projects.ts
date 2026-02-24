import { projects, styles } from '../main';

export function renderProjects(): string {
  const hash = window.location.hash.slice(1) || '/';
  const categoriesSet = ['All', ...new Set(projects.map(p => p.category))];

  return `
    <nav class="${styles.navbar}">
      <div class="${styles.navContainer}">
        <a href="#/" class="${styles.navLogo}">{{projectName}}</a>
        <div class="${styles.navLinks}">
          <a href="#/">Home</a>
          <a href="#/projects" class="active">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="${styles.pageHeader}">
        <h1>My Projects</h1>
        <p>A collection of projects I have worked on, from web applications to mobile apps and design work.</p>
      </section>

      <section class="${styles.section}">
        <div class="${styles.filterBar}">
          ${categoriesSet.map(c => `
            <button class="${styles.filterBtn} ${c === 'All' ? 'active' : ''}">${c}</button>
          `).join('')}
        </div>

        <div class="${styles.projectsGrid}">
          ${projects.map(p => `
            <div class="${styles.projectCard}">
              <div class="${styles.projectImage}">${p.image}</div>
              <div class="${styles.projectContent}">
                <div class="${styles.projectMeta}">
                  <span class="${styles.projectCategory}">${p.category}</span>
                  <span class="${styles.projectYear}">${p.year}</span>
                </div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="${styles.projectTags}">
                  ${p.tags.map(t => `<span class="${styles.tag}">${t}</span>`).join('')}
                </div>
                <div class="${styles.projectActions}">
                  <a href="${p.link}" class="${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}">View Project</a>
                  <a href="${p.link}" class="${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}">Source Code</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="${styles.ctaSection}">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to new opportunities and interesting projects. Let's chat!</p>
        <a href="#/contact" class="${styles.btn} ${styles.btnPrimary}">Get in Touch</a>
      </section>
    </main>

    <footer class="${styles.footer}">
      <div class="${styles.footerContent}">
        <div class="${styles.footerSection}">
          <h4>{{projectName}}</h4>
          <p>Full Stack Developer crafting digital experiences that make a difference.</p>
        </div>
        <div class="${styles.footerSection}">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
        <div class="${styles.footerSection}">
          <h4>Connect</h4>
          <a href="#">🐙 GitHub</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐦 Twitter</a>
        </div>
      </div>
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
