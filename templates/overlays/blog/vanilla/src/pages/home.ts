import { posts, categories } from '../main';

export function renderHome(): string {
  const featured = posts[0];
  const recent = posts.slice(1);

  return `
    <header class="blog-header">
      <div class="header-container">
        <a href="#/" class="blog-logo">📝 {{projectName}}</a>
        <nav class="blog-nav">
          <a href="#/" class="active">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}">${c}</a>
          `).join('')}
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>

    <main class="blog-main">
      <section class="hero-post">
        <a href="#/post/${featured.id}" class="hero-post-link">
          <div class="hero-post-image">${featured.image}</div>
          <div class="hero-post-content">
            <span class="post-category">${featured.category}</span>
            <h1>${featured.title}</h1>
            <p>${featured.excerpt}</p>
            <div class="post-meta">
              <span class="post-author">${featured.authorAvatar} ${featured.author}</span>
              <span class="post-date">${featured.date}</span>
              <span class="post-read-time">${featured.readTime}</span>
            </div>
          </div>
        </a>
      </section>

      <section class="posts-section">
        <div class="section-header">
          <h2>Latest Articles</h2>
          <div class="category-filters">
            ${categories.map(c => `
              <a href="${c === 'All' ? '#/' : '#/category/' + c}" class="filter-btn ${c === 'All' ? 'active' : ''}">${c}</a>
            `).join('')}
          </div>
        </div>

        <div class="posts-grid">
          ${recent.map(p => `
            <article class="post-card">
              <a href="#/post/${p.id}" class="post-card-link">
                <div class="post-card-image">${p.image}</div>
                <div class="post-card-content">
                  <span class="post-category">${p.category}</span>
                  <h3>${p.title}</h3>
                  <p>${p.excerpt}</p>
                  <div class="post-meta">
                    <span class="post-author">${p.authorAvatar} ${p.author}</span>
                    <span class="post-date">${p.date}</span>
                    <span class="post-read-time">${p.readTime}</span>
                  </div>
                </div>
              </a>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest articles and insights delivered straight to your inbox.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email address" class="newsletter-input" />
          <button class="newsletter-btn">Subscribe</button>
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
