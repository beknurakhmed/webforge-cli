import { posts, categories } from '../main';

export function renderCategory(params?: Record<string, string>): string {
  const categoryName = params?.name || 'Technology';
  const filteredPosts = posts.filter(p => p.category === categoryName);

  return `
    <header class="blog-header">
      <div class="header-container">
        <a href="#/" class="blog-logo">📝 {{projectName}}</a>
        <nav class="blog-nav">
          <a href="#/">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="${c === categoryName ? 'active' : ''}">${c}</a>
          `).join('')}
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>

    <main class="blog-main">
      <section class="category-header">
        <h1>${categoryName}</h1>
        <p>${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in this category</p>
      </section>

      <div class="category-filters" style="margin-bottom: 2rem;">
        ${categories.map(c => `
          <a href="${c === 'All' ? '#/' : '#/category/' + c}" class="filter-btn ${c === categoryName ? 'active' : ''}">${c}</a>
        `).join('')}
      </div>

      ${filteredPosts.length === 0 ? `
        <div class="not-found">
          <h2>No articles found</h2>
          <p>There are no articles in the "${categoryName}" category yet.</p>
          <a href="#/" class="btn-primary">Browse All Articles</a>
        </div>
      ` : `
        <div class="posts-grid">
          ${filteredPosts.map(p => `
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
      `}
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
