import { posts, categories } from '../main';

export function renderPostDetail(params?: Record<string, string>): string {
  const id = parseInt(params?.id || '1');
  const post = posts.find(p => p.id === id);

  if (!post) {
    return `
      <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="#/" class="text-2xl font-bold text-indigo-600">📝 {{projectName}}</a>
          <nav class="flex gap-6">
            <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
            <a href="#/about" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About</a>
          </nav>
        </div>
      </header>
      <main class="max-w-7xl mx-auto px-8 py-8 min-h-[calc(100vh-200px)]">
        <div class="text-center py-16 px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h2>
          <p class="text-gray-500 mb-8">The article you are looking for does not exist.</p>
          <a href="#/" class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Back to Home</a>
        </div>
      </main>
    `;
  }

  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">📝 {{projectName}}</a>
        <nav class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="${c === post.category ? 'text-indigo-600' : 'text-gray-700'} font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">${c}</a>
          `).join('')}
          <a href="#/about" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">About</a>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-8 py-8 min-h-[calc(100vh-200px)]">
      <article class="max-w-3xl mx-auto">
        <div class="mb-8">
          <div class="text-sm text-gray-500 mb-4">
            <a href="#/" class="text-indigo-600 hover:underline">Home</a> / <a href="#/category/${post.category}" class="text-indigo-600 hover:underline">${post.category}</a> / <span>${post.title}</span>
          </div>
          <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">${post.category}</span>
          <h1 class="text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">${post.title}</h1>
          <div class="flex gap-6 text-sm text-gray-500 flex-wrap">
            <span>${post.authorAvatar} ${post.author}</span>
            <span>📅 ${post.date}</span>
            <span>⏱️ ${post.readTime}</span>
          </div>
        </div>

        <div class="text-7xl text-center py-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg mb-8">${post.image}</div>

        <div class="mb-8">
          ${post.content.split('\n\n').map(paragraph => `<p class="mb-6 text-[1.0625rem] leading-relaxed text-gray-700">${paragraph}</p>`).join('')}
        </div>

        <div class="flex gap-2 flex-wrap mb-8 pb-8 border-b border-gray-200">
          ${post.tags.map(tag => `<span class="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">${tag}</span>`).join('')}
        </div>

        <div class="flex gap-6 p-6 bg-gray-50 rounded-lg mb-12">
          <span class="text-5xl w-16 h-16 flex items-center justify-center bg-white rounded-full shrink-0">${post.authorAvatar}</span>
          <div>
            <h4 class="text-base font-semibold text-gray-900 mb-1">${post.author}</h4>
            <p class="text-sm text-gray-500">Writer and contributor at {{projectName}}. Passionate about sharing knowledge with the community.</p>
          </div>
        </div>
      </article>

      ${relatedPosts.length > 0 ? `
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${relatedPosts.map(p => `
              <article class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <a href="#/post/${p.id}" class="block">
                  <div class="text-5xl p-8 text-center bg-gradient-to-br from-indigo-50 to-indigo-100">${p.image}</div>
                  <div class="p-6">
                    <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">${p.category}</span>
                    <h3 class="text-lg font-semibold text-gray-900 mt-2 mb-2 leading-snug">${p.title}</h3>
                    <div class="flex gap-4 text-xs text-gray-500 flex-wrap">
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

    <footer class="bg-gray-900 text-gray-400 mt-12">
      <div class="text-center py-6 px-8 border-t border-gray-800 text-sm">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
