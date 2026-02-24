import { projects, skills, styles } from '../main';

export function renderHome(): string {
  const hash = window.location.hash.slice(1) || '/';
  const featuredProjects = projects.slice(0, 3);

  return `
    <nav class="${styles.navbar}">
      <div class="${styles.navContainer}">
        <a href="#/" class="${styles.navLogo}">{{projectName}}</a>
        <div class="${styles.navLinks}">
          <a href="#/" class="${hash === '/' ? 'active' : ''}">Home</a>
          <a href="#/projects" class="${hash === '/projects' ? 'active' : ''}">Projects</a>
          <a href="#/about" class="${hash === '/about' ? 'active' : ''}">About</a>
          <a href="#/contact" class="${hash === '/contact' ? 'active' : ''}">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="${styles.hero}">
        <div class="${styles.heroContent}">
          <p class="${styles.heroGreeting}">Hello, I'm</p>
          <h1 class="${styles.heroName}">{{projectName}}</h1>
          <p class="${styles.heroTitle}">Full Stack Developer & Designer</p>
          <p class="${styles.heroDescription}">I build beautiful, performant, and accessible web applications that solve real-world problems. Passionate about clean code and great user experiences.</p>
          <div class="${styles.heroActions}">
            <a href="#/projects" class="${styles.btn} ${styles.btnPrimary}">View My Work</a>
            <a href="#/contact" class="${styles.btn} ${styles.btnSecondary}">Get in Touch</a>
          </div>
          <div class="${styles.heroStats}">
            <div class="${styles.heroStat}">
              <h3>${projects.length}+</h3>
              <p>Projects</p>
            </div>
            <div class="${styles.heroStat}">
              <h3>5+</h3>
              <p>Years Exp.</p>
            </div>
            <div class="${styles.heroStat}">
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div class="${styles.heroVisual}">
          <div class="${styles.heroAvatar}">👨‍💻</div>
        </div>
      </section>

      <section class="${styles.section}">
        <div class="${styles.sectionHeader}">
          <h2>Featured Projects</h2>
          <a href="#/projects" class="${styles.sectionLink}">View All &rarr;</a>
        </div>
        <div class="${styles.projectsGrid}">
          ${featuredProjects.map(p => `
            <div class="${styles.projectCard}">
              <div class="${styles.projectImage}">${p.image}</div>
              <div class="${styles.projectContent}">
                <span class="${styles.projectCategory}">${p.category}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="${styles.projectTags}">
                  ${p.tags.map(t => `<span class="${styles.tag}">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="${styles.section}">
        <h2>Skills & Technologies</h2>
        <div class="${styles.skillsGrid}">
          ${skills.map(s => `
            <div class="${styles.skillCard}">
              <div class="${styles.skillHeader}">
                <span class="${styles.skillIcon}">${s.icon}</span>
                <span class="${styles.skillName}">${s.name}</span>
                <span class="${styles.skillLevel}">${s.level}%</span>
              </div>
              <div class="${styles.skillBar}">
                <div class="${styles.skillFill}" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="${styles.ctaSection}">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
        <a href="#/contact" class="${styles.btn} ${styles.btnPrimary}">Start a Conversation</a>
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
