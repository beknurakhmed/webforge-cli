import { skills, experience } from '../main';

export function renderAbout(): string {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#/" class="nav-logo">{{projectName}}</a>
        <div class="nav-links">
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about" class="active">About</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="page-header">
        <h1>About Me</h1>
        <p>Learn more about my background, experience, and what drives me as a developer.</p>
      </section>

      <section class="section">
        <div class="about-grid">
          <div class="about-avatar-section">
            <div class="about-avatar">👨‍💻</div>
            <h2>{{projectName}}</h2>
            <p class="about-subtitle">Full Stack Developer</p>
            <div class="about-social">
              <a href="#" class="social-link">🐙</a>
              <a href="#" class="social-link">💼</a>
              <a href="#" class="social-link">🐦</a>
              <a href="#" class="social-link">📧</a>
            </div>
          </div>
          <div class="about-bio">
            <h3>My Story</h3>
            <p>I'm a passionate Full Stack Developer with over 5 years of experience building web and mobile applications. I specialize in creating performant, accessible, and visually appealing digital experiences.</p>
            <p>My journey in software development began when I built my first website at age 15. Since then, I've been constantly learning and growing, working with startups and enterprises alike to deliver impactful solutions.</p>
            <p>When I'm not coding, you can find me contributing to open source projects, writing technical articles, or exploring the great outdoors. I believe in continuous learning and sharing knowledge with the community.</p>

            <div class="about-details">
              <div class="detail-item">
                <span class="detail-label">Location</span>
                <span class="detail-value">📍 San Francisco, CA</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Email</span>
                <span class="detail-value">📧 hello@developer.com</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Availability</span>
                <span class="detail-value">🟢 Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>Experience</h2>
        <div class="timeline">
          ${experience.map((exp, i) => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <h3>${exp.role}</h3>
                  <span class="timeline-period">${exp.period}</span>
                </div>
                <p class="timeline-company">${exp.company}</p>
                <p class="timeline-description">${exp.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="section">
        <h2>Skills & Expertise</h2>
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

      <section class="section">
        <div class="education-grid">
          <div class="edu-card">
            <div class="edu-icon">🎓</div>
            <h3>B.S. Computer Science</h3>
            <p class="edu-school">University of Technology</p>
            <p class="edu-year">2014 - 2018</p>
          </div>
          <div class="edu-card">
            <div class="edu-icon">📜</div>
            <h3>AWS Certified Developer</h3>
            <p class="edu-school">Amazon Web Services</p>
            <p class="edu-year">2021</p>
          </div>
          <div class="edu-card">
            <div class="edu-icon">📜</div>
            <h3>Google UX Design Certificate</h3>
            <p class="edu-school">Google / Coursera</p>
            <p class="edu-year">2022</p>
          </div>
        </div>
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
