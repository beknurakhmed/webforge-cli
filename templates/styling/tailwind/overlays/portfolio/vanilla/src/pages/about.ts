import { skills, experience } from '../main';

export function renderAbout(): string {
  return `
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">{{projectName}}</a>
        <div class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
          <a href="#/projects" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#/about" class="text-indigo-600 font-medium">About</a>
          <a href="#/contact" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="max-w-7xl mx-auto px-8 py-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">About Me</h1>
        <p class="text-gray-500 text-[1.0625rem]">Learn more about my background, experience, and what drives me as a developer.</p>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
          <div class="text-center">
            <div class="text-8xl w-44 h-44 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full mx-auto mb-4">👨‍💻</div>
            <h2 class="text-xl font-bold text-gray-900 mb-1">{{projectName}}</h2>
            <p class="text-indigo-600 font-semibold text-[0.9rem] mb-4">Full Stack Developer</p>
            <div class="flex justify-center gap-3">
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all">🐙</a>
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all">💼</a>
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all">🐦</a>
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all">📧</a>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">My Story</h3>
            <p class="mb-4 leading-relaxed text-gray-700">I'm a passionate Full Stack Developer with over 5 years of experience building web and mobile applications. I specialize in creating performant, accessible, and visually appealing digital experiences.</p>
            <p class="mb-4 leading-relaxed text-gray-700">My journey in software development began when I built my first website at age 15. Since then, I've been constantly learning and growing, working with startups and enterprises alike to deliver impactful solutions.</p>
            <p class="mb-4 leading-relaxed text-gray-700">When I'm not coding, you can find me contributing to open source projects, writing technical articles, or exploring the great outdoors. I believe in continuous learning and sharing knowledge with the community.</p>

            <div class="mt-6 flex flex-col gap-3">
              <div class="flex gap-4 py-2">
                <span class="font-semibold text-gray-900 min-w-[100px] text-sm">Location</span>
                <span class="text-gray-500 text-sm">📍 San Francisco, CA</span>
              </div>
              <div class="flex gap-4 py-2">
                <span class="font-semibold text-gray-900 min-w-[100px] text-sm">Email</span>
                <span class="text-gray-500 text-sm">📧 hello@developer.com</span>
              </div>
              <div class="flex gap-4 py-2">
                <span class="font-semibold text-gray-900 min-w-[100px] text-sm">Availability</span>
                <span class="text-gray-500 text-sm">🟢 Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
        <div class="relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200">
          ${experience.map((exp, i) => `
            <div class="relative mb-8">
              <div class="absolute -left-8 top-1 w-4 h-4 bg-indigo-600 rounded-full border-[3px] border-white shadow-[0_0_0_2px_#4f46e5]"></div>
              <div class="bg-white border border-gray-200 rounded-lg p-5">
                <div class="flex justify-between items-center mb-1">
                  <h3 class="text-base font-semibold text-gray-900">${exp.role}</h3>
                  <span class="text-xs text-indigo-600 font-semibold">${exp.period}</span>
                </div>
                <p class="text-sm text-indigo-600 font-semibold mb-2">${exp.company}</p>
                <p class="text-sm text-gray-500 leading-relaxed">${exp.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
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

      <section class="max-w-7xl mx-auto px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="text-4xl mb-3">🎓</div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">B.S. Computer Science</h3>
            <p class="text-indigo-600 font-semibold text-sm">University of Technology</p>
            <p class="text-gray-500 text-xs">2014 - 2018</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="text-4xl mb-3">📜</div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">AWS Certified Developer</h3>
            <p class="text-indigo-600 font-semibold text-sm">Amazon Web Services</p>
            <p class="text-gray-500 text-xs">2021</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="text-4xl mb-3">📜</div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">Google UX Design Certificate</h3>
            <p class="text-indigo-600 font-semibold text-sm">Google / Coursera</p>
            <p class="text-gray-500 text-xs">2022</p>
          </div>
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
