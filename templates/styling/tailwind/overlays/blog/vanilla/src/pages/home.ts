import { posts, categories } from '../main';

export function renderHome(): string {
  const featured = posts[0];
  const recent = posts.slice(1);

  return `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">📝 {{projectName}}</a>
        <nav class="flex gap-6">
          <a href="#/" class="text-indigo-600 font-medium text-[0.95rem]">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">${c}</a>
          `).join('')}
          <a href="#/about" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">About</a>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-8 py-8 min-h-[calc(100vh-200px)]">
      <section class="mb-12">
        <a href="#/post/${featured.id}" class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="text-7xl flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 min-h-[300px]">${featured.image}</div>
          <div class="p-8 flex flex-col justify-center">
            <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-semibold uppercase tracking-wider w-fit">${featured.category}</span>
            <h1 class="text-2xl font-bold text-gray-900 mt-2 mb-4 leading-tight">${featured.title}</h1>
            <p class="text-gray-500 mb-6 leading-relaxed">${featured.excerpt}</p>
            <div class="flex gap-4 text-xs text-gray-500 flex-wrap">
              <span>${featured.authorAvatar} ${featured.author}</span>
              <span>${featured.date}</span>
              <span>${featured.readTime}</span>
            </div>
          </div>
        </a>
      </section>

      <section>
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <div class="flex gap-2">
            ${categories.map(c => `
              <a href="${c === 'All' ? '#/' : '#/category/' + c}" class="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${c === 'All' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-gray-500 border-gray-200 bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}">${c}</a>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          ${recent.map(p => `
            <article class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <a href="#/post/${p.id}" class="block">
                <div class="text-5xl p-8 text-center bg-gradient-to-br from-indigo-50 to-indigo-100">${p.image}</div>
                <div class="p-6">
                  <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">${p.category}</span>
                  <h3 class="text-lg font-semibold text-gray-900 mt-2 mb-2 leading-snug">${p.title}</h3>
                  <p class="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">${p.excerpt}</p>
                  <div class="flex gap-4 text-xs text-gray-500 flex-wrap">
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

      <section class="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 class="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p class="opacity-90 mb-6">Get the latest articles and insights delivered straight to your inbox.</p>
        <div class="flex max-w-lg mx-auto gap-2">
          <input type="email" placeholder="Enter your email address" class="flex-1 px-4 py-3 rounded-lg text-[0.95rem] border-none focus:outline-none text-gray-900" />
          <button class="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity">Subscribe</button>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-gray-400 mt-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
        <div>
          <h4 class="text-white font-semibold mb-4">{{projectName}}</h4>
          <p>Sharing knowledge and insights about web development, design, and technology.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Categories</h4>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="block py-1 text-gray-400 hover:text-white transition-colors">${c}</a>
          `).join('')}
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Follow Us</h4>
          <a href="#" class="block py-1 text-gray-400 hover:text-white transition-colors">🐦 Twitter</a>
          <a href="#" class="block py-1 text-gray-400 hover:text-white transition-colors">💼 LinkedIn</a>
          <a href="#" class="block py-1 text-gray-400 hover:text-white transition-colors">🐙 GitHub</a>
        </div>
      </div>
      <div class="text-center py-6 px-8 border-t border-gray-800 text-sm">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
