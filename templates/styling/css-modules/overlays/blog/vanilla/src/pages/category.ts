import { posts, categories, styles } from '../main';

export function renderCategory(params?: Record<string, string>): string {
  const categoryName = params?.name || 'Technology';
  const filteredPosts = posts.filter(p => p.category === categoryName);

  return `
    <header class="${styles.blogHeader}">
      <div class="${styles.headerContainer}">
        <a href="#/" class="${styles.blogLogo}">📝 {{projectName}}</a>
        <nav class="${styles.blogNav}">
          <a href="#/">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="${c === categoryName ? 'active' : ''}">${c}</a>
          `).join('')}
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>

    <main class="${styles.blogMain}">
      <section class="${styles.categoryHeader}">
        <h1>${categoryName}</h1>
        <p>${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in this category</p>
      </section>

      <div class="${styles.categoryFilters}" style="margin-bottom: 2rem;">
        ${categories.map(c => `
          <a href="${c === 'All' ? '#/' : '#/category/' + c}" class="${styles.filterBtn} ${c === categoryName ? 'active' : ''}">${c}</a>
        `).join('')}
      </div>

      ${filteredPosts.length === 0 ? `
        <div class="${styles.notFound}">
          <h2>No articles found</h2>
          <p>There are no articles in the "${categoryName}" category yet.</p>
          <a href="#/" class="${styles.btnPrimary}">Browse All Articles</a>
        </div>
      ` : `
        <div class="${styles.postsGrid}">
          ${filteredPosts.map(p => `
            <article class="${styles.postCard}">
              <a href="#/post/${p.id}" class="${styles.postCardLink}">
                <div class="${styles.postCardImage}">${p.image}</div>
                <div class="${styles.postCardContent}">
                  <span class="${styles.postCategory}">${p.category}</span>
                  <h3>${p.title}</h3>
                  <p>${p.excerpt}</p>
                  <div class="${styles.postMeta}">
                    <span>${p.authorAvatar} ${p.author}</span>
                    <span>${p.date}</span>
                    <span>${p.readTime}</span>
                  </div>
                </div>
              </a>
            </article>
          `).join('')}
        </div>
      `}
    </main>

    <footer class="${styles.blogFooter}">
      <div class="${styles.footerContent}">
        <div class="${styles.footerSection}">
          <h4>{{projectName}}</h4>
          <p>Sharing knowledge and insights about web development, design, and technology.</p>
        </div>
        <div class="${styles.footerSection}">
          <h4>Categories</h4>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}">${c}</a>
          `).join('')}
        </div>
        <div class="${styles.footerSection}">
          <h4>Follow Us</h4>
          <a href="#">🐦 Twitter</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐙 GitHub</a>
        </div>
      </div>
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
