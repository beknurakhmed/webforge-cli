import { posts, categories } from '../main';

export function renderPostDetail(params?: Record<string, string>): string {
  const id = parseInt(params?.id || '1');
  const post = posts.find(p => p.id === id);

  if (!post) {
    return `
      <header class="blog-header">
        <div class="header-container">
          <a href="#/" class="blog-logo">📝 {{projectName}}</a>
          <nav class="blog-nav">
            <a href="#/">Home</a>
            <a href="#/about">About</a>
          </nav>
        </div>
      </header>
      <main class="blog-main">
        <div class="not-found">
          <h2>Post Not Found</h2>
          <p>The article you are looking for does not exist.</p>
          <a href="#/" class="btn-primary">Back to Home</a>
        </div>
      </main>
    `;
  }

  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return `
    <header class="blog-header">
      <div class="header-container">
        <a href="#/" class="blog-logo">📝 {{projectName}}</a>
        <nav class="blog-nav">
          <a href="#/">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="${c === post.category ? 'active' : ''}">${c}</a>
          `).join('')}
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>

    <main class="blog-main">
      <article class="post-detail">
        <div class="post-detail-header">
          <div class="breadcrumb">
            <a href="#/">Home</a> / <a href="#/category/${post.category}">${post.category}</a> / <span>${post.title}</span>
          </div>
          <span class="post-category">${post.category}</span>
          <h1>${post.title}</h1>
          <div class="post-meta post-meta-detail">
            <span class="post-author">${post.authorAvatar} ${post.author}</span>
            <span class="post-date">📅 ${post.date}</span>
            <span class="post-read-time">⏱️ ${post.readTime}</span>
          </div>
        </div>

        <div class="post-detail-image">${post.image}</div>

        <div class="post-detail-body">
          ${post.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>

        <div class="post-tags">
          ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>

        <div class="post-author-card">
          <span class="author-card-avatar">${post.authorAvatar}</span>
          <div class="author-card-info">
            <h4>${post.author}</h4>
            <p>Writer and contributor at {{projectName}}. Passionate about sharing knowledge with the community.</p>
          </div>
        </div>
      </article>

      ${relatedPosts.length > 0 ? `
        <section class="related-posts">
          <h2>Related Articles</h2>
          <div class="posts-grid">
            ${relatedPosts.map(p => `
              <article class="post-card">
                <a href="#/post/${p.id}" class="post-card-link">
                  <div class="post-card-image">${p.image}</div>
                  <div class="post-card-content">
                    <span class="post-category">${p.category}</span>
                    <h3>${p.title}</h3>
                    <div class="post-meta">
                      <span class="post-author">${p.authorAvatar} ${p.author}</span>
                      <span class="post-read-time">${p.readTime}</span>
                    </div>
                  </div>
                </a>
              </article>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </main>

    <footer class="blog-footer">
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
