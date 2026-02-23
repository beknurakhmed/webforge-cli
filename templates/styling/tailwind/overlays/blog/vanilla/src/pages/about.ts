import { posts, categories } from '../main';

export function renderAbout(): string {
  const authors = [
    { name: 'Sarah Chen', avatar: '👩', role: 'Lead Writer', bio: 'Full-stack developer with a passion for TypeScript and modern web technologies.' },
    { name: 'Mike Johnson', avatar: '👨', role: 'Design Editor', bio: 'UI/UX designer who loves creating beautiful and accessible web experiences.' },
    { name: 'Emily Davis', avatar: '👩‍💼', role: 'Backend Expert', bio: 'Backend engineer specializing in Node.js, APIs, and cloud architecture.' },
    { name: 'Alex Rivera', avatar: '🧑', role: 'UX Researcher', bio: 'Dedicated to understanding users and improving digital product experiences.' },
  ];

  return `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">📝 {{projectName}}</a>
        <nav class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">Home</a>
          ${categories.filter(c => c !== 'All').map(c => `
            <a href="#/category/${c}" class="text-gray-700 font-medium text-[0.95rem] hover:text-indigo-600 transition-colors">${c}</a>
          `).join('')}
          <a href="#/about" class="text-indigo-600 font-medium text-[0.95rem]">About</a>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-8 py-8 min-h-[calc(100vh-200px)]">
      <section class="text-center py-12 mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">About {{projectName}}</h1>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">We are a community of developers, designers, and creators sharing our knowledge and experiences through thoughtful, well-crafted articles.</p>
      </section>

      <section class="mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p class="mb-4 leading-relaxed text-gray-700">At {{projectName}}, we believe that knowledge should be accessible to everyone. Our mission is to provide high-quality, practical content that helps developers and designers grow their skills and advance their careers.</p>
            <p class="mb-4 leading-relaxed text-gray-700">Whether you are just starting out or are a seasoned professional, you will find articles that challenge your thinking and expand your horizons. We cover everything from fundamental concepts to cutting-edge technologies.</p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 class="text-3xl font-bold text-indigo-600">${posts.length}+</h3>
              <p class="text-xs text-gray-500">Articles Published</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 class="text-3xl font-bold text-indigo-600">10K+</h3>
              <p class="text-xs text-gray-500">Monthly Readers</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 class="text-3xl font-bold text-indigo-600">${categories.length - 1}</h3>
              <p class="text-xs text-gray-500">Categories</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 class="text-3xl font-bold text-indigo-600">4</h3>
              <p class="text-xs text-gray-500">Writers</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${authors.map(a => `
            <div class="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <div class="text-5xl mb-4">${a.avatar}</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">${a.name}</h3>
              <p class="text-indigo-600 font-semibold text-xs mb-3">${a.role}</p>
              <p class="text-sm text-gray-500">${a.bio}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="mb-12">
        <div class="text-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-12 rounded-lg">
          <h2 class="text-2xl font-bold text-white mb-2">Want to Contribute?</h2>
          <p class="opacity-90 mb-6">We are always looking for passionate writers who want to share their expertise. If you have insights to share, we would love to hear from you.</p>
          <a href="#/" class="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get in Touch</a>
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
