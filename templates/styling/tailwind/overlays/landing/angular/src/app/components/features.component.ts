import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="features" class="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Features</h2>
      <p class="text-gray-500 mb-12">Everything you need to build a modern web application</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div
          *ngFor="let f of features"
          class="p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <span class="text-3xl block mb-4">{{ f.icon }}</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ f.title }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ f.description }}</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FeaturesComponent {
  features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
    { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
    { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices.' },
    { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
    { icon: '📱', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
    { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
  ];
}
