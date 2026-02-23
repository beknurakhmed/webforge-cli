import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="min-h-screen">
    <header class="bg-gradient-to-br from-indigo-500 to-purple-600 text-white pb-16">
      <nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div class="text-2xl font-bold text-white">{{projectName}}</div>
        <div class="flex gap-8">
          <a href="#features" class="text-white/90 font-medium hover:text-white transition-colors">Features</a>
          <a href="#cta" class="text-white/90 font-medium hover:text-white transition-colors">Pricing</a>
          <a href="#contact" class="text-white/90 font-medium hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
      <div class="text-center px-8 pt-16 pb-4 max-w-3xl mx-auto">
        <h1 class="text-5xl font-extrabold mb-6 leading-tight">Build Something Amazing</h1>
        <p class="text-xl opacity-90 mb-8">A modern landing page template to kickstart your next project.</p>
        <div class="flex gap-4 justify-center">
          <button class="px-6 py-3 rounded-lg text-base font-semibold bg-indigo-600 text-white border-2 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 transition-colors cursor-pointer">Get Started</button>
          <button class="px-6 py-3 rounded-lg text-base font-semibold bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors cursor-pointer">Learn More</button>
        </div>
      </div>
    </header>

    <section id="features" class="py-20 px-8 max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-2 text-gray-900">Features</h2>
      <p class="text-gray-500 mb-12">Everything you need to build a modern web application</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left" id="feature-grid"></div>
    </section>

    <section id="cta" class="bg-gray-50 py-20 px-8 text-center">
      <h2 class="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
      <p class="text-gray-500 mb-8">Join thousands of developers building amazing products.</p>
      <button class="px-10 py-4 rounded-lg text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer">Start Free Trial</button>
      <p class="text-sm text-gray-400 mt-4">No credit card required</p>
    </section>

    <footer class="bg-gray-900 text-gray-300 pt-16 pb-8 px-8">
      <div class="flex justify-between max-w-7xl mx-auto gap-16 flex-wrap">
        <div>
          <h3 class="text-white text-2xl font-bold mb-2">{{projectName}}</h3>
          <p class="text-gray-400">Building the future of the web.</p>
        </div>
        <div class="flex gap-16">
          <div class="flex flex-col gap-2"><h4 class="text-white text-sm uppercase mb-2 font-semibold">Product</h4><a href="#features" class="text-gray-400 hover:text-white transition-colors">Features</a><a href="#cta" class="text-gray-400 hover:text-white transition-colors">Pricing</a></div>
          <div class="flex flex-col gap-2"><h4 class="text-white text-sm uppercase mb-2 font-semibold">Company</h4><a href="#" class="text-gray-400 hover:text-white transition-colors">About</a><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></div>
          <div class="flex flex-col gap-2"><h4 class="text-white text-sm uppercase mb-2 font-semibold">Legal</h4><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a></div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-12 pt-6 text-center"><p class="text-sm text-gray-500">&copy; 2025 {{projectName}}. All rights reserved.</p></div>
    </footer>
  </div>
`;

const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', desc: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', desc: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', desc: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', desc: 'Deploy anywhere in minutes.' },
];

const grid = document.getElementById('feature-grid')!;
grid.innerHTML = features
  .map(f => `<div class="p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"><span class="text-3xl block mb-4">${f.icon}</span><h3 class="text-xl font-semibold mb-2 text-gray-900">${f.title}</h3><p class="text-gray-500 leading-relaxed">${f.desc}</p></div>`)
  .join('');
