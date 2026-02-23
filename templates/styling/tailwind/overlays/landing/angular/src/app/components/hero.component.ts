import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <header class="bg-gradient-to-br from-indigo-600 to-purple-700 text-white pb-16">
      <nav class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div class="text-2xl font-bold">{{projectName}}</div>
        <div class="flex gap-8">
          <a href="#features" class="text-white/90 hover:text-white font-medium transition-colors">Features</a>
          <a href="#cta" class="text-white/90 hover:text-white font-medium transition-colors">Pricing</a>
          <a href="#contact" class="text-white/90 hover:text-white font-medium transition-colors">Contact</a>
        </div>
      </nav>
      <div class="text-center px-6 pt-16 max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">Build Something Amazing</h1>
        <p class="text-lg sm:text-xl text-white/90 mb-8">A modern landing page template to kickstart your next project.</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <button class="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg border-2 border-indigo-500 hover:border-indigo-400 transition-colors">Get Started</button>
          <button class="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white transition-colors">Learn More</button>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeroComponent {}
