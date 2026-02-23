import { posts, categories } from '../main';

export function renderCategory(params?: Record<string, string>): string {
  const categoryName = params?.name || 'Technology';
  const filteredPosts = posts.filter(p => p.category === categoryName);

  return `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">📝 {{projectName}}</a>
        <nav class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="${c === categoryName ? 'text-indigo-600' : 'text-gray-700'} font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">${c}</a>
          `).join('')}
          <a href="#/about" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">About</a>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-8 py-8 min-h-[calc(100vh-200px)]">
      <section class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900">${categoryName}</h1>
        <p class="text-gray-500">${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in this category</p>
      </section>

      <div class="flex gap-2 flex-wrap mb-8">
        ${categories.map(c => `
          <a href="${c === 'All' ? '#/' : '#/category/' + c}" class="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${c === categoryName ? 'bg-indigo-600 text-white border-indigo-600' : 'text-gray-500 border-gray-200 bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}">${c}</a>
        `).join('')}
      </div>

      ${filteredPosts.length === 0 ? `
        <div class="text-center py-16 px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">No articles found</h2>
          <p class="text-gray-500 mb-8">There are no articles in the "${categoryName}" category yet.</p>
          <a href="#/" class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Browse All Articles</a>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          ${filteredPosts.map(p => `
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
      `}
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
