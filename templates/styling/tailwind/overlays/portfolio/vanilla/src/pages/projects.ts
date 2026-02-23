import { projects } from '../main';

export function renderProjects(): string {
  const hash = window.location.hash.slice(1) || '/';
  const categoriesSet = ['All', ...new Set(projects.map(p => p.category))];

  return `
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">{{projectName}}</a>
        <div class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
          <a href="#/projects" class="text-indigo-600 font-medium">Projects</a>
          <a href="#/about" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About</a>
          <a href="#/contact" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="max-w-7xl mx-auto px-8 py-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">My Projects</h1>
        <p class="text-gray-500 text-[1.0625rem]">A collection of projects I have worked on, from web applications to mobile apps and design work.</p>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <div class="flex gap-2 justify-center flex-wrap mb-8">
          ${categoriesSet.map(c => `
            <button class="px-5 py-1.5 rounded-full text-sm font-semibold border cursor-pointer transition-all ${c === 'All' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-gray-500 bg-white border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}">${c}</button>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${projects.map(p => `
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div class="text-6xl p-8 text-center bg-gradient-to-br from-indigo-50 to-indigo-100">${p.image}</div>
              <div class="p-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full font-semibold">${p.category}</span>
                  <span class="text-xs text-gray-500">${p.year}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${p.title}</h3>
                <p class="text-sm text-gray-500 mb-4 leading-relaxed">${p.description}</p>
                <div class="flex flex-wrap gap-1.5 mb-4">
                  ${p.tags.map(t => `<span class="px-2.5 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-[0.7rem] font-semibold text-gray-500">${t}</span>`).join('')}
                </div>
                <div class="flex gap-2">
                  <a href="${p.link}" class="inline-block px-4 py-1.5 rounded-lg font-semibold text-xs bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">View Project</a>
                  <a href="${p.link}" class="inline-block px-4 py-1.5 rounded-lg font-semibold text-xs bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12 text-center">
        <div class="max-w-xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Interested in Working Together?</h2>
          <p class="text-gray-500 mb-6">I'm always open to new opportunities and interesting projects. Let's chat!</p>
          <a href="#/contact" class="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.9rem] bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Get in Touch</a>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-gray-400 mt-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
        <div>
          <h4 class="text-white font-semibold mb-4">{{projectName}}</h4>
          <p>Full Stack Developer crafting digital experiences that make a difference.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <a href="#/" class="block py-1 text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#/projects" class="block py-1 text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#/about" class="block py-1 text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#/contact" class="block py-1 text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Connect</h4>
          <a href="#" class="block py-1 text-gray-400 hover:text-white transition-colors">🐙 GitHub</a>
          <a href="#" class="block py-1 text-gray-400 hover:text-white transition-colors">💼 LinkedIn</a>
          <a href="#" class="block py-1 text-gray-400 hover:text-white transition-colors">🐦 Twitter</a>
        </div>
      </div>
      <div class="text-center py-6 px-8 border-t border-gray-800 text-sm">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
