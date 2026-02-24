import { posts, categories, styles } from '../main';

export function renderPostDetail(params?: Record<string, string>): string {
  const id = parseInt(params?.id || '1');
  const post = posts.find(p => p.id === id);

  if (!post) {
    return `
      <header class="${styles.blogHeader}">
        <div class="${styles.headerContainer}">
          <a href="#/" class="${styles.blogLogo}">📝 {{projectName}}</a>
          <nav class="${styles.blogNav}">
            <a href="#/">Home</a>
            <a href="#/about">About</a>
          </nav>
        </div>
      </header>
      <main class="${styles.blogMain}">
        <div class="${styles.notFound}">
          <h2>Post Not Found</h2>
          <p>The article you are looking for does not exist.</p>
          <a href="#/" class="${styles.btnPrimary}">Back to Home</a>
        </div>
      </main>
    `;
  }

  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return `
    <header class="${styles.blogHeader}">
      <div class="${styles.headerContainer}">
        <a href="#/" class="${styles.blogLogo}">📝 {{projectName}}</a>
        <nav class="${styles.blogNav}">
          <a href="#/">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="${c === post.category ? 'active' : ''}">${c}</a>
          `).join('')}
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>

    <main class="${styles.blogMain}">
      <article class="${styles.postDetail}">
        <div class="${styles.postDetailHeader}">
          <div class="${styles.breadcrumb}">
            <a href="#/">Home</a> / <a href="#/category/${post.category}">${post.category}</a> / <span>${post.title}</span>
          </div>
          <span class="${styles.postCategory}">${post.category}</span>
          <h1>${post.title}</h1>
          <div class="${styles.postMeta} ${styles.postMetaDetail}">
            <span>${post.authorAvatar} ${post.author}</span>
            <span>📅 ${post.date}</span>
            <span>⏱️ ${post.readTime}</span>
          </div>
        </div>

        <div class="${styles.postDetailImage}">${post.image}</div>

        <div class="${styles.postDetailBody}">
          ${post.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>

        <div class="${styles.postTags}">
          ${post.tags.map(tag => `<span class="${styles.tag}">${tag}</span>`).join('')}
        </div>

        <div class="${styles.postAuthorCard}">
          <span class="${styles.authorCardAvatar}">${post.authorAvatar}</span>
          <div class="${styles.authorCardInfo}">
            <h4>${post.author}</h4>
            <p>Writer and contributor at {{projectName}}. Passionate about sharing knowledge with the community.</p>
          </div>
        </div>
      </article>

      ${relatedPosts.length > 0 ? `
        <section class="${styles.relatedPosts}">
          <h2>Related Articles</h2>
          <div class="${styles.postsGrid}">
            ${relatedPosts.map(p => `
              <article class="${styles.postCard}">
                <a href="#/post/${p.id}" class="${styles.postCardLink}">
                  <div class="${styles.postCardImage}">${p.image}</div>
                  <div class="${styles.postCardContent}">
                    <span class="${styles.postCategory}">${p.category}</span>
                    <h3>${p.title}</h3>
                    <div class="${styles.postMeta}">
                      <span>${p.authorAvatar} ${p.author}</span>
                      <span>${p.readTime}</span>
                    </div>
                  </div>
                </a>
              </article>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </main>

    <footer class="${styles.blogFooter}">
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
