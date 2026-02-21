import { posts, categories } from '../main';

export function renderAbout(): string {
  const authors = [
    { name: 'Sarah Chen', avatar: '👩', role: 'Lead Writer', bio: 'Full-stack developer with a passion for TypeScript and modern web technologies.' },
    { name: 'Mike Johnson', avatar: '👨', role: 'Design Editor', bio: 'UI/UX designer who loves creating beautiful and accessible web experiences.' },
    { name: 'Emily Davis', avatar: '👩‍💼', role: 'Backend Expert', bio: 'Backend engineer specializing in Node.js, APIs, and cloud architecture.' },
    { name: 'Alex Rivera', avatar: '🧑', role: 'UX Researcher', bio: 'Dedicated to understanding users and improving digital product experiences.' },
  ];

  return `
    <header class="blog-header">
      <div class="header-container">
        <a href="#/" class="blog-logo">📝 {{projectName}}</a>
        <nav class="blog-nav">
          <a href="#/">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}">${c}</a>
          `).join('')}
          <a href="#/about" class="active">About</a>
        </nav>
      </div>
    </header>

    <main class="blog-main">
      <section class="about-hero">
        <h1>About {{projectName}}</h1>
        <p>We are a community of developers, designers, and creators sharing our knowledge and experiences through thoughtful, well-crafted articles.</p>
      </section>

      <section class="about-section">
        <div class="about-grid">
          <div class="about-content">
            <h2>Our Mission</h2>
            <p>At {{projectName}}, we believe that knowledge should be accessible to everyone. Our mission is to provide high-quality, practical content that helps developers and designers grow their skills and advance their careers.</p>
            <p>Whether you are just starting out or are a seasoned professional, you will find articles that challenge your thinking and expand your horizons. We cover everything from fundamental concepts to cutting-edge technologies.</p>
          </div>
          <div class="about-stats">
            <div class="about-stat">
              <h3>${posts.length}+</h3>
              <p>Articles Published</p>
            </div>
            <div class="about-stat">
              <h3>10K+</h3>
              <p>Monthly Readers</p>
            </div>
            <div class="about-stat">
              <h3>${categories.length - 1}</h3>
              <p>Categories</p>
            </div>
            <div class="about-stat">
              <h3>4</h3>
              <p>Writers</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section">
        <h2>Our Team</h2>
        <div class="team-grid">
          ${authors.map(a => `
            <div class="team-card">
              <div class="team-avatar">${a.avatar}</div>
              <h3>${a.name}</h3>
              <p class="team-role">${a.role}</p>
              <p class="team-bio">${a.bio}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="about-section">
        <div class="about-cta">
          <h2>Want to Contribute?</h2>
          <p>We are always looking for passionate writers who want to share their expertise. If you have insights to share, we would love to hear from you.</p>
          <a href="#/" class="btn-primary">Get in Touch</a>
        </div>
      </section>
    </main>

    <footer class="blog-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>{{projectName}}</h4>
          <p>Sharing knowledge and insights about web development, design, and technology.</p>
        </div>
        <div class="footer-section">
          <h4>Categories</h4>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}">${c}</a>
          `).join('')}
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <a href="#">🐦 Twitter</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐙 GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
