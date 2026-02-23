import { projects, skills } from '../main';

export function renderHome(): string {
  const hash = window.location.hash.slice(1) || '/';
  const featuredProjects = projects.slice(0, 3);

  return `
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">{{projectName}}</a>
        <div class="flex gap-6">
          <a href="#/" class="${hash === '/' ? 'text-indigo-600' : 'text-gray-700'} font-medium hover:text-indigo-600 transition-colors">Home</a>
          <a href="#/projects" class="${hash === '/projects' ? 'text-indigo-600' : 'text-gray-700'} font-medium hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#/about" class="${hash === '/about' ? 'text-indigo-600' : 'text-gray-700'} font-medium hover:text-indigo-600 transition-colors">About</a>
          <a href="#/contact" class="${hash === '/contact' ? 'text-indigo-600' : 'text-gray-700'} font-medium hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <p class="text-indigo-600 font-semibold text-lg mb-2">Hello, I'm</p>
          <h1 class="text-5xl font-bold text-gray-900 leading-tight mb-2">{{projectName}}</h1>
          <p class="text-2xl text-indigo-600 font-semibold mb-4">Full Stack Developer & Designer</p>
          <p class="text-gray-500 text-[1.0625rem] mb-8 leading-relaxed max-w-xl">I build beautiful, performant, and accessible web applications that solve real-world problems. Passionate about clean code and great user experiences.</p>
          <div class="flex gap-4 mb-12">
            <a href="#/projects" class="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.9rem] bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">View My Work</a>
            <a href="#/contact" class="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.9rem] bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-colors">Get in Touch</a>
          </div>
          <div class="flex gap-10">
            <div>
              <h3 class="text-3xl font-bold text-gray-900">${projects.length}+</h3>
              <p class="text-xs text-gray-500">Projects</p>
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900">5+</h3>
              <p class="text-xs text-gray-500">Years Exp.</p>
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900">20+</h3>
              <p class="text-xs text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="text-[10rem] w-72 h-72 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full">👨‍💻</div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <a href="#/projects" class="text-indigo-600 font-semibold hover:underline">View All &rarr;</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${featuredProjects.map(p => `
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div class="text-6xl p-8 text-center bg-gradient-to-br from-indigo-50 to-indigo-100">${p.image}</div>
              <div class="p-6">
                <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full font-semibold">${p.category}</span>
                <h3 class="text-lg font-semibold text-gray-900 mt-2 mb-2">${p.title}</h3>
                <p class="text-sm text-gray-500 mb-4 leading-relaxed">${p.description}</p>
                <div class="flex flex-wrap gap-1.5 mb-4">
                  ${p.tags.map(t => `<span class="px-2.5 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-[0.7rem] font-semibold text-gray-500">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${skills.map(s => `
            <div class="bg-white border border-gray-200 rounded-lg px-5 py-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xl">${s.icon}</span>
                <span class="flex-1 font-semibold text-[0.9rem] text-gray-900">${s.name}</span>
                <span class="text-xs text-gray-500 font-semibold">${s.level}%</span>
              </div>
              <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full transition-all" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12 text-center">
        <div class="max-w-xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Let's Work Together</h2>
          <p class="text-gray-500 mb-6">Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
          <a href="#/contact" class="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.9rem] bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Start a Conversation</a>
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
