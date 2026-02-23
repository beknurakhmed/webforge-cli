export function renderContact(): string {
  return `
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#/" class="text-2xl font-bold text-indigo-600">{{projectName}}</a>
        <div class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
          <a href="#/projects" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#/about" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About</a>
          <a href="#/contact" class="text-indigo-600 font-medium">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="max-w-7xl mx-auto px-8 py-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
        <p class="text-gray-500 text-[1.0625rem]">Have a question or want to work together? I'd love to hear from you.</p>
      </section>

      <section class="max-w-7xl mx-auto px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div class="bg-white border border-gray-200 rounded-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="mb-5">
                  <label class="block text-sm font-semibold text-gray-900 mb-1">First Name</label>
                  <input type="text" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="John" />
                </div>
                <div class="mb-5">
                  <label class="block text-sm font-semibold text-gray-900 mb-1">Last Name</label>
                  <input type="text" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div class="mb-5">
                <label class="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input type="email" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="john@example.com" />
              </div>
              <div class="mb-5">
                <label class="block text-sm font-semibold text-gray-900 mb-1">Subject</label>
                <select class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
                  <option value="">Select a topic</option>
                  <option>Project Inquiry</option>
                  <option>Freelance Work</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="mb-5">
                <label class="block text-sm font-semibold text-gray-900 mb-1">Message</label>
                <textarea class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white font-[inherit] focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors resize-y min-h-[120px]" rows="5" placeholder="Tell me about your project or question..."></textarea>
              </div>
              <button type="submit" class="w-full px-6 py-2.5 rounded-lg font-semibold text-[0.9rem] bg-indigo-600 text-white border-none cursor-pointer hover:bg-indigo-700 transition-colors">Send Message</button>
            </form>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Contact Info</h2>
            <div class="flex flex-col gap-5 mb-8">
              <div class="flex gap-4 items-start">
                <span class="text-2xl w-10 h-10 flex items-center justify-center bg-indigo-50 rounded-lg shrink-0">📧</span>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900">Email</h4>
                  <p class="text-xs text-gray-500">hello@developer.com</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-2xl w-10 h-10 flex items-center justify-center bg-indigo-50 rounded-lg shrink-0">📍</span>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900">Location</h4>
                  <p class="text-xs text-gray-500">San Francisco, CA</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-2xl w-10 h-10 flex items-center justify-center bg-indigo-50 rounded-lg shrink-0">📞</span>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900">Phone</h4>
                  <p class="text-xs text-gray-500">(555) 123-4567</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-2xl w-10 h-10 flex items-center justify-center bg-indigo-50 rounded-lg shrink-0">🕐</span>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900">Availability</h4>
                  <p class="text-xs text-gray-500">Mon - Fri, 9am - 6pm PST</p>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="text-base font-semibold text-gray-900 mb-3">Follow Me</h3>
              <div class="grid grid-cols-2 gap-2">
                <a href="#" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="#" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-base font-semibold text-gray-900 mb-3">FAQ</h3>
              <div class="py-3 border-b border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-1">What is your typical response time?</h4>
                <p class="text-xs text-gray-500">I usually respond within 24-48 hours during business days.</p>
              </div>
              <div class="py-3 border-b border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-1">Are you available for freelance work?</h4>
                <p class="text-xs text-gray-500">Yes! I am currently open to freelance and contract opportunities.</p>
              </div>
              <div class="py-3">
                <h4 class="text-sm font-semibold text-gray-900 mb-1">Do you work remotely?</h4>
                <p class="text-xs text-gray-500">Absolutely. I have experience working with remote teams across different time zones.</p>
              </div>
            </div>
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
