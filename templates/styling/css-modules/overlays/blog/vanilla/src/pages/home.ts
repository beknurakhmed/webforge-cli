import { posts, categories, styles } from '../main';

export function renderHome(): string {
  const featured = posts[0];
  const recent = posts.slice(1);

  return `
    <header class="${styles.blogHeader}">
      <div class="${styles.headerContainer}">
        <a href="#/" class="${styles.blogLogo}">📝 {{projectName}}</a>
        <nav class="${styles.blogNav}">
          <a href="#/" class="active">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}">${c}</a>
          `).join('')}
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>

    <main class="${styles.blogMain}">
      <section class="${styles.heroPost}">
        <a href="#/post/${featured.id}" class="${styles.heroPostLink}">
          <div class="${styles.heroPostImage}">${featured.image}</div>
          <div class="${styles.heroPostContent}">
            <span class="${styles.postCategory}">${featured.category}</span>
            <h1>${featured.title}</h1>
            <p>${featured.excerpt}</p>
            <div class="${styles.postMeta}">
              <span>${featured.authorAvatar} ${featured.author}</span>
              <span>${featured.date}</span>
              <span>${featured.readTime}</span>
            </div>
          </div>
        </a>
      </section>

      <section>
        <div class="${styles.sectionHeader}">
          <h2>Latest Articles</h2>
          <div class="${styles.categoryFilters}">
            ${categories.map(c => `
              <a href="${c === 'All' ? '#/' : '#/category/' + c}" class="${styles.filterBtn} ${c === 'All' ? 'active' : ''}">${c}</a>
            `).join('')}
          </div>
        </div>

        <div class="${styles.postsGrid}">
          ${recent.map(p => `
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
      </section>

      <section class="${styles.newsletter}">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest articles and insights delivered straight to your inbox.</p>
        <div class="${styles.newsletterForm}">
          <input type="email" placeholder="Enter your email address" class="${styles.newsletterInput}" />
          <button class="${styles.newsletterBtn}">Subscribe</button>
        </div>
      </section>
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
