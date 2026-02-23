import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  template: `
    <section id="cta" class="bg-gray-50 py-20 px-6 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
      <p class="text-gray-500 mb-8">Join thousands of developers building amazing products.</p>
      <button class="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-lg transition-colors">Start Free Trial</button>
      <p class="text-sm text-gray-400 mt-4">No credit card required</p>
    </section>
  `,
  styles: []
})
export class CtaComponent {}
